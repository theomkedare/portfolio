"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Sparkles, 
  Clock, 
  Award, 
  Heart, 
  Share2, 
  BookOpen, 
  Star, 
  Check, 
  ChevronDown, 
  SlidersHorizontal,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Users
} from "lucide-react";
import { Course } from "../../data/courses";

interface CoursesClientProps {
  courses: Course[];
}

export default function CoursesClient({ courses }: CoursesClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Load wishlist from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_courses_wishlist");
      if (stored) {
        setWishlist(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to read wishlist from localStorage", e);
    }
  }, []);

  // Toggle wishlist item
  const toggleWishlist = (courseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    let newWishlist = [...wishlist];
    if (wishlist.includes(courseId)) {
      newWishlist = newWishlist.filter(id => id !== courseId);
    } else {
      newWishlist.push(courseId);
    }
    setWishlist(newWishlist);
    localStorage.setItem("portfolio_courses_wishlist", JSON.stringify(newWishlist));
  };

  // Share course action
  const shareCourse = (slug: string, id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/courses/${slug}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      })
      .catch(err => {
        console.error("Could not copy link", err);
      });
  };

  // Extract all categories dynamically
  const categories = ["All", ...Array.from(new Set(courses.map(c => c.category)))];

  // Filtering logic
  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sorting logic
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    }
    if (sortBy === "price-high") {
      return b.price - a.price;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    // Default/Featured: popular/bestseller first
    return (b.popular || b.bestSeller ? 1 : 0) - (a.popular || a.bestSeller ? 1 : 0);
  });

  const whyMeReasons = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: "100% Practical & Real-world",
      desc: "No boring slides or theoretical lectures. Every course is focused on building real, production-ready applications."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Updated Tech Stack",
      desc: "Courses are continuously updated for the latest standards like Next.js 15, React 19, and advanced Tailwind configuration."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-500" />,
      title: "Structured Curriculum",
      desc: "Step-by-step modular planning guides you from complete basics to deep architectural engineering patterns."
    }
  ];

  const studentBenefits = [
    {
      title: "Lifetime Access",
      desc: "Pay once and get lifetime access to all current and future videos, code repos, and guides."
    },
    {
      title: "Private Discord",
      desc: "Join a dedicated server of driven developers. Get unstuck quickly and collaborate on projects."
    },
    {
      title: "Certificate of Completion",
      desc: "Add a verified, shareable digital credential to your LinkedIn to showcase your specialization."
    },
    {
      title: "Starter Boilerplates",
      desc: "Access premium starters, DB schemas, and production templates worth thousands of rupees."
    }
  ];

  const faqs = [
    {
      q: "Will I get full access to the course codebase?",
      a: "Yes, you receive link access to the production GitHub repository containing section-by-section code commits for every project built in the course."
    },
    {
      q: "How does the payment and verification system work?",
      a: "Payments are processed securely via Razorpay. You can pay via UPI, Credit/Debit cards, Net Banking, or Wallets. Once verified, you'll be redirected instantly to our onboarding success page."
    },
    {
      q: "Can I upgrade or request a refund?",
      a: "We offer a 7-day refund guarantee if you haven't completed more than 15% of the course curriculum. Just email support with your receipt."
    },
    {
      q: "Do these courses cover authentication and databases?",
      a: "Yes, our advanced bootcamps cover full integration with databases (like PostgreSQL, Neon, Supabase) and security systems (like Auth.js, middleware, token validation)."
    }
  ];

  return (
    <div className="min-h-screen pb-40 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 text-center flex flex-col justify-center items-center px-4">
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/10 dark:bg-purple-600/5 rounded-full blur-[120px] -z-10 animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] font-black tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-6"
        >
          OM KEDARE ACADEMY
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic uppercase pr-4"
        >
          Master the Web & AI
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-medium mb-10 leading-relaxed px-4"
        >
          Acquire real production engineering skills. Master next-gen tools, SaaS deployment, and AI automation through comprehensive project-based curriculums.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#courses-list"
            className="px-8 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black text-sm hover:opacity-85 transition-all duration-300 shadow-xl inline-flex items-center gap-2 group hover:scale-105 active:scale-95"
          >
            BROWSE COURSES
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section id="courses-list" className="max-w-7xl mx-auto px-4 mt-20 scroll-mt-24">
        {/* Filters and Controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12 p-6 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] backdrop-blur-xl">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl text-sm font-medium text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Category selection */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-black tracking-wider uppercase border transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-md scale-105"
                      : "bg-black/5 dark:bg-white/5 text-gray-400 dark:text-gray-500 border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:text-black dark:hover:text-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="relative flex items-center gap-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-4 py-2 rounded-xl text-xs font-black tracking-wider uppercase text-gray-400">
              <SlidersHorizontal size={14} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-black dark:text-white font-bold cursor-pointer focus:outline-none pr-2 uppercase"
              >
                <option value="featured" className="bg-white dark:bg-[#0b0f19]">Featured</option>
                <option value="price-low" className="bg-white dark:bg-[#0b0f19]">Price: Low to High</option>
                <option value="price-high" className="bg-white dark:bg-[#0b0f19]">Price: High to Low</option>
                <option value="rating" className="bg-white dark:bg-[#0b0f19]">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {sortedCourses.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-black/10 dark:border-white/10">
            <BookOpen size={48} className="mx-auto text-gray-500 mb-4 animate-bounce" />
            <h3 className="text-2xl font-black text-black dark:text-white mb-2">No Courses Found</h3>
            <p className="text-gray-500 font-medium">Try resetting your filters or adjusting your search query.</p>
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {sortedCourses.map((course, idx) => {
                const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
                const isStarred = wishlist.includes(course.id);
                
                return (
                  <motion.div
                    layout
                    key={course.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group relative flex flex-col justify-between rounded-3xl border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    {/* Glowing background on hover */}
                    <div className="absolute -top-10 -right-10 w-36 h-36 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/15 transition-all duration-500" />

                    <div>
                      {/* Image Thumbnail with badges */}
                      <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                          {course.bestSeller && (
                            <span className="px-2.5 py-1 text-[8px] font-black uppercase tracking-widest bg-yellow-500 text-black rounded-lg shadow-md">
                              Best Seller
                            </span>
                          )}
                          {course.popular && (
                            <span className="px-2.5 py-1 text-[8px] font-black uppercase tracking-widest bg-blue-500 text-white rounded-lg shadow-md">
                              Popular
                            </span>
                          )}
                          {discount > 0 && (
                            <span className="px-2.5 py-1 text-[8px] font-black uppercase tracking-widest bg-green-500 text-white rounded-lg shadow-md">
                              {discount}% OFF
                            </span>
                          )}
                        </div>

                        {/* Wishlist Button */}
                        <button
                          onClick={(e) => toggleWishlist(course.id, e)}
                          className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-xl transition-all active:scale-90"
                          aria-label="Add to Wishlist"
                        >
                          <Heart
                            size={16}
                            className={`transition-colors ${isStarred ? "fill-red-500 text-red-500" : "text-white"}`}
                          />
                        </button>

                        {/* Course Category Badge bottom-left */}
                        <span className="absolute bottom-4 left-4 px-2 py-1 text-[8px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-purple-400 rounded-md border border-white/5">
                          {course.category}
                        </span>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-6">
                        {/* Rating, Level */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-bold text-black dark:text-white">
                              {course.rating.toFixed(1)}
                            </span>
                          </div>
                          <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 dark:text-gray-400">
                            {course.level}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-black text-black dark:text-white mb-2 leading-snug group-hover:text-purple-500 transition-colors">
                          {course.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-gray-600 dark:text-gray-400 text-xs font-medium line-clamp-2 leading-relaxed mb-6">
                          {course.subtitle}
                        </p>

                        {/* Specs (Duration, Lessons) */}
                        <div className="grid grid-cols-2 gap-4 py-3 border-y border-black/5 dark:border-white/5 text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-purple-500" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <BookOpen size={14} className="text-blue-500" />
                            <span>{course.curriculum.reduce((acc, curr) => acc + curr.lessons.length, 0)} Lessons</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer / CTA & Pricing */}
                    <div className="p-6 pt-0 mt-auto">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-2xl font-black text-black dark:text-white">
                          ₹{course.price}
                        </span>
                        {course.originalPrice > course.price && (
                          <span className="text-xs font-medium text-gray-500 line-through">
                            ₹{course.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="flex-1 text-center py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-black uppercase tracking-widest hover:opacity-85 transition-all shadow-md active:scale-95"
                        >
                          View Details
                        </Link>
                        <button
                          onClick={(e) => shareCourse(course.slug, course.id, e)}
                          className="p-3 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 dark:text-gray-300 transition-colors flex items-center justify-center relative active:scale-95"
                          aria-label="Share Course"
                        >
                          <Share2 size={16} />
                          {copiedId === course.id && (
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-lg z-20 whitespace-nowrap">
                              Copied!
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Why Learn From Me Section */}
      <section className="max-w-5xl mx-auto px-6 mt-40">
        <div className="p-10 sm:p-16 rounded-[48px] border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
          
          <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center text-black dark:text-white uppercase italic">
            Why Learn From Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyMeReasons.map((reason, idx) => (
              <div key={idx} className="flex flex-col gap-4 text-center items-center">
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-black text-black dark:text-white">{reason.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Benefits Section */}
      <section className="max-w-5xl mx-auto px-6 mt-40">
        <h2 className="text-3xl sm:text-4xl font-black mb-16 text-center text-black dark:text-white uppercase italic">
          Additional Student Benefits
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {studentBenefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="text-purple-500 flex-shrink-0" size={20} />
                <h3 className="text-lg font-black text-black dark:text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-500 text-sm font-medium leading-relaxed pl-8">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 mt-40">
        <h2 className="text-3xl sm:text-4xl font-black mb-16 text-center text-black dark:text-white uppercase italic">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-black text-black dark:text-white transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-black/5 dark:border-white/5 text-gray-500 text-sm font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-5xl mx-auto px-6 mt-40">
        <div className="p-16 rounded-[60px] border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
          
          <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter text-black dark:text-white italic uppercase">
            Start Your Journey Today
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl mb-12 max-w-xl mx-auto font-medium">
            Gain the ultimate edge in full-stack engineering and speed up your workflow with AI systems.
          </p>
          <a
            href="#courses-list"
            className="inline-block px-12 py-5 rounded-3xl bg-black dark:bg-white text-white dark:text-black font-black text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
          >
            BECOME AN EXPERT
          </a>
        </div>
      </section>
    </div>
  );
}
