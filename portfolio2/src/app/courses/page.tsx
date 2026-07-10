import { Metadata } from "next";
import CoursesClient from "./CoursesClient";
import { courses } from "../../data/courses";

export const metadata: Metadata = {
  title: "Premium Development Courses | Om Kedare",
  description: "Accelerate your engineering journey. Master Next.js 15, Full-Stack SaaS architectures, and AI-driven coding methodologies with premium, step-by-step masterclasses.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Premium Web Development & AI Courses | Om Kedare",
    description: "Hands-on, project-based online courses to master next-generation web technologies and speed up your workflow with AI automation.",
    url: "https://omkedare.dev/courses",
    siteName: "Om Kedare Academy",
    images: [
      {
        url: "/og.png", // Reusing your existing OG image
        width: 1200,
        height: 630,
        alt: "Om Kedare Academy Courses",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Development Courses | Om Kedare",
    description: "Learn Next.js 15, Full-Stack SaaS development, and AI coding acceleration with comprehensive, expert-led courses.",
    images: ["/og.png"],
  },
};

export default function CoursesPage() {
  // Course structured data for Google Search snippet integration (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.subtitle,
        "provider": {
          "@type": "Person",
          "name": "Om Kedare",
          "sameAs": "https://omkedare.dev"
        },
        "educationalLevel": course.level,
        "image": course.thumbnail,
        "offers": {
          "@type": "Offer",
          "price": course.price,
          "priceCurrency": "INR",
          "category": "Paid"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursesClient courses={courses} />
    </>
  );
}
