"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center pb-8 mt-20"
    >
      <div className="p-16 rounded-[60px] border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur relative overflow-hidden">
        <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tighter text-black dark:text-white italic">READY TO BUILD?</h2>
        <p className="text-gray-600 dark:text-gray-400 text-xl mb-12 max-w-xl mx-auto">
          Currently accepting new projects and roles. Let&apos;s create something that matters.
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-6 rounded-3xl bg-black dark:bg-white text-white dark:text-black font-black text-xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl"
        >
          PING ME
        </a>
        
        <div className="mt-20 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">© 2026 Om Kedare. All Rights Reserved.</p>
          <div className="flex gap-8">
            {['GitHub', 'LinkedIn', 'Instagram'].map(social => (
              <a key={social} href="#" className="text-gray-500 hover:text-black dark:hover:text-white text-xs font-black uppercase tracking-widest transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
