"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Meta React | Specialization",
    issuer: "Meta",
    date: "Feb 2026",
    image: "/certificates/Coursera MetaReactSp.jpg",
    category: "Development",
    credentialUrl: "https://coursera.org/verify/specialization/SJLLDH4DDMUV",
    skills: ["React", "Advanced React"],
  },
  {
    id: 2,
    title: "Introduction to Next.js",
    issuer: "Coursera",
    date: "Jan 2026",
    image: "/certificates/Coursera Nextjs.jpg",
    category: "Development",
    credentialUrl: "https://coursera.org/verify/WPUFHMNHCG7K",
    skills: ["Next.js", "React", "MongoDB"],
  },
  {
    id: 3,
    title: "Introduction to Image Processing",
    issuer: "MathWorks",
    date: "Jan 2026",
    image: "/certificates/Coursera ImgProc.jpg",
    category: "AI & ML",
    credentialUrl: "https://coursera.org/verify/BZ2DCILG6V5L",
    skills: ["Image Processing", "Matlab", "Computer Vision"],
  },
  {
    id: 4,
    title: "Advanced React",
    issuer: "Meta",
    date: "Feb 2026",
    image: "/certificates/Coursera reactAdvanced.jpg",
    category: "Development",
    credentialUrl: "https://coursera.org/verify/2MQ785CQO1W2",
    skills: ["React", "Advanced React"],
  },
  {
    id: 5,
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    date: "Feb 2026",
    image: "/certificates/Coursera Exps&NodeJs.jpg",
    category: "Development",
    credentialUrl: "https://coursera.org/verify/166S9PS1BLBL",
    skills: ["Node.js", "Express", "Back-End Development"],
  },
  {
    id: 6,
    title: "Introduction to MongoDB",
    issuer: "MongoDB Inc.",
    date: "Jan 2026",
    image: "/certificates/Coursera MongoDB.jpg",
    category: "Database",
    credentialUrl: "https://coursera.org/verify/DNT675HR7JUZ",
    skills: ["MongoDB", "NoSQL", "Database Management"],
  },
  {
    id: 7,
    title: "React Basics",
    issuer: "Meta",
    date: "Feb 2026",
    image: "/certificates/Coursera ReactBasics.jpg",
    category: "Development",
    credentialUrl: "https://coursera.org/verify/P6HZI07FJKZH",
    skills: ["React", "JavaScript", "Front-End Development"],
  },
  {
    id: 8,
    title: "SQL Querying: Fundamentals",
    issuer: "Logical Operations",
    date: "Jan 2026",
    image: "/certificates/Coursera SQL.jpg",
    category: "Database",
    credentialUrl: "https://coursera.org/verify/YR7BOKY3ZY9O",
    skills: ["SQL", "Database Querying", "Data Management"],
  },
  {
    id: 9,
    title: "Data Structures and Algorithms",
    issuer: "Amazon",
    date: "Jan 2026",
    image: "/certificates/Coursera DSAamz.jpg",
    category: "Fundamentals",
    credentialUrl: "https://coursera.org/verify/GRRBDCLFXS5C",
    skills: ["Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    id: 10,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Feb 2026",
    image: "/certificates/Coursera IFrEnd.jpg",
    category: "Development",
    credentialUrl: "https://coursera.org/verify/0ISJZ04DP5J3",
    skills: ["HTML", "CSS", "JavaScript", "Front-End Development"],
  },
  {
    id: 11,
    title: "Technology Commercialization",
    issuer: "University of Rochester",
    date: "Feb 2026",
    image: "/certificates/Coursera TechComer.jpg",
    category: "Business",
    credentialUrl: "https://coursera.org/verify/L2XFNI44Y6ON",
    skills: ["Entrepreneurship", "Idea Filtering"],
  },
  {
    id: 12,
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    date: "Jan 2026",
    image: "/certificates/Coursera FoundationData.jpg",
    category: "Data Science",
    credentialUrl: "https://coursera.org/verify/92EBIL20T5PJ",
    skills: ["Data Analysis", "Google Tools"],
  },
  {
    id: 13,
    title: "HTML and CSS in Depth",
    issuer: "Meta",
    date: "Feb 2026",
    image: "/certificates/Coursera HtmlCssInD.jpg",
    category: "Development",
    credentialUrl: "https://coursera.org/verify/UMI3MYT0B6UN",
    skills: ["HTML", "CSS", "Web Design"],
  },
  {
    id: 14,
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "Feb 2026",
    image: "/certificates/Coursera ProgJS.jpg",
    category: "Development",
    credentialUrl: "https://coursera.org/verify/QTDOYUXWK323",
    skills: ["JavaScript", "Fundamentals"],
  },
  {
    id: 15,
    title: "Data Mining in Python",
    issuer: "University of Michigan",
    date: "Mar 2026",
    image: "/certificates/Coursera DMIP.jpg",
    category: "AI & ML",
    credentialUrl: "https://coursera.org/verify/S8P5NYA7O6DU",
    skills: ["Python", "Data Mining"],
  }
];

const categories = ["All", ...new Set(certificates.map(c => c.category))];

export default function Certificates() {
  const [filter, setFilter] = useState("All");

  const filteredCertificates = useMemo(() => {
    return filter === "All" 
      ? certificates 
      : certificates.filter(c => c.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen pb-40">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">
          CERTIFICATIONS
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-12 font-medium">
          A continuous commitment to learning and professional growth. 
          Validated by industry leaders around the globe.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border ${
                filter === cat 
                  ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-xl shadow-black/10 dark:shadow-white/10 scale-110" 
                  : "bg-black/5 dark:bg-white/5 text-gray-400 dark:text-gray-500 border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:text-black dark:hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: index * 0.1 }}
              className="group relative bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-black/5 dark:border-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#050505] via-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-400">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black text-black dark:text-white group-hover:text-purple-500 transition-colors mb-1 line-clamp-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-tighter">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-[10px] font-black bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 rounded-md border border-black/5 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      className="ml-auto p-2 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-110 transition-transform active:scale-95 shadow-lg"
                      title="Verify Credential"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Stats Section */}
      <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {[
          { label: "Credentials Earned", value: certificates.length, color: "from-blue-400 to-blue-600" },
          { label: "Dominated Skills", value: [...new Set(certificates.flatMap(c => c.skills))].length, color: "from-purple-400 to-purple-600" },
          { label: "Hours of Learning", value: "850+", color: "from-pink-400 to-pink-600" },
          { label: "Completion Rate", value: "100%", color: "from-green-400 to-green-600" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] text-center group"
          >
            <div className={`text-4xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
              {stat.value}
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}