import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  interest?: string;
  details?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, details } = body;

  if (!firstName || !lastName || !email || !details) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  // Ready for email/CRM integration (Resend, HubSpot, etc.)
  console.info("[contact]", {
    firstName,
    lastName,
    email,
    company: body.company ?? "",
    interest: body.interest ?? "",
    details,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
