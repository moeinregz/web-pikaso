"use client";

import { Project } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <a href={project.href}>
    <div className="group overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-xl hover:shadow-ink-950/5 dark:border-ink-800 dark:bg-ink-900">
      <div
        className="relative flex h-48 items-center justify-center overflow-hidden"
        style={{ backgroundColor: project.accent }}
      >
        <div
          className="absolute -left-6 -top-10 h-32 w-32 opacity-40 shard-sm"
          style={{ backgroundColor: "#ffffff" }}
        />
        <div
          className="absolute -bottom-8 -right-4 h-28 w-28 opacity-25 shard-sm"
          style={{ backgroundColor: "#0A0A0B" }}
        />
        <span className="relative font-display text-3xl font-extrabold text-white/95">
          {project.title[locale]}
        </span>
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-light">
          {project.category[locale]}
        </span>
        <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-400">
          {project.description[locale]}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ink-100 px-2.5 py-1 font-mono text-[11px] text-ink-600 dark:bg-ink-800 dark:text-ink-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </a>
  );
}
