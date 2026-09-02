import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://peakspring.nl";

  const pages = [
    "/", "/family", "/performance", "/about-us", "/contact",
    "/privacy", "/terms", "/quiz", "/call", "/order",
  ];

  const videoSlugs = [
    "chemical-free-home-k8-kangen-water-system",
    "complete-source-eco-friendly-home-cleaning",
    "complete-water-solution-peakspring-daily-use",
    "japanese-heritage-water-innovation-blue-zones",
    "liquid-immunity-antioxidant-water-health",
    "medical-grade-water-ionizer-system",
    "optimize-water-cellular-hydration-high-performance",
    "personal-story-ionized-water-transformation",
    "power-of-ph-5-types-ionized-water",
    "private-briefing-peakspring-strategy",
    "removing-pesticides-ionized-water-produce",
    "true-hydration-cellular-effects-alkaline-water",
    "upgrade-hydration-replace-tap-water",
  ];

  return [
    ...pages.map(p => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...videoSlugs.map(s => ({ url: `${base}/video/${s}`, lastModified: new Date() })),
  ];
}