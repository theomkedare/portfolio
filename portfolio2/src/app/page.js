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
    desc: "A demo Website for a Cafe.",
    github: "https://github.com/theomkedare/dreamy-sip-cafe",
    demo: "https://dreamysip.netlify.app/",
  },
  {
    title: "Smart Image Resizer Toolkit",
    desc: "A Full Stack WebApp, where you can Resize your images in various formats.",
    github: "https://github.com/theomkedare/smart-image-toolkit",
    demo: "https://imagetools.omkedare.dev",
  },
  {
    title: "Instagram Reels Downloader",
    desc: "Full Stack Web app to download reels and videos from Instagram.",
    github: "https://github.com/theomkedare/reels-downloader",
    demo: "https://reels.omkedare.dev/",
  },
  {
    title: "Gym demo Website",
    desc: "A demo Website for Gym.",
    github: "https://github.com/theomkedare/gymDemo",
    demo: "https://gymdemo.omkedare.dev/",
  },
  {
    title: "React demoPortfolio Website",
    desc: "My ReactJS final project demoPortfolio built with React.js.",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center min-h-[90vh] flex flex-col justify-center items-center mb-20 relative px-4"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-8"
        >
          Open to new collaborations
        </motion.div>

        <h1 className="text-[4rem] sm:text-8xl md:text-[11rem] font-black mb-8 tracking-tighter leading-[0.85] uppercase">
          I&apos;m <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-2">OM</span>
        </h1>
        
        <p className="text-gray-600 dark:text-white/60 text-base sm:text-2xl max-w-3xl mx-auto mb-16 px-6 leading-snug font-medium">
          Engineering high-performance web experiences with 
          <span className="text-black dark:text-white"> Next.js</span>, <span className="text-black dark:text-white">Full Stack</span> systems, and <span className="text-black dark:text-white">AI-driven</span> automation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-[240px] sm:max-w-none">
          <a
            href="/projects"
            className="px-6 py-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black text-sm hover:opacity-80 transition-all duration-300 transform hover:scale-105 shadow-2xl active:scale-95 text-center"
          >
            BEHOLD PROJECTS
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md font-black text-sm text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 text-center"
          >
            LET&apos;S TALK
          </a>
        </div>
      </motion.section>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-40 px-4">
        {[
          { label: "Credentials", value: "15+" },
          { label: "Completed", value: "10+" },
          { label: "Tech Stack", value: "20+" },
          { label: "Experience", value: "2 Yrs" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 sm:p-8 rounded-[32px] border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] text-center"
          >
            <div className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-1 tracking-tighter italic">{stat.value}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* About */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-40 text-center max-w-4xl mx-auto px-6"
      >
        <div className="p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <h3 className="text-3xl font-black mb-8 text-black dark:text-white">About Me</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            I&apos;m a <span className="text-black dark:text-white font-bold">BTech CSE student</span> deeply passionate about 
            merging creativity with code. I specialize in building <span className="text-black dark:text-white font-bold">modern web applications</span> 
            using Next.js and Tailwind CSS, while constantly exploring the frontier of AI tools and full-stack development.
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="mb-40 px-4">
        <h3 className="text-4xl font-black mb-16 text-center text-black dark:text-white">Featured Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-500 hover:border-purple-500/30 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
              
              <h4 className="text-2xl font-black mb-3 text-black dark:text-white group-hover:text-purple-500 transition-colors">
                {p.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                {p.desc}
              </p>
              
              <div className="flex gap-6 items-center">
                <a
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  Code
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-bold text-black dark:text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Marquee */}
      <section id="skills" className="mb-40 overflow-hidden py-10 relative">
        <h3 className="text-3xl font-black mb-16 text-center text-black dark:text-white uppercase italic tracking-tighter opacity-50">Tech Stack & Skills</h3>
        
        <div className="flex relative items-center">
          {/* Subtle gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10" />

          {/* Marquee Track */}
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {[
                  "Next.js", "React.js", "JavaScript", "Tailwind", "Node.js", 
                  "MongoDB", "Express.js", "Python", "Java", "C", "SQL", 
                  "MERN Stack", "Git", "HTML", "CSS", "AI Tools", 
                  "Full Stack", "Web Dev", "REST APIs", "Modern UI"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-6 py-3 text-sm font-bold rounded-xl border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-md text-gray-700 dark:text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  );
}