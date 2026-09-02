import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { executeTool, TOOL_LIST, type ToolName } from "@/features/agent/tools";

const requestSchema = z.object({
  tool: z.string(),
  args: z.any().optional(),
});

export async function POST(request: NextRequest) {
  // Feature flag — off by default
  if (process.env.NEXT_PUBLIC_AGENTIC_UI !== "true") {
    return NextResponse.json({ error: "Agentic features are disabled" }, { status: 503 });
  }

  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request", details: parsed.error.flatten() }, { status: 400 });
    }

    const { tool, args } = parsed.data;
    const result = await executeTool(tool as ToolName, args);

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, result: result.result });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    enabled: process.env.NEXT_PUBLIC_AGENTIC_UI === "true",
    tools: TOOL_LIST,
    policy: "Agent reads from approved content only. No medical advice. No external writes without consent.",
  });
}