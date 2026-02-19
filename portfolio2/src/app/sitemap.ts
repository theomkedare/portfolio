import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://omkedare.dev", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://omkedare.dev/projects", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://omkedare.dev/certificates", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://omkedare.dev/skills", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://omkedare.dev/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}