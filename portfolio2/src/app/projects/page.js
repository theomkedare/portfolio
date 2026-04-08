"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "CSNotes",
    desc: "A all in one place for CS Notes. Only for DYPIU Students.",
    longDesc: "A comprehensive notes platform exclusively for DYPIU students, featuring unit-wise PDF access, Google OAuth authentication, and a clean study-focused interface. Built to eliminate scattered resources and bring everything under one roof.",
    github: "https://github.com/theomkedare/csnotes",
    demo: "https://csnotes.omkedare.dev/",
    tech: ["Next.js", "Tailwind", "Motion"],
    category: "Full Stack",
    status: "Live",
  },
  {
    id: 2,
    title: "Cafe demo Website",
    desc: "A beautifully designed, responsive demo website for a modern cafe, featuring menu sections and contact forms.",
    longDesc: "A visually stunning, fully responsive landing page for a modern cafe brand. Features animated menu sections, a warm color palette, smooth scroll interactions, and a contact form — designed to drive customer engagement and foot traffic.",
    github: "https://github.com/theomkedare/dreamy-sip-cafe",
    demo: "https://dreamysip.netlify.app/",
    tech: ["React", "Tailwind", "JS"],
    category: "Frontend",
    status: "Live",
  },
  {
    id: 3,
    title: "Smart Image Resizer",
    desc: "A Full Stack WebApp that allows users to resize and convert images into various formats efficiently.",
    longDesc: "A powerful full-stack image processing toolkit that lets users upload, resize, and convert images to formats like WebP, PNG, and JPEG. Powered by the Sharp library on the backend for blazing-fast processing with no quality loss.",
    github: "https://github.com/theomkedare/smart-image-toolkit",
    demo: "https://imagetools.omkedare.dev",
    tech: ["Next.js", "Node.js", "Sharp"],
    category: "Full Stack",
    status: "Live",
  },
  {
    id: 4,
    title: "Reels Downloader",
    desc: "A utility tool to download Instagram reels and videos with a clean, ad-free interface.",
    longDesc: "A full-stack utility web app that lets users download Instagram Reels and videos by simply pasting a URL. Built with a React frontend and an Express backend that handles the media extraction logic — completely ad-free and fast.",
    github: "https://github.com/theomkedare/reels-downloader",
    demo: "https://reels.omkedare.dev/",
    tech: ["React", "Express", "API"],
    category: "Full Stack",
    status: "Live",
  },
  {
    id: 5,
    title: "Gym demo Website",
    desc: "A powerful, motivation-driven gym website template with class schedules and membership plans.",
    longDesc: "A high-energy, motivation-driven gym landing page template featuring animated sections, class schedule displays, membership plan cards, and a bold typographic design system built to convert visitors into members.",
    github: "https://github.com/theomkedare/gymDemo",
    demo: "https://gymdemo.omkedare.dev/",
    tech: ["React", "Tailwind"],
    category: "Frontend",
    status: "Live",
  },
  {
    id: 6,
    title: "React Portfolio V1",
    desc: "My previous personal portfolio built with React.js focusing on simplicity and performance.",
    longDesc: "My first-generation personal portfolio built entirely with React.js. It features smooth Framer Motion animations, a projects showcase, skills section, and contact form — designed with a minimalist philosophy focused on performance.",
    github: "https://github.com/theomkedare/react-portfolio",
    demo: "https://theomkedare.github.io/react-portfolio/",
    tech: ["React.js", "Framer Motion"],
    category: "Frontend",
    status: "Live",
  },
  {
    id: 7,
    title: "Portfolio Beast V2",
    desc: "Current state-of-the-art developer portfolio with glassmorphism, animations, and high performance.",
    longDesc: "The current version of my personal developer portfolio — a modern, high-performance site built with Next.js 15. Features glassmorphism effects, Framer Motion page transitions, a certificates gallery with modal previews, and a dark-first design system.",
    github: "https://github.com/theomkedare/portfolio",
    demo: "https://omkedare.dev",
    tech: ["Next.js 15", "Tailwind", "Motion"],
    category: "Full Stack",
    status: "Live",
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pb-40 overflow-x-hidden">
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">
          PROJECTS
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto font-medium mb-8">
          A selection of my recent works where code meets creativity.
          Each project is built with performance and user experience in mind.
        </p>

        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 text-sm text-gray-500 dark:text-gray-300">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {projects.length} Total Projects
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border ${
                filter === cat
                  ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-xl scale-110"
                  : "bg-black/5 dark:bg-white/5 text-gray-400 dark:text-gray-500 border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:text-black dark:hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, index) => (
            <motion.div
              layoutId={`project-card-${p.id}`}
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: index * 0.08 }}
              onClick={() => setSelectedId(p.id)}
              className="group relative p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-500 hover:border-purple-500/40 hover:-translate-y-2 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              {/* Decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-green-500/10 text-green-500 border border-green-500/20 flex-shrink-0">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-black dark:text-white group-hover:text-purple-500 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center py-3 rounded-xl bg-black/5 dark:bg-white/5 text-sm font-black text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all border border-black/5 dark:border-white/5"
                >
                  Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-black hover:opacity-80 transition-all shadow-lg active:scale-95"
                >
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Wide View Modal */}
      <AnimatePresence>
        {selectedId && (() => {
          const p = projects.find((proj) => proj.id === selectedId);
          if (!p) return null;
          return (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50"
              />

              {/* Modal */}
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
                <motion.div
                  layoutId={`project-card-${selectedId}`}
                  className="bg-white dark:bg-[#0a0a0a] w-full max-w-2xl rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
                >
                  {/* Modal Header */}
                  <div className="relative p-8 pb-0">
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-6 right-6 p-2 bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/20 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-widest border border-purple-500/20">
                        {p.category}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                        {p.status}
                      </span>
                    </div>

                    <h2 className="text-3xl font-black text-black dark:text-white mb-2 pr-10">
                      {p.title}
                    </h2>
                  </div>

                  {/* Divider */}
                  <div className="mx-8 mt-6 border-t border-black/5 dark:border-white/10" />

                  {/* Modal Body */}
                  <div className="p-8 overflow-y-auto flex flex-col gap-6">
                    {/* Description */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">About This Project</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                        {p.longDesc}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-black bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 rounded-md border border-black/5 dark:border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-black/5 dark:border-white/10">
                      <a
                        href={p.github}
                        target="_blank"
                        className="flex-1 text-center px-6 py-3 rounded-xl bg-black/5 dark:bg-white/5 text-sm font-black text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all border border-black/5 dark:border-white/5 flex items-center justify-center gap-2"
                      >
                        View Code
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </a>
                      <a
                        href={p.demo}
                        target="_blank"
                        className="flex-1 text-center px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-black hover:opacity-80 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                      >
                        Live Demo
                        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}