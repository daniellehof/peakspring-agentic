// Agentic Tools — smalle serveracties met schema-validatie.
// Alleen actief als NEXT_PUBLIC_AGENTIC_UI=true.

import { knowledgeModel } from "./read-model";

const TOOLS = {
  searchContent: {
    description: "Search FAQ, videos, pH levels and testimonials for relevant information.",
    execute: (query: string) => knowledgeModel.searchContent(query),
  },
  recommendRoute: {
    description: "Recommend the best page for a user's intent.",
    execute: (intent: string) => knowledgeModel.recommendRoute(intent),
  },
  startAssessment: {
    description: "Start the water upgrade quiz.",
    execute: () => ({ redirect: "/quiz" }),
  },
  requestConsultation: {
    description: "Request a free consultation (redirects to contact).",
    execute: () => ({ redirect: "/contact" }),
  },
} as const;

export type ToolName = keyof typeof TOOLS;

// Policy: wat de agent NIET mag
export const policy = {
  noMedicalDiagnosis: "Never give medical advice, diagnose conditions, or recommend treatments.",
  noClaimsOutsideSite: "Only reference claims that exist in the approved site copy.",
  noHiddenActions: "Never submit forms, send analytics, or trigger CRM actions without explicit user consent.",
  noSecretsInBrowser: "Never expose API keys, webhook URLs, or internal config.",
};

// Server-safe tool execution
export async function executeTool(name: ToolName, args: any): Promise<{ result: any } | { error: string }> {
  const tool = TOOLS[name];
  if (!tool) return { error: `Unknown tool: ${name}` };

  try {
    const result = await tool.execute(args);
    return { result };
  } catch (e: any) {
    return { error: e.message || "Tool execution failed" };
  }
}

export const TOOL_LIST = Object.entries(TOOLS).map(([name, t]) => ({ name, description: t.description }));