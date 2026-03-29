"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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

const certificateDescriptions = {
  1: "An extensive specialization covering modern React components, hooks, performance optimization, and advanced patterns for building scalable user interfaces.",
  2: "Gained hands-on experience in building server-rendered and statically generated web applications using Next.js, along with robust API routes.",
  3: "Learned foundational image processing techniques utilizing MATLAB to manipulate, analyze, and enhance digital images for computer vision applications.",
  4: "Deep dive into React architectures inherently handling complex state management, testing strategies, and deeply optimizing rendering components.",
  5: "Developed strong, robust APIs and microservices using Node.js and Express, emphasizing secure backend architecture and database integration.",
  6: "Built foundational knowledge in NoSQL document database concepts, exploring aggregation, advanced data modeling, and performance optimization.",
  7: "Mastered fundamental concepts of React, including component lifecycles, structured props, and standard state hooks for dynamic UI rendering.",
  8: "Explored relational database concepts, mastering complex SQL querying operations including JOINs, functional subqueries, and structured analytics.",
  9: "Polished critical problem-solving skills utilizing key structures like trees, hash maps, and graphs alongside optimized algorithmic patterns.",
  10: "Built accessible and highly responsive user interfaces natively relying on robust HTML5 structures, modern CSS features, and pure JavaScript functionality.",
  11: "Gained insights into taking technological innovations from concept to market, evaluating product-market fits, and navigating sustainable startup strategies.",
  12: "Learned the foundational lifecycle process of structured data, utilizing Google-centric tools to organize and derive meaningful strategic insights.",
  13: "Pushed beyond the basics of web design by mastering scalable grid systems, flexbox modules, keyframe animations, and strict responsive breakpoints.",
  14: "Developed core fluency in advanced JavaScript paradigms, focusing deeply on modern ES6+ syntaxes, functional programming, and secure state handling.",
  15: "Tackled comprehensive data extraction techniques utilizing robust Python libraries to scrub, clean, pattern-match, and visualize data structures."
};

export default function Certificates() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  const filteredCertificates = useMemo(() => {
    return filter === "All" 
      ? certificates 
      : certificates.filter(c => c.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen pb-40 overflow-x-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">
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
              layoutId={`cert-card-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: index * 0.1 }}
              onClick={() => setSelectedId(cert.id)}
              className="group relative bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-black/5 dark:border-white/5">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  priority={index < 6}
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#050505] via-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-4 right-4">
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

      {/* Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedId && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50 transition-opacity"
            />
            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
              <motion.div
                layoutId={`cert-card-${selectedId}`}
                className="bg-white dark:bg-[#0a0a0a] w-full max-w-2xl rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
              >
                {(() => {
                  const cert = certificates.find(c => c.id === selectedId);
                  if (!cert) return null;
                  return (
                    <>
                      <div className="relative aspect-[16/9] w-full bg-gray-100 dark:bg-gray-900 border-b border-black/10 dark:border-white/10">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          priority
                          quality={80}
                          className="object-cover"
                        />
                        <button
                          onClick={() => setSelectedId(null)}
                          className="absolute top-4 right-4 p-2 bg-black/50 text-white hover:bg-black rounded-full backdrop-blur-md transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                      <div className="p-8 overflow-y-auto">
                        <div className="mb-6">
                            <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-widest border border-purple-500/20 mb-4 inline-block">
                              {cert.category}
                            </span>
                            <h2 className="text-3xl font-black text-black dark:text-white mb-2">
                              {cert.title}
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">
                              {cert.issuer} • {cert.date}
                            </p>
                        </div>
                        
                        <div className="mb-8">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                            {certificateDescriptions[cert.id] || "Completed specific professional credential requirements as per industry standards."}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 md:pt-8 border-t border-black/5 dark:border-white/5">
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 text-xs font-black bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 rounded-md border border-black/5 dark:border-white/5"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              className="w-full md:w-auto text-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold flex-shrink-0 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                              Verify Credential
                              <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

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