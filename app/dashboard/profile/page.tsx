"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { t } = useLanguage();
  const { user } = useAuth();

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold">{t.dashboard.profileTitle}</h1>

      <div className="mt-7 max-w-md space-y-4 rounded-xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
        <div>
          <span className="block text-xs text-ink-500 dark:text-ink-400">{t.auth.fullName}</span>
          <span className="block text-sm font-semibold">{user?.fullName}</span>
        </div>
        <div>
          <span className="block text-xs text-ink-500 dark:text-ink-400">{t.auth.email}</span>
          <span className="block text-sm font-semibold" dir="ltr">{user?.email}</span>
        </div>
      </div>
    </div>
  );
}
