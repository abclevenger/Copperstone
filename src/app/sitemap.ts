import type { MetadataRoute } from "next";

const BASE = "https://copperstone.info";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/office-space-for-rent`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/executive-suites`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/meeting-space`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/contact/land-o-lakes`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/contact/south-tampa-office-space`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/a2p-policies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
