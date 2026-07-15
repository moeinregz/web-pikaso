"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/Container";
import { PlanCard } from "@/components/PlanCard";
import { getPlansByCategory } from "@/lib/data/plans";
import { PlanCategory } from "@/types";

const categories: PlanCategory[] = ["wordpress", "code", "seo"];

export default function ShopPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState<PlanCategory>("wordpress");

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mb-10 max-w-xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.shopPage.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-ink-600 dark:text-ink-400">
            {t.shopPage.subtitle}
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === c
                  ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950"
                  : "bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-ink-700"
              }`}
            >
              {t.shopPage.categories[c]}
            </button>
          ))}
        </div>
        <p className="mb-10 text-sm text-ink-500 dark:text-ink-400">
          {t.shopPage.categoryDesc[active]}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getPlansByCategory(active).map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} featured={i === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
