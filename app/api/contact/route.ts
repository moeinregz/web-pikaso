import { NextRequest, NextResponse } from "next/server";
import { contactsDb } from "@/lib/db";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const items = await contactsDb.all();
  items.push({
    id: randomUUID(),
    name: String(body.name).slice(0, 200),
    email: String(body.email).slice(0, 200),
    message: String(body.message).slice(0, 3000),
    createdAt: new Date().toISOString(),
  });
  await contactsDb.save(items);

  return NextResponse.json({ ok: true });
}
