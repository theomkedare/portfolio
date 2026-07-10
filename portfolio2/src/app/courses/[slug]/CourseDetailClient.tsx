"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Award, 
  BookOpen, 
  Star, 
  Check, 
  ChevronDown, 
  ChevronRight,
  Share2, 
  Heart, 
  Globe, 
  Users, 
  BarChart, 
  ShieldCheck, 
  HelpCircle,
  PlayCircle,
  Lock,
  ArrowLeft
} from "lucide-react";
import { Course } from "../../../data/courses";

// Extend global window object to include Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface CourseDetailClientProps {
  course: Course;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const router = useRouter();
  const [activeSections, setActiveSections] = useState<number[]>([0]); // Open first module by default
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [showStickyMobile, setShowStickyMobile] = useState(false);

  // Load wishlist state and handle sticky mobile threshold scroll
  useEffect(() => {
    // Wishlist loading
    try {
      const stored = localStorage.getItem("portfolio_courses_wishlist");
      if (stored) {
        const list = JSON.parse(stored);
        setIsWishlisted(list.includes(course.id));
      }
    } catch (e) {
      console.error(e);
    }

    // Scroll listener for mobile sticky check
    const handleScroll = () => {
      const heroHeight = 500;
      setShowStickyMobile(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [course.id]);

  // Wishlist toggle
  const toggleWishlist = () => {
    try {
      const stored = localStorage.getItem("portfolio_courses_wishlist");
      let list = stored ? JSON.parse(stored) : [];
      if (list.includes(course.id)) {
        list = list.filter((id: string) => id !== course.id);
        setIsWishlisted(false);
      } else {
        list.push(course.id);
        setIsWishlisted(true);
      }
      localStorage.setItem("portfolio_courses_wishlist", JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }
  };

  // Copy link action
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
  };

  // Toggle curriculum section
  const toggleSection = (index: number) => {
    if (activeSections.includes(index)) {
      setActiveSections(activeSections.filter(i => i !== index));
    } else {
      setActiveSections([...activeSections, index]);
    }
  };

  // Load Razorpay dynamic script
  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Checkout Payment Handler
  const handlePurchase = async () => {
    if (isPaymentLoading) return;
    setIsPaymentLoading(true);

    try {
      // 1. Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert("Failed to load Razorpay Payment Gateway. Check your internet connection.");
        setIsPaymentLoading(false);
        return;
      }

      // 2. Call backend order API
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: course.id }),
      });

      const orderData = await response.json();

      if (!response.ok || !orderData.success) {
        throw new Error(orderData.error || "Could not initialize transaction order.");
      }

      // 3. Configure Razorpay checkout
      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!keyId) {
        // Fallback test key if env is not loaded on local environment
        console.warn("NEXT_PUBLIC_RAZORPAY_KEY_ID env is missing. Checkout will fail if signature is strictly verified.");
      }

      const options = {
        key: keyId || "rzp_test_placeholder",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Om Kedare Academy",
        description: orderData.courseTitle,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            setIsPaymentLoading(true);
            // 4. Verify signature on server
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyResult = await verifyRes.json();
            if (verifyResult.success) {
              // Redirect to payment success page
              router.push(`/checkout/success?courseId=${course.id}&paymentId=${response.razorpay_payment_id}&orderId=${response.razorpay_order_id}`);
            } else {
              alert(verifyResult.error || "Payment verification failed.");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Error verifying payment signature. Please contact support.");
          } finally {
            setIsPaymentLoading(false);
          }
        },
        prefill: {
          name: "Om Kedare Student",
          email: "student@omkedare.dev",
          contact: "9999999999"
        },
        theme: {
          color: "#8b5cf6", // premium purple accent
        },
        modal: {
          ondismiss: function () {
            setIsPaymentLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error: any) {
      console.error("Payment setup failed:", error);
      alert(error.message || "Failed to initialize payment process.");
      setIsPaymentLoading(false);
    }
  };

  const discountAmount = course.originalPrice - course.price;
  const discountPercent = Math.round((discountAmount / course.originalPrice) * 100);

  return (
    <div className="min-h-screen pb-40 relative">
      {/* Back to courses */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <Link 
          href="/courses" 
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={14} /> Back to Academy
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
        {/* Left Column: Details (Main Content) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Hero Section */}
          <section className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-500 text-[10px] font-black uppercase tracking-widest border border-purple-500/20">
                {course.category}
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                {course.level}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-black dark:text-white leading-tight uppercase tracking-tight">
              {course.title}
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-medium leading-relaxed">
              {course.subtitle}
            </p>

            {/* Sub-hero info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-semibold border-t border-black/5 dark:border-white/5 pt-6">
              <div className="flex items-center gap-1.5">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                <span className="text-black dark:text-white font-bold">{course.rating.toFixed(1)} Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={16} className="text-purple-500" />
                <span>{course.students.toLocaleString()} Students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe size={16} className="text-blue-500" />
                <span>{course.language}</span>
              </div>
            </div>
          </section>

          {/* What you'll learn */}
          <section className="p-8 sm:p-10 rounded-3xl border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] backdrop-blur-md">
            <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-6 uppercase tracking-tight">
              What You&apos;ll Learn
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex gap-3">
                  <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum Accordion */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight">
                Course Curriculum
              </h2>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                {course.curriculum.length} Modules • {course.curriculum.reduce((acc, curr) => acc + curr.lessons.length, 0)} Lessons
              </span>
            </div>

            <div className="space-y-4">
              {course.curriculum.map((section, sectionIdx) => {
                const isOpen = activeSections.includes(sectionIdx);
                return (
                  <div 
                    key={sectionIdx}
                    className="border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleSection(sectionIdx)}
                      className="w-full flex items-center justify-between p-5 text-left font-black text-sm text-black dark:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="flex-1 pr-4">{section.title}</span>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-xs font-medium text-gray-500">
                          {section.lessons.length} lessons
                        </span>
                        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 border-t border-black/5 dark:border-white/5 divide-y divide-black/5 dark:divide-white/5">
                            {section.lessons.map((lesson, lessonIdx) => (
                              <div 
                                key={lessonIdx}
                                className="py-3 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400"
                              >
                                <div className="flex items-center gap-3">
                                  <PlayCircle size={16} className="text-purple-500" />
                                  <span>{lesson.title}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-500">
                                  <span>{lesson.duration}</span>
                                  <Lock size={12} className="text-gray-500" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Requirements */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight">
              Requirements
            </h2>
            <ul className="space-y-3 pl-1">
              {course.requirements.map((req, idx) => (
                <li key={idx} className="flex gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Description Detail */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight">
              Course Description
            </h2>
            <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-medium space-y-4">
              <p>{course.description}</p>
              <p>Through this course, you will acquire high-demand commercial software engineering paradigms. We dive directly into setting up proper directories, testing database synchronization, securing user contexts, and optimizing dynamic asset delivery.</p>
            </div>
          </section>

          {/* Course Features */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight">
              Course Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300">
                  <ShieldCheck size={18} className="text-purple-500" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ specific to Course */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight">
              Course FAQ
            </h2>
            <div className="space-y-4">
              {course.faq.map((faqItem, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-2xl border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-black text-sm text-black dark:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                    >
                      <span>{faqItem.question}</span>
                      <ChevronDown 
                        size={16} 
                        className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <div className="p-5 pt-0 border-t border-black/5 dark:border-white/5 text-gray-500 text-sm font-medium leading-relaxed">
                            {faqItem.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Purchase Card (Desktop Only) */}
        <div className="hidden lg:block">
          <div className="sticky top-32 rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
            {/* Aspect Ratio video mockup container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-900 border border-black/5 dark:border-white/10">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl animate-pulse cursor-pointer">
                  <PlayCircle size={32} className="ml-0.5" />
                </div>
              </div>
            </div>

            {/* Pricing Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-black dark:text-white">₹{course.price}</span>
                {course.originalPrice > course.price && (
                  <>
                    <span className="text-sm font-medium text-gray-500 line-through">₹{course.originalPrice}</span>
                    <span className="text-xs font-black uppercase text-green-500">
                      ({discountPercent}% OFF)
                    </span>
                  </>
                )}
              </div>
              <p className="text-xs font-medium text-gray-500">Offers secure checkout and instant onboarding.</p>
            </div>

            {/* Main Buy Button */}
            <button
              onClick={handlePurchase}
              disabled={isPaymentLoading}
              className="w-full py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-widest hover:opacity-85 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 mb-4"
            >
              {isPaymentLoading ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                "BUY NOW"
              )}
            </button>

            {/* Secondary actions (Wishlist and Copy link) */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={toggleWishlist}
                className="flex-1 py-3 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-xs font-black uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Heart size={14} className={isWishlisted ? "fill-red-500 text-red-500" : ""} />
                {isWishlisted ? "Wishlisted" : "Wishlist"}
              </button>
              <button
                onClick={handleCopyLink}
                className="p-3 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-gray-500 hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center justify-center relative flex-1 gap-2 text-xs font-black uppercase tracking-wider"
              >
                <Share2 size={14} />
                <span>{isCopied ? "Copied!" : "Share"}</span>
              </button>
            </div>

            {/* Specs inside the card */}
            <div className="space-y-4 border-t border-black/5 dark:border-white/5 pt-6 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Duration</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Language</span>
                <span>{course.language}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Access</span>
                <span>LIFETIME ACCESS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Certificate</span>
                <span className="flex items-center gap-1.5 text-purple-500">
                  <Award size={14} /> INCLUDED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Panel (Mobile Only - Slides in when scrolled past hero threshold) */}
      <AnimatePresence>
        {showStickyMobile && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-black/5 dark:border-white/10 p-4 px-6 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.15)]"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Course Fee</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-black dark:text-white">₹{course.price}</span>
                {course.originalPrice > course.price && (
                  <span className="text-xs text-gray-500 line-through">₹{course.originalPrice}</span>
                )}
              </div>
            </div>

            <button
              onClick={handlePurchase}
              disabled={isPaymentLoading}
              className="px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-black uppercase tracking-widest hover:opacity-85 active:scale-95 transition-all shadow-md flex items-center gap-2"
            >
              {isPaymentLoading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                "BUY NOW"
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
