"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "./Container";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export function PortfolioPreview() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink-50/60 py-20 dark:bg-ink-900/30 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.portfolioPreview.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-600 dark:text-ink-400">
              {t.portfolioPreview.subtitle}
            </p>
          </div>
          <Link
            href="/portfolio"
            className="whitespace-nowrap text-sm font-semibold text-blue-light hover:underline"
          >
            {t.portfolioPreview.cta} →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
