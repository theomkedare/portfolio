"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Cafe demo Website",
    desc: "A demo Website for a Cafe.",
    github: "https://github.com/theomkedare/dreamy-sip-cafe",
    demo: "https://dreamysip.netlify.app/",
  },
  {
    title: "YouTube Downloader",
    desc: "Web app to download YouTube shorts & reels.",
    github: "https://github.com/theomkedare/reels-downloader-ui",
    demo: "https://reels-downloader-by-om.netlify.app/",
  },
  {
    title: "Gym demo Website",
    desc: "A demo Website for Gym.",
    github: "https://github.com/theomkedare/gymDemo",
    demo: "https://omgymwebdemo.netlify.app/",
  },
  {
    title: "React demoPortfolio Website",
    desc: "My personal modern portfolio built with Next.js.",
    github: "https://github.com/theomkedare/react-portfolio",
    demo: "https://theomkedare.github.io/react-portfolio/",
  },
  {
    title: "Portfolio Website",
    desc: "My personal modern portfolio built with Next.js.",
    github: "https://github.com/theomkedare/portfolio",
    demo: "https://omkedare.dev",
  },
];

export default function ProjectsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-40"
    >
      <h2 className="text-4xl mb-12 text-center">Projects</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:scale-105 transition"
          >
            <h3 className="text-xl mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
            <div className="flex gap-4 text-sm">
              <a href={p.github} target="_blank" className="text-purple-400 hover:underline">
                GitHub
              </a>
              <a href={p.demo} target="_blank" className="text-blue-400 hover:underline">
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}