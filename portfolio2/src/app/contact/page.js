"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-40">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 px-4"
      >
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic tracking-tighter">
          GET IN TOUCH
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto font-medium">
          Have a project in mind or just want to say hi? 
          I&apos;m always open to new opportunities and creative collaborations.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-2xl font-black mb-6 text-black dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:omkedare.work@gmail.com" className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-black/[0.01] dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:border-purple-500/50 transition-all">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-black dark:text-white font-black group-hover:text-purple-500 transition-colors">omkedare.work@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/919284794097" target="_blank" className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-black/[0.01] dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:border-green-500/50 transition-all">
                  <FaWhatsapp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-black dark:text-white font-black group-hover:text-green-500 transition-colors">+91 9284794097</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-6 text-black dark:text-white">Social Presence</h3>
            <div className="flex gap-4">
              {[
                { icon: <Github />, href: "https://github.com/theomkedare", color: "hover:bg-black dark:hover:bg-white" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/omkedare/", color: "hover:bg-blue-600" },
                { icon: <Instagram />, href: "https://www.instagram.com/omkedare.dev/", color: "hover:bg-pink-600" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className={`p-4 rounded-2xl border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/5 transition-all duration-300 hover:scale-110 active:scale-90 ${social.color} hover:text-white dark:hover:text-black dark:text-white text-black`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black hover:opacity-80 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-10 rounded-[40px] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10" />
          
          <form
            action="https://formsubmit.co/omkedare65@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://omkedare.dev/thanks" />
            
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-6 py-4 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all font-bold"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-6 py-4 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all font-bold"
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              required
              className="w-full rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-6 py-4 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all font-bold"
            />

            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all active:scale-[0.98]"
            >
              Dispatch Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}