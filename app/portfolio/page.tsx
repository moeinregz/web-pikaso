"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mb-12 max-w-xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.portfolioPage.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-ink-600 dark:text-ink-400">
            {t.portfolioPage.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
