"use client";

import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="relative overflow-hidden border-b border-ink-100 dark:border-ink-800">
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative z-10 animate-fade-up">
          <span className="inline-block rounded-full border border-ink-200 px-3.5 py-1.5 text-xs font-semibold text-ink-600 dark:border-ink-700 dark:text-ink-300">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-lg text-balance text-base leading-8 text-ink-600 dark:text-ink-400 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-md bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-ink-950"
            >
              {t.hero.ctaPrimary}
              <Arrow size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-md border border-ink-300 px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-blue-light hover:text-blue-light dark:border-ink-700 dark:text-ink-200"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ink-100 pt-8 dark:border-ink-800">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-extrabold text-ink-950 dark:text-white sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-5 text-ink-500 dark:text-ink-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Cubist composition — the studio's signature visual */}
        <div className="relative z-10 mx-auto aspect-square w-full max-w-md animate-shard [animation-delay:150ms]">
          <div className="absolute inset-0">
            <div
              className="absolute left-[6%] top-[4%] h-[55%] w-[62%] bg-blue-period"
              style={{ clipPath: "polygon(10% 0%, 100% 8%, 88% 100%, 0% 82%)" }}
            />
            <div
              className="absolute bottom-[6%] left-[2%] h-[46%] w-[52%] bg-blue-light"
              style={{ clipPath: "polygon(0% 20%, 80% 0%, 100% 90%, 15% 100%)" }}
            />
            <div
              className="absolute right-[4%] top-[10%] h-[70%] w-[48%] border-2 border-ink-950 dark:border-white"
              style={{ clipPath: "polygon(15% 0%, 100% 12%, 85% 100%, 0% 88%)" }}
            />
            <div
              className="absolute bottom-[2%] right-[8%] h-[34%] w-[38%] bg-clay"
              style={{ clipPath: "polygon(0% 12%, 88% 0%, 100% 100%, 8% 92%)" }}
            />
            <div className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-ink-950" />
          </div>
        </div>
      </div>
    </section>
  );
}
