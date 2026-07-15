import { ReactNode } from "react";
import { Container } from "./Container";

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block">
          <div
            className="absolute left-[8%] top-[6%] h-[58%] w-[64%] bg-blue-period"
            style={{ clipPath: "polygon(12% 0%, 100% 10%, 86% 100%, 0% 80%)" }}
          />
          <div
            className="absolute bottom-[8%] right-[6%] h-[46%] w-[50%] bg-clay"
            style={{ clipPath: "polygon(0% 18%, 82% 0%, 100% 88%, 14% 100%)" }}
          />
          <div
            className="absolute right-[10%] top-[14%] h-[40%] w-[36%] border-2 border-ink-950 dark:border-white"
            style={{ clipPath: "polygon(16% 0%, 100% 14%, 84% 100%, 0% 86%)" }}
          />
        </div>

        <div className="mx-auto w-full max-w-md rounded-2xl border border-ink-100 bg-white p-8 dark:border-ink-800 dark:bg-ink-900">
          <h1 className="font-display text-2xl font-extrabold">{title}</h1>
          <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{subtitle}</p>
          <div className="mt-7">{children}</div>
        </div>
      </Container>
    </section>
  );
}
