"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-40 text-center max-w-xl mx-auto"
    >
      <h2 className="text-4xl mb-8">Contact</h2>

      <p className="mt-2 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition">
        Send me a message using the form below or reach out on social platforms.
      </p>

      {/* Contact Form */}
      <form
        action="https://formsubmit.co/omkedare65@gmail.com"
        method="POST"
        className="flex flex-col gap-4 mb-12"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://omkedare.dev/thanks" />
        <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 backdrop-blur"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 backdrop-blur"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 backdrop-blur"
        />

        <button
          type="submit"
          className="mt-2 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
        >
          Send Message
        </button>
      </form>

    <a
  href="/resume.pdf"
  download
  className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
>
  Download Resume
</a><br />
<br />

      {/* Social Links with Icons */}
<div className="flex justify-center gap-6 flex-wrap">
  <a
    href="https://github.com/theomkedare"
    target="_blank"
    className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
  >
    <Github size={24} />
  </a>

  <a
    href="https://www.linkedin.com/in/omkedare/"
    target="_blank"
    className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
  >
    <Linkedin size={24} />
  </a>

  <a
    href="https://www.instagram.com/opxeditzz/"
    target="_blank"
    className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
  >
    <Instagram size={24} />
  </a>

  <a
    href="https://wa.me/919284794097"
    target="_blank"
    className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
  >
    <FaWhatsapp size={24} className="text-green-400" />
  </a>
</div>

    </motion.section>
  );
}