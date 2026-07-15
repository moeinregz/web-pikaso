"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { AuthShell } from "@/components/AuthShell";

export default function RegisterPage() {
  const { t } = useLanguage();
  const { refresh } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError(t.auth.errorMismatch);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.status === 409) {
        setError(t.auth.errorExists);
        setLoading(false);
        return;
      }
      if (!res.ok) {
        setError(t.auth.errorGeneric);
        setLoading(false);
        return;
      }
      await refresh();
      router.push("/dashboard");
    } catch {
      setError(t.auth.errorGeneric);
      setLoading(false);
    }
  };

  return (
    <AuthShell title={t.auth.registerTitle} subtitle={t.auth.registerSubtitle}>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
            {t.auth.fullName}
          </label>
          <input
            required
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-light dark:border-ink-700"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
            {t.auth.email}
          </label>
          <input
            type="email"
            dir="ltr"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-light dark:border-ink-700"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
            {t.auth.phone}
          </label>
          <input
            dir="ltr"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-light dark:border-ink-700"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
            {t.auth.password}
          </label>
          <input
            type="password"
            dir="ltr"
            required
            minLength={6}
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-light dark:border-ink-700"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
            {t.auth.confirmPassword}
          </label>
          <input
            type="password"
            dir="ltr"
            required
            minLength={6}
            value={form.confirmPassword}
            onChange={(e) => setForm((f) => ({ ...f, confirmPassword: e.target.value }))}
            className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-light dark:border-ink-700"
          />
        </div>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-ink-950"
        >
          {loading ? t.auth.loading : t.auth.registerBtn}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-ink-500 dark:text-ink-400">
        {t.auth.haveAccount}{" "}
        <Link href="/login" className="font-semibold text-blue-light hover:underline">
          {t.auth.goLogin}
        </Link>
      </p>
    </AuthShell>
  );
}
