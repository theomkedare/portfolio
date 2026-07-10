import { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailClient from "./CourseDetailClient";
import { courses } from "../../../data/courses";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    return {
      title: "Course Not Found | Om Kedare Academy",
    };
  }

  return {
    title: `${course.title} | Om Kedare Academy`,
    description: course.subtitle,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | Om Kedare Academy`,
      description: course.subtitle,
      url: `https://omkedare.dev/courses/${course.slug}`,
      siteName: "Om Kedare Academy",
      images: [
        {
          url: course.thumbnail,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | Om Kedare Academy`,
      description: course.subtitle,
      images: [course.thumbnail],
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.subtitle,
    "provider": {
      "@type": "Person",
      "name": "Om Kedare",
      "sameAs": "https://omkedare.dev"
    },
    "image": course.thumbnail,
    "educationalLevel": course.level,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "duration": course.duration,
      "courseWorkload": course.curriculum.length + " curriculum modules"
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "INR",
      "category": "Paid"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetailClient course={course} />
    </>
  );
}
