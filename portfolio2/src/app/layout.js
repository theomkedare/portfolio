import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL("http://omkedare.dev/thanks"), // later change to your real domain

  title: "Om Kedare | Web Developer & CSE Student",
  description:
    "Om Kedare is a BTech CSE student and web developer building modern web apps using Next.js, Tailwind CSS and AI tools.",

  keywords: [
    "Om Kedare",
    "Web Developer",
    "Next.js Portfolio",
    "BTech CSE Student",
    "AI Developer",
  ],

  authors: [{ name: "Om Kedare" }],

  openGraph: {
    title: "Om Kedare | Portfolio",
    description:
      "Modern developer portfolio of Om Kedare built using Next.js and Tailwind CSS.",
    url: "https://omkedare.dev",
    siteName: "Om Kedare Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Om Kedare Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Om Kedare | Portfolio",
    description:
      "Modern developer portfolio of Om Kedare built using Next.js and Tailwind CSS.",
    images: ["/og.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white overflow-x-hidden">

        {/* Global glow background */}
        <div className="fixed -top-32 -left-32 w-[500px] h-[500px] bg-purple-500/40 rounded-full blur-[160px] -z-10" />
        <div className="fixed top-40 -right-32 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[160px] -z-10" />
        <div className="fixed bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[160px] -z-10" />

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 sm:px-10 py-4 backdrop-blur border-b border-white/10 sticky top-0 z-50">
          <h1 className="text-xl font-bold">omkedare.dev</h1>
          <div className="space-x-6 text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <Link href="/skills" className="hover:text-white">Skills</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <a
  href="/resume.pdf"
  download
  className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition"
>
  Resume
</a>

          </div>
        </nav>

        
        {/* Common page wrapper */}
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-10 py-16">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
