"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ShoppingBag, Globe, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { items } = useCart();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/shop", label: t.nav.shop },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/80 backdrop-blur-md dark:border-ink-800 dark:bg-ink-950/80">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue-light ${
                pathname === item.href
                  ? "text-blue-light"
                  : "text-ink-600 dark:text-ink-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleLocale}
            aria-label="toggle language"
            className="flex h-9 items-center gap-1 rounded-md px-2 text-xs font-semibold text-ink-600 transition-colors hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800"
          >
            <Globe size={16} />
            {locale === "fa" ? "EN" : "FA"}
          </button>

          <button
            onClick={toggleTheme}
            aria-label="toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-600 transition-colors hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Link
            href="/dashboard/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-md text-ink-600 transition-colors hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800"
            aria-label="cart"
          >
            <ShoppingBag size={17} />
            {items.length > 0 && (
              <span className="absolute -top-1 -end-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-light text-[10px] font-bold text-white">
                {items.length}
              </span>
            )}
          </Link>

          {user ? (
            <Link
              href="/dashboard"
              className="hidden items-center gap-1.5 rounded-md bg-ink-950 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 md:flex"
            >
              <User size={14} />
              {t.nav.dashboard}
            </Link>
          ) : (
            <Link
              href="/login"
              className="hidden items-center rounded-md bg-ink-950 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 md:flex"
            >
              {t.nav.login}
            </Link>
          )}

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-600 dark:text-ink-300 md:hidden"
            aria-label="menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-ink-100 bg-white dark:border-ink-800 dark:bg-ink-950 md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
                >
                  {t.nav.dashboard}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="rounded-md px-3 py-2.5 text-start text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
                >
                  {t.nav.logout}
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-md bg-ink-950 px-3 py-2.5 text-center text-sm font-medium text-white dark:bg-white dark:text-ink-950"
              >
                {t.nav.login}
              </Link>
            )}
          </Container>
        </div>
      )}
    </header>
  );
}
