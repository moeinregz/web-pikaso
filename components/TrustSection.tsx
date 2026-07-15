"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Container } from "./Container";
import { ShieldCheck, Code2, Search, HeartHandshake } from "lucide-react";

const icons = [ShieldCheck, Code2, Search, HeartHandshake];

export function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mb-14 max-w-xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.trust.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-600 dark:text-ink-400">
            {t.trust.subtitle}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="facet-border shard-card group relative bg-ink-50 p-6 transition-colors hover:bg-blue-pale dark:bg-ink-900 dark:hover:bg-ink-800"
              >
                <Icon size={22} className="text-blue-light" strokeWidth={2} />
                <h3 className="mt-4 font-display text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
