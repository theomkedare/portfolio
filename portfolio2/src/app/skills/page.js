"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: ["React.js", "Next.js 15", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "JavaScript (ES6+)"],
    icon: "🎨"
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs", "Authentication"],
    icon: "⚙️"
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "R", "JavaScript"],
    icon: "💻"
  },
  {
    title: "Tools & Development",
    skills: ["Git", "GitHub", "VS Code", "AI Prompting", "Vercel", "Netlify", "Postman"],
    icon: "🛠️"
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pb-40">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">
          TECH STACK
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto font-medium">
          A comprehensive overview of the technologies I use to build 
          scalable, high-performance, and visually stunning applications.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[40px] border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">
                {cat.icon}
              </span>
              <h3 className="text-2xl font-black tracking-tight text-black dark:text-white group-hover:text-purple-500 transition-colors">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-sm font-black text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative background element */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square border border-black/5 dark:border-white/5 rounded-full -z-10 pointer-events-none opacity-20" />
    </div>
  );
}