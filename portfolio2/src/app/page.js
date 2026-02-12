"use client";

import { motion } from "framer-motion";

const projects = [
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center min-h-[70vh] flex flex-col justify-center mb-40"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Hi, I’m <span className="text-purple-400">Om</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 px-4">
          BTech CSE Student | Web Developer | Learning AI & Full Stack
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/projects"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            View Projects
          </a>
          <a
            href="/certificates"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            View Certificates
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-40 text-center max-w-3xl mx-auto"
      >
        <h3 className="text-3xl mb-6">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I’m a BTech CSE student passionate about building modern web applications
          and experimenting with AI tools. I enjoy working with Next.js, Tailwind CSS,
          and JavaScript, and I’m currently learning Full Stack development and AI-based
          automation.
        </p>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="mb-40">
        <h3 className="text-3xl mb-12 text-center">Projects</h3>
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
              <h4 className="text-xl mb-2">{p.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              <div className="flex gap-4 text-sm">
                <a
                  href={p.github}
                  target="_blank"
                  className="text-purple-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-40 text-center">
        <h3 className="text-3xl mb-10">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Next.js",
            "Tailwind",
            "Python",
            "C",
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Java",
            "SQL",
            "R",
            "Git",
            "Express.js",
            "Node.js",
            "MongoDB",
            "MERN stack",
            "AI tools",
            "Full Stack Development",
            "Web Development",
          ].map((skill) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="px-4 py-1.5 text-sm sm:text-base rounded-full border border-white/10"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-3xl mb-4">Contact</h3>
        <p className="text-gray-400">omkedare65@gmail.com</p>
        <p className="text-gray-500 text-sm mt-2">© 2026 Om Kedare</p>
      </motion.section>
    </>
  );
}