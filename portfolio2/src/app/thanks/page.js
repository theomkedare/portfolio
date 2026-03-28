"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThanksPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex justify-center">
          <div className="p-6 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-500">
            <CheckCircle size={80} />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white">
          MESSAGE DISPATCHED ⚡
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-xl max-w-xl mx-auto mb-16 font-medium">
          Your transmission has been received. I&apos;ll get back to you faster than a server-side render.
        </p>

        <Link
          href="/"
          className="inline-block px-10 py-5 rounded-3xl bg-black dark:bg-white text-white dark:text-black font-black text-lg hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl"
        >
          RETURN TO BASE
        </Link>
      </motion.div>
    </div>
  );
}