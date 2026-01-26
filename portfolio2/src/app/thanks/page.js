"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-purple-500/40 rounded-full blur-[140px]" />
      <div className="absolute top-40 -right-20 w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-[140px]" />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur"
      >
        {/* Tick */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="text-6xl mb-6"
        >
          ✅
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Message Sent!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-gray-400 mb-8 max-w-md"
        >
          Thank you for reaching out. I’ll get back to you as soon as possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            View Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
