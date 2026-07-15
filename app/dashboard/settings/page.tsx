"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function SettingsPage() {
  const { t, locale, setLocale } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold">{t.dashboard.settingsTitle}</h1>

      <div className="mt-7 max-w-md space-y-6 rounded-xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
        <div>
          <span className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-300">
            {t.dashboard.themeLabel}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme("light")}
              className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                theme === "light"
                  ? "border-blue-light bg-blue-pale text-blue-period"
                  : "border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300"
              }`}
            >
              {t.dashboard.light}
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                theme === "dark"
                  ? "border-blue-light bg-ink-950 text-white"
                  : "border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300"
              }`}
            >
              {t.dashboard.dark}
            </button>
          </div>
        </div>

        <div>
          <span className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-300">
            {t.dashboard.langLabel}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setLocale("fa")}
              className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                locale === "fa"
                  ? "border-blue-light bg-blue-pale text-blue-period"
                  : "border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300"
              }`}
            >
              فارسی
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                locale === "en"
                  ? "border-blue-light bg-blue-pale text-blue-period"
                  : "border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
