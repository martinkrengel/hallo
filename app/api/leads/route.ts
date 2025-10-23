import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  persona: "self-employed" | "sme" | "corporate";
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<LeadPayload>;

  if (!body.name || !body.email || !body.persona) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Placeholder implementation: In einem realen MVP sollten hier CRM-Integrationen folgen.
  console.info("Lead capture", body);

  return NextResponse.json({ success: true });
}
