import Link from "next/link";

export default function Certificates() {
    
    const certificates = [
        {
            id: 1,
            title: "Meta React | Specialization",
            issuer: "Meta",
            date: "Feb 2026",
            image: "/certificates/Coursera MetaReactSp.jpg",
            credentialUrl: "https://coursera.org/verify/specialization/SJLLDH4DDMUV",
            skills: ["React", "Advanced React"]
        },
        {
            id: 2,
            title: "Introduction to Next.js",
            issuer: "Coursera",  // Fixed typo
            date: "Jan 2026",
            image: "/certificates/Coursera Nextjs.jpg",
            credentialUrl: "https://coursera.org/verify/WPUFHMNHCG7K",
            skills: ["Next.js", "React", "MongoDB"]
        },
        {
            id: 3,
            title: "Introduction to Image Processing",
            issuer: "Matlab",
            date: "Jan 2026",
            image: "/certificates/Coursera ImgProc.jpg",
            credentialUrl: "https://coursera.org/verify/BZ2DCILG6V5L",
            skills: ["Image Processing", "Matlab", "Computer Vision"]
        },
        {
            id: 4,
            title: "Advanced React",
            issuer: "Meta",
            date: "Feb 2026",
            image: "/certificates/Coursera reactAdvanced.jpg",
            credentialUrl: "https://coursera.org/verify/2MQ785CQO1W2",
            skills: ["React", "Advanced React"]
        },
        {
            id: 5,
            title: "Developing Back-End Apps with Node.js and Express",
            issuer: "IBM",
            date: "Feb 2026",
            image: "/certificates/Coursera Exps&NodeJs.jpg",
            credentialUrl: "https://coursera.org/verify/166S9PS1BLBL",
            skills: ["Node.js", "Express", "Back-End Development"]
        },
        {
            id: 6,
            title: "Introduction to MongoDB",
            issuer: "MongoDB Inc.",
            date: "Jan 2026",
            image: "/certificates/Coursera MongoDB.jpg",
            credentialUrl: "https://coursera.org/verify/DNT675HR7JUZ",
            skills: ["MongoDB", "NoSQL", "Database Management"]
        },
        {
            id: 7,
            title: "React Basics",
            issuer: "Meta",
            date: "Feb 2026",
            image: "/certificates/Coursera ReactBasics.jpg",
            credentialUrl: "https://coursera.org/verify/P6HZI07FJKZH",
            skills: ["React", "JavaScript", "Front-End Development"]
        },
        {
            id: 8,
            title: "SQL Querying: Fundamentals",
            issuer: "Logical Operations",
            date: "Jan 2026",
            image: "/certificates/Coursera SQL.jpg",
            credentialUrl: "https://coursera.org/verify/YR7BOKY3ZY9O",
            skills: ["SQL", "Database Querying", "Data Management"]
        },
        {
            id: 9,
            title: "Data Structures and Algorithms",  // Fixed typo "Stuctures"
            issuer: "Amazon",
            date: "Jan 2026",
            image: "/certificates/Coursera DSAamz.jpg",
            credentialUrl: "https://coursera.org/verify/GRRBDCLFXS5C",
            skills: ["Data Structures", "Algorithms", "Problem Solving"]
        },
        {
            id: 10,
            title: "Introduction to Front-End Development",
            issuer: "Meta",
            date: "Feb 2026",
            image: "/certificates/Coursera IFrEnd.jpg",
            credentialUrl: "https://coursera.org/verify/0ISJZ04DP5J3",
            skills: ["HTML", "CSS", "JavaScript", "Front-End Development"]
        },
        {
            id: 11,
            title: "Technology Commercialization, Part 1: Setting up your Idea Filtering System",
            issuer: "University of Rochester",
            date: "Feb 2026",
            image: "/certificates/Coursera TechComer.jpg",
            credentialUrl: "https://coursera.org/verify/L2XFNI44Y6ON",
            skills: ["Technology Commercialization", "Idea Filtering", "Entrepreneurship"]
        }
    ];

    return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates & Achievements
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my professional certifications and course completions that showcase my continuous learning journey.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400">{certificates.length} Certificates Earned</span>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                {/* Actual Certificate Image */}
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400 font-semibold">{cert.issuer}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Credential Button */}
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    View Credential
                    <svg 
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-4xl font-bold text-blue-400 mb-2">{certificates.length}</div>
            <div className="text-gray-400">Total Certificates</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-4xl font-bold text-purple-400 mb-2">
              {[...new Set(certificates.flatMap(c => c.skills))].length}
            </div>
            <div className="text-gray-400">Skills Covered</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-4xl font-bold text-green-400 mb-2">
              {[...new Set(certificates.map(c => c.issuer))].length}
            </div>
            <div className="text-gray-400">Platforms</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-4xl font-bold text-pink-400 mb-2">2026</div>
            <div className="text-gray-400">Latest Year</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-3">Want to see more?</h3>
            <p className="text-gray-400 mb-6">
              I'm constantly learning and adding new certifications. Check back regularly for updates!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
