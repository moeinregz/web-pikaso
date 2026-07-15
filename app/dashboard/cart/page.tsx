"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { t } = useLanguage();
  const { items, removeItem, total, clear } = useCart();
  const [placing, setPlacing] = useState(false);
  const [success, setSuccess] = useState(false);

  const checkout = async () => {
    setPlacing(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      if (res.ok) {
        clear();
        setSuccess(true);
      }
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold">{t.dashboard.cartTitle}</h1>

      {success && (
        <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
          {t.dashboard.checkoutSuccess}
        </p>
      )}

      {items.length === 0 ? (
        <div className="mt-8">
          <p className="text-sm text-ink-500 dark:text-ink-400">{t.dashboard.cartEmpty}</p>
          <Link
            href="/shop"
            className="mt-4 inline-block rounded-lg bg-ink-950 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-ink-950"
          >
            {t.dashboard.goShop}
          </Link>
        </div>
      ) : (
        <div className="mt-7 space-y-3">
          {items.map((item) => (
            <div
              key={item.planId}
              className="flex items-center justify-between rounded-xl border border-ink-100 bg-white p-4 dark:border-ink-800 dark:bg-ink-900"
            >
              <div>
                <span className="block text-sm font-semibold">{item.title}</span>
                <span className="block font-mono text-xs text-ink-500 dark:text-ink-400">
                  {item.price.toLocaleString("en-US")} {t.shopPage.priceToman}
                </span>
              </div>
              <button
                onClick={() => removeItem(item.planId)}
                aria-label="remove"
                className="flex h-9 w-9 items-center justify-center rounded-md text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}

          <div className="flex items-center justify-between rounded-xl bg-ink-50 p-4 font-bold dark:bg-ink-800">
            <span>{t.dashboard.total}</span>
            <span className="font-mono">
              {total.toLocaleString("en-US")} {t.shopPage.priceToman}
            </span>
          </div>

          <button
            onClick={checkout}
            disabled={placing}
            className="w-full rounded-lg bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-ink-950"
          >
            {placing ? t.auth.loading : t.dashboard.checkout}
          </button>
        </div>
      )}
    </div>
  );
}
