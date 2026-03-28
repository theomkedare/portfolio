"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-inherit selection:bg-none">
      {/* Mesh Gradient Foundation for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(192,38,211,0.08),transparent_50%)] dark:opacity-100 opacity-60" />

      {/* Primary Drifting Blob - Blue */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-300/30 dark:bg-blue-600/15 rounded-full blur-[140px]"
      />

      {/* Secondary Drifting Blob - Purple */}
      <motion.div
        animate={{
          x: [0, -200, 150, 0],
          y: [0, 200, -150, 0],
          scale: [1, 1.4, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-purple-300/30 dark:bg-purple-600/15 rounded-full blur-[160px]"
      />

      {/* Tertiary Drifting Blob - Pink */}
      <motion.div
        animate={{
          x: [0, 100, -150, 0],
          y: [0, 100, 150, 0],
          scale: [1, 1.2, 1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-[120px]"
      />

      {/* Grain/Noise Overlay - slightly stronger for character */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] dark:invert" />

      {/* Modern Grid Overlay with radial mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_30%,transparent_100%)]" />

      {/* Bottom Spotlight for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-blue-500/5 dark:from-purple-500/5 to-transparent pointer-events-none" />
    </div>
  );
}
