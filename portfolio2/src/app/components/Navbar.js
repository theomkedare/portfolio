"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center px-6 sm:px-10 py-4 backdrop-blur border-b border-white/10 sticky top-0 z-50">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          omkedare.dev
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-400">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition"
          >
            Resume
          </a>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] z-[60] p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-[2.5px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-[#0a0a0a]/98 backdrop-blur-xl border-l border-white/10 z-50 transform transition-transform duration-400 ease-in-out flex flex-col justify-center items-center gap-8 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-xl text-gray-300 hover:text-white transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
        <a
          href="/resume.pdf"
          download
          onClick={() => setMenuOpen(false)}
          className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/10 transition text-gray-300 hover:text-white text-lg"
        >
          Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;