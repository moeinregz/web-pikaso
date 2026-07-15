import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { usersDb } from "@/lib/db";
import { signSession, SESSION_COOKIE } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const fullName = body?.fullName?.trim();
  const email = body?.email?.trim()?.toLowerCase();
  const phone = body?.phone?.trim();
  const password = body?.password;

  if (!fullName || !email || !password || password.length < 6) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const users = await usersDb.all();
  if (users.some((u) => u.email === email)) {
    return NextResponse.json({ error: "user_exists" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    id: randomUUID(),
    fullName,
    email,
    phone,
    passwordHash,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  await usersDb.save(users);

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
