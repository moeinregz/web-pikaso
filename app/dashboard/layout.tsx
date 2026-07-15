"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/Container";
import { DashboardSidebar } from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const { t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <Container className="py-24 text-center text-sm text-ink-500">
        {t.common.loadingSite}
      </Container>
    );
  }

  if (!user) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container className="flex flex-col gap-8 sm:flex-row">
        <DashboardSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </Container>
    </section>
  );
}
