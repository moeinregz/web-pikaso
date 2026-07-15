import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { usersDb } from "@/lib/db";
import { signSession, SESSION_COOKIE } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = body?.email?.trim()?.toLowerCase();
  const password = body?.password;

  if (!email || !password) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const users = await usersDb.all();
  const user = users.find((u) => u.email === email);
  if (!user) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const token = signSession({ id: user.id, email: user.email, fullName: user.fullName });

  const res = NextResponse.json({
    user: { id: user.id, email: user.email, fullName: user.fullName },
  });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
