"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeContext";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? "py-3 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform"
          >
            omkedare.dev
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                    isActive ? "text-blue-500 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full" />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                </Link>
              );
            })}
            
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
            </button>

            <div className="ml-4 pl-4 border-l border-black/10 dark:border-white/10">
              <a
                href="/resume.pdf"
                download
                className="px-5 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-bold hover:opacity-80 transition-all duration-300 shadow-lg active:scale-95"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[110]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] ${menuOpen ? "bg-black dark:bg-white" : "bg-black dark:bg-white"} rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-6 h-[2px] ${menuOpen ? "bg-black dark:bg-white" : "bg-black dark:bg-white"} rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] ${menuOpen ? "bg-black dark:bg-white" : "bg-black dark:bg-white"} rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[10.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[105] md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white/98 dark:bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 overflow-hidden">
          {/* Animated background blobs for mobile menu */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-4xl font-black tracking-tighter transition-all duration-500 transform ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className={`bg-gradient-to-r from-black dark:from-white to-gray-500 bg-clip-text text-transparent hover:text-current ${pathname === item.href ? "from-blue-400 to-purple-600" : ""}`}>
                {item.label}
              </span>
            </Link>
          ))}
          
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
          >
            Change Theme {theme === "dark" ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-blue-600" />}
          </button>

          <a
            href="/resume.pdf"
            download
            className="mt-4 px-10 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black text-xl font-black hover:scale-110 transition-all duration-300 transform"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;