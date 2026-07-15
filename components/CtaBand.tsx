"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "./Container";

export function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden bg-ink-950 px-8 py-14 text-center dark:bg-white sm:px-16 shard-card">
          <div
            className="absolute -left-10 -top-16 h-56 w-56 opacity-10"
            style={{ backgroundColor: "#2F6FED", clipPath: "polygon(10% 0%, 100% 8%, 88% 100%, 0% 82%)" }}
          />
          <h2 className="relative font-display text-2xl font-extrabold text-white dark:text-ink-950 sm:text-3xl">
            {t.hero.title}
          </h2>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/shop"
              className="rounded-md bg-blue-light px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white dark:border-ink-950/20 dark:text-ink-950"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
