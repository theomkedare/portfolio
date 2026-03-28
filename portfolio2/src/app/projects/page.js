"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "CSNotes",
    desc: "A all in one place for CS Notes. Only for DYPIU Students.",
    github: "https://github.com/theomkedare/csnotes",
    demo: "https://csnotes.omkedare.dev/",
    tech: ["Next.js", "Tailwind", "Motion"]
  },
  {
    title: "Cafe demo Website",
    desc: "A beautifully designed, responsive demo website for a modern cafe, featuring menu sections and contact forms.",
    github: "https://github.com/theomkedare/dreamy-sip-cafe",
    demo: "https://dreamysip.netlify.app/",
    tech: ["React", "Tailwind", "JS"]
  },
  {
    title: "Smart Image Resizer",
    desc: "A Full Stack WebApp that allows users to resize and convert images into various formats efficiently.",
    github: "https://github.com/theomkedare/smart-image-toolkit",
    demo: "https://imagetools.omkedare.dev",
    tech: ["Next.js", "Node.js", "Sharp"]
  },
  {
    title: "Reels Downloader",
    desc: "A utility tool to download Instagram reels and videos with a clean, ad-free interface.",
    github: "https://github.com/theomkedare/reels-downloader",
    demo: "https://reels.omkedare.dev/",
    tech: ["React", "Express", "API"]
  },
  {
    title: "Gym demo Website",
    desc: "A powerful, motivation-driven gym website template with class schedules and membership plans.",
    github: "https://github.com/theomkedare/gymDemo",
    demo: "https://gymdemo.omkedare.dev/",
    tech: ["React", "Tailwind"]
  },
  {
    title: "React Portfolio V1",
    desc: "My previous personal portfolio built with React.js focusing on simplicity and performance.",
    github: "https://github.com/theomkedare/react-portfolio",
    demo: "https://theomkedare.github.io/react-portfolio/",
    tech: ["React.js", "Framer Motion"]
  },
  {
    title: "Portfolio Beast V2",
    desc: "Current state-of-the-art developer portfolio with glassmorphism, animations, and high performance.",
    github: "https://github.com/theomkedare/portfolio",
    demo: "https://omkedare.dev",
    tech: ["Next.js 15", "Tailwind", "Motion"]
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">
          PROJECTS
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto font-medium">
          A selection of my recent works where code meets creativity. 
          Each project is built with performance and user experience in mind.
        </p>
        
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 text-sm text-gray-500 dark:text-gray-300">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {projects.length} Total Projects
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 pb-40">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-500 hover:border-purple-500/40 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
          >
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all duration-500" />
            
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 transition-colors">
                    {t}
                  </span>
                ))}
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
                className="flex-1 text-center py-3 rounded-xl bg-black/5 dark:bg-white/5 text-sm font-black text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all border border-black/5 dark:border-white/5"
              >
                Code
              </a>
              <a 
                href={p.demo} 
                target="_blank" 
                className="flex-1 text-center py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-black hover:opacity-80 transition-all shadow-lg active:scale-95"
              >
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}