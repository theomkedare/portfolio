import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import icon from "./favicon.png";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./components/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://omkedare.dev"),
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
  icons: {
    icon: icon.src,
    shortcut: icon.src,
    apple: icon.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} selection:bg-purple-500/30 relative min-h-screen transition-colors duration-300`}>
        <ThemeProvider>
          <Background />
          <Navbar />

          <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 pt-32 pb-8">
            {children}
            <Footer />
          </main>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}