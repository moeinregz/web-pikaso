"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";

type Order = {
  id: string;
  items: { title: string; price: number }[];
  total: number;
  status: "pending" | "reviewing" | "confirmed";
  createdAt: string;
};

export default function DashboardOverviewPage() {
  const { t, locale } = useLanguage();
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/orders")
      .then((r) => (r.ok ? r.json() : { orders: [] }))
      .then((d) => setOrders(d.orders || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold">
        {t.dashboard.welcome}, {user?.fullName}
      </h1>

      <h2 className="mt-9 mb-4 text-sm font-bold uppercase tracking-wide text-ink-500 dark:text-ink-400">
        {t.dashboard.myOrders}
      </h2>

      {loading ? (
        <p className="text-sm text-ink-500">{t.common.loadingSite}</p>
      ) : orders.length === 0 ? (
        <p className="text-sm text-ink-500 dark:text-ink-400">{t.dashboard.noOrders}</p>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <div
              key={o.id}
              className="rounded-xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-900"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-ink-400">
                  #{o.id.slice(0, 8)}
                </span>
                <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                  {t.dashboard.orderStatus[o.status]}
                </span>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-ink-600 dark:text-ink-400">
                {o.items.map((it, idx) => (
                  <li key={idx}>{it.title}</li>
                ))}
              </ul>
              <div className="mt-3 border-t border-ink-100 pt-3 text-sm font-bold dark:border-ink-800">
                {t.dashboard.total}: {o.total.toLocaleString("en-US")} {t.shopPage.priceToman}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
