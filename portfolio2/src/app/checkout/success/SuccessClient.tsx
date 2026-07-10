"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  Home, 
  BookOpen, 
  CreditCard, 
  Calendar, 
  Hash,
  ShoppingBag
} from "lucide-react";
import { courses, Course } from "../../../data/courses";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const [course, setCourse] = useState<Course | null>(null);
  
  const courseId = searchParams.get("courseId");
  const paymentId = searchParams.get("paymentId") || "pay_test_placeholder";
  const orderId = searchParams.get("orderId") || "order_test_placeholder";

  useEffect(() => {
    if (courseId) {
      const found = courses.find((c) => c.id === courseId);
      if (found) {
        setCourse(found);
      }
    }
  }, [courseId]);

  // Framer Motion circle variant for SVG drawing animation
  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" as any }
    }
  };

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" as any, delay: 0.6 }
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-green-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/70 dark:bg-slate-950/70 border border-black/10 dark:border-white/10 p-8 sm:p-12 rounded-[40px] shadow-2xl backdrop-blur-2xl text-center space-y-8"
      >
        {/* Animated Green Checkmark Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center relative">
            <svg 
              className="w-12 h-12 text-green-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <motion.circle 
                cx="12" 
                cy="12" 
                r="10" 
                variants={circleVariants} 
                initial="hidden" 
                animate="visible"
              />
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5 13l4 4L19 7" 
                variants={checkVariants} 
                initial="hidden" 
                animate="visible"
              />
            </svg>
          </div>
        </div>

        {/* Success Header */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-black dark:text-white uppercase tracking-tight">
            Payment Successful!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium max-w-md mx-auto">
            Thank you for enrolling in Om Kedare Academy. Your transaction has been completed and verified successfully.
          </p>
        </div>

        {/* Purchased Course Details Card */}
        {course && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] text-left"
          >
            <div className="aspect-video w-full sm:w-40 rounded-xl overflow-hidden bg-gray-900 border border-black/5 dark:border-white/10 flex-shrink-0">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-2">
              <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {course.category}
              </span>
              <h3 className="text-lg font-black text-black dark:text-white leading-snug">
                {course.title}
              </h3>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Access Status: <span className="text-green-500">Activated</span>
              </p>
            </div>
          </motion.div>
        )}

        {/* Transaction Summary Table */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="border-t border-black/5 dark:border-white/5 pt-8 space-y-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-left"
        >
          <h4 className="text-xs font-black text-black dark:text-white mb-2 tracking-widest text-center sm:text-left">
            Transaction Details
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/[0.01] dark:bg-white/[0.01] p-6 rounded-3xl border border-black/5 dark:border-white/5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Hash size={14} className="text-purple-500" />
                <span>Order ID:</span>
                <span className="text-black dark:text-white ml-auto font-mono text-[10px] break-all">{orderId}</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={14} className="text-blue-500" />
                <span>Payment ID:</span>
                <span className="text-black dark:text-white ml-auto font-mono text-[10px] break-all">{paymentId}</span>
              </div>
            </div>
            <div className="space-y-3 sm:border-l sm:border-black/5 sm:dark:border-white/5 sm:pl-4">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-pink-500" />
                <span>Date:</span>
                <span className="text-black dark:text-white ml-auto font-medium">{new Date().toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingBag size={14} className="text-yellow-500" />
                <span>Amount Paid:</span>
                <span className="text-black dark:text-white ml-auto font-black text-sm">₹{course ? course.price : "1,999"}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buttons / Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          {course ? (
            <Link
              href={`/courses/${course.slug}`}
              className="flex-1 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl text-xs font-black uppercase tracking-widest hover:opacity-85 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              Access Classroom
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link
              href="/courses"
              className="flex-1 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl text-xs font-black uppercase tracking-widest hover:opacity-85 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              Browse Academy
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          <Link
            href="/"
            className="py-4 px-6 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Home size={14} />
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
