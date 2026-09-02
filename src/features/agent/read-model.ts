// Agentic Read Model — cms-export.json is de contract-bron.
// De agent leest ALLEEN hieruit. Nooit live site scrapen voor antwoorden.

import cmsData from "@/content/cms-export.json";

const cms = cmsData as any;

function itemsFor(collectionId: string): any[] {
  return cms.collections?.[collectionId]?.items?.items?.map((i: any) => i.fieldData || i) || [];
}

export const knowledgeModel = {
  faqs: itemsFor("69798387493c019bcbc16fde").map((f: any) => ({
    question: f.name,
    answer: f.answer,
    slug: f.slug,
  })),

  videos: itemsFor("69798387493c019bcbc17000"),
  phLevels: itemsFor("69798387493c019bcbc1702f"),
  testimonials: itemsFor("69ca2b738b300f0a4c3b2558"),
  author: itemsFor("69b2f398ade891d9dc0fb2ea")[0],

  searchContent(query: string) {
    const q = query.toLowerCase();
    const results: { type: string; title: string; snippet: string; slug: string }[] = [];
    for (const f of this.faqs) {
      if (f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
        results.push({ type: "faq", title: f.question, snippet: f.answer.slice(0, 150), slug: `/faq#${f.slug}` });
    }
    for (const v of this.videos) {
      if (v.name?.toLowerCase().includes(q) || v.description?.toLowerCase().includes(q))
        results.push({ type: "video", title: v.name, snippet: v.description?.slice(0, 150) || "", slug: `/video/${v.slug}` });
    }
    for (const p of this.phLevels) {
      if (p.name?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q))
        results.push({ type: "ph", title: p.name, snippet: p.description?.slice(0, 150) || "", slug: `/${p.slug}` });
    }
    return results.slice(0, 10);
  },

  recommendRoute(intent: string): string | null {
    const i = intent.toLowerCase();
    if (i.includes("sport") || i.includes("performance") || i.includes("athlete")) return "/performance";
    if (i.includes("family") || i.includes("kind") || i.includes("gezin")) return "/family";
    if (i.includes("order") || i.includes("buy") || i.includes("kopen")) return "/order";
    if (i.includes("quiz") || i.includes("test") || i.includes("assessment")) return "/quiz";
    if (i.includes("contact") || i.includes("call") || i.includes("consult")) return "/contact";
    return null;
  },
};