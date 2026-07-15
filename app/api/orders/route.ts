import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { ordersDb } from "@/lib/db";
import { verifySession, SESSION_COOKIE } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? verifySession(token) : null;
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const orders = await ordersDb.all();
  const mine = orders
    .filter((o) => o.userId === session.id)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  return NextResponse.json({ orders: mine });
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? verifySession(token) : null;
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const items = body?.items;
  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "empty_cart" }, { status: 400 });
  }

  const total = items.reduce((sum: number, i: { price: number }) => sum + (i.price || 0), 0);

  const orders = await ordersDb.all();
  const order = {
    id: randomUUID(),
    userId: session.id,
    userEmail: session.email,
    items,
    total,
    status: "pending" as const,
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
  await ordersDb.save(orders);

  return NextResponse.json({ order });
}
