"use client";

import Link from "next/link";
import { Instagram, Send, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { CONTACT_INFO } from "@/lib/data/contact-info";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink-100 bg-ink-50/60 dark:border-ink-800 dark:bg-ink-900/40">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-7 text-ink-600 dark:text-ink-400">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-ink-900 dark:text-ink-100">
            {t.footer.linksTitle}
          </h4>
          <ul className="space-y-2.5 text-sm text-ink-600 dark:text-ink-400">
            <li><Link href="/" className="hover:text-blue-light">{t.nav.home}</Link></li>
            <li><Link href="/portfolio" className="hover:text-blue-light">{t.nav.portfolio}</Link></li>
            <li><Link href="/shop" className="hover:text-blue-light">{t.nav.shop}</Link></li>
            <li><Link href="/contact" className="hover:text-blue-light">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-ink-900 dark:text-ink-100">
            {t.footer.contactTitle}
          </h4>
          <ul className="space-y-2.5 text-sm text-ink-600 dark:text-ink-400">
            <li>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-blue-light">
                <Phone size={15} /> {CONTACT_INFO.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-light">
                <Instagram size={15} /> {CONTACT_INFO.instagramHandle}
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.telegramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-light">
                <Send size={15} /> {CONTACT_INFO.telegramHandle}
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-light">
                <MessageCircle size={15} /> {CONTACT_INFO.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-100 py-5 dark:border-ink-800">
        <Container>
          <p className="text-center text-xs text-ink-500 dark:text-ink-500">
            © {new Date().getFullYear()} Web Pikaso — {t.footer.rights}
          </p>
        </Container>
      </div>
    </footer>
  );
}
