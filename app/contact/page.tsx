"use client";

import { useState, FormEvent } from "react";
import { Instagram, Send, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/Container";
import { CONTACT_INFO } from "@/lib/data/contact-info";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const channels = [
    { icon: Phone, label: t.contactPage.phone, value: CONTACT_INFO.phoneDisplay, href: `tel:${CONTACT_INFO.phone}` },
    { icon: Instagram, label: t.contactPage.instagram, value: CONTACT_INFO.instagramHandle, href: CONTACT_INFO.instagramUrl },
    { icon: Send, label: t.contactPage.telegram, value: CONTACT_INFO.telegramHandle, href: CONTACT_INFO.telegramUrl },
    { icon: MessageCircle, label: t.contactPage.whatsapp, value: CONTACT_INFO.phoneDisplay, href: CONTACT_INFO.whatsappUrl },
  ];

  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.contactPage.title}
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-ink-600 dark:text-ink-400">
            {t.contactPage.subtitle}
          </p>

          <h2 className="mt-10 text-sm font-bold uppercase tracking-wide text-ink-500 dark:text-ink-400">
            {t.contactPage.channels}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="facet-border shard-card-flip flex items-center gap-3 bg-ink-50 p-4 transition-colors hover:bg-blue-pale dark:bg-ink-900 dark:hover:bg-ink-800"
              >
                <c.icon size={18} className="shrink-0 text-blue-light" />
                <span>
                  <span className="block text-xs text-ink-500 dark:text-ink-400">{c.label}</span>
                  <span className="block text-sm font-semibold" dir="ltr">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-ink-100 bg-white p-7 dark:border-ink-800 dark:bg-ink-900 sm:p-9"
        >
          <h2 className="font-display text-xl font-bold">{t.contactPage.formTitle}</h2>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                {t.contactPage.name}
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-light dark:border-ink-700"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                {t.contactPage.email}
              </label>
              <input
                type="email"
                dir="ltr"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-light dark:border-ink-700"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                {t.contactPage.message}
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none rounded-lg border border-ink-200 bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-light dark:border-ink-700"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-lg bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-ink-950"
          >
            {status === "sending" ? t.contactPage.sending : t.contactPage.send}
          </button>

          {status === "success" && (
            <p className="mt-3 text-sm font-medium text-emerald-600">{t.contactPage.success}</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm font-medium text-red-600">{t.contactPage.error}</p>
          )}
        </form>
      </Container>
    </section>
  );
}
