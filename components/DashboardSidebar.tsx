"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutGrid, User, Settings, ShoppingBag, LogOut } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";

export function DashboardSidebar() {
  const { t } = useLanguage();
  const { logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/dashboard", label: t.dashboard.overview, icon: LayoutGrid },
    { href: "/dashboard/profile", label: t.dashboard.profile, icon: User },
    { href: "/dashboard/cart", label: t.dashboard.cart, icon: ShoppingBag },
    { href: "/dashboard/settings", label: t.dashboard.settings, icon: Settings },
  ];

  const onLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <aside className="flex shrink-0 flex-col gap-1 border-ink-100 dark:border-ink-800 sm:w-56 sm:border-e sm:pe-5">
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950"
                : "text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800"
            }`}
          >
            <l.icon size={16} />
            {l.label}
          </Link>
        );
      })}
      <button
        onClick={onLogout}
        className="mt-2 flex items-center gap-2.5 rounded-md px-3 py-2.5 text-start text-sm font-medium text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-950/30"
      >
        <LogOut size={16} />
        {t.nav.logout}
      </button>
    </aside>
  );
}
