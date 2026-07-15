"use client";

import { useState } from "react";
import { Check, ChevronDown, Clock3 } from "lucide-react";
import { Plan } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export function PlanCard({ plan, featured = false }: { plan: Plan; featured?: boolean }) {
  const { t, locale } = useLanguage();
  const { addItem, hasItem } = useCart();
  const [open, setOpen] = useState(featured);

  const inCart = hasItem(plan.id);

  const onAdd = () => {
    addItem({
      planId: plan.id,
      category: plan.category,
      title: plan.title[locale],
      price: plan.price,
    });
  };

  return (
    <div
      className={`facet-border shard-card relative flex flex-col bg-white p-6 dark:bg-ink-900 ${
        featured ? "ring-1 ring-blue-light" : ""
      }`}
    >
      <h3 className="font-display text-lg font-bold">{plan.title[locale]}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-400">
        {plan.tagline[locale]}
      </p>

      <div className="mt-5 flex items-baseline gap-1.5 font-mono">
        <span className="text-2xl font-extrabold text-ink-950 dark:text-white">
          {plan.price.toLocaleString("en-US")}
        </span>
        <span className="text-xs text-ink-500 dark:text-ink-400">
          {t.shopPage.priceToman}
          {plan.priceUnit === "toman_month" ? ` / ${t.shopPage.perMonth}` : ""}
        </span>
      </div>

      {plan.deliveryDays && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
          <Clock3 size={13} />
          {plan.deliveryDays} {t.shopPage.deliveryDays}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 text-sm font-semibold text-ink-700 dark:border-ink-800 dark:text-ink-200"
      >
        {t.shopPage.featuresTitle}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="mt-3 space-y-2.5">
          {plan.features[locale].map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm leading-6 text-ink-600 dark:text-ink-400">
              <Check size={15} className="mt-0.5 shrink-0 text-blue-light" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={onAdd}
        disabled={inCart}
        className="mt-6 w-full rounded-lg bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-ink-950"
      >
        {inCart ? t.shopPage.added : t.shopPage.addToCart}
      </button>
    </div>
  );
}
