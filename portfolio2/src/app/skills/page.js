"use client";

import { motion } from "framer-motion";

export default function SkillsPage() {
  const skills = ["Next.js","Tailwind","Python","C","HTML","CSS","JavaScript","React","Java","SQL","R"];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-40 text-center"
    >
      <h2 className="text-4xl mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02]"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
