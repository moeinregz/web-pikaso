import { Plan } from "@/types";

export const plans: Plan[] = [
  // ---------- WordPress ----------
  {
    id: "wp-corporate",
    category: "wordpress",
    tier: "corporate",
    price: 4500000,
    priceUnit: "toman",
    deliveryDays: 7,
    title: { fa: "وردپرس شرکتی", en: "WordPress · Corporate" },
    tagline: {
      fa: "معرفی حرفه‌ای کسب‌وکار و خدمات شما",
      en: "A professional face for your company and services",
    },
    features: {
      fa: [
        "طراحی اختصاصی صفحه اصلی",
        "تا ۶ صفحه داخلی (درباره‌ما، خدمات، تماس و ...)",
        "فرم تماس و نقشه موقعیت",
        "سازگار با موبایل و تبلت",
        "سئوی فنی پایه",
        "آموزش مدیریت محتوا",
      ],
      en: [
        "Custom homepage design",
        "Up to 6 inner pages (about, services, contact, ...)",
        "Contact form and location map",
        "Mobile & tablet responsive",
        "Basic technical SEO",
        "Content management training",
      ],
    },
  },
  {
    id: "wp-store",
    category: "wordpress",
    tier: "store",
    price: 7500000,
    priceUnit: "toman",
    deliveryDays: 12,
    title: { fa: "وردپرس فروشگاهی", en: "WordPress · Store" },
    tagline: {
      fa: "فروشگاه آنلاین کامل با ووکامرس",
      en: "A complete online store powered by WooCommerce",
    },
    features: {
      fa: [
        "راه‌اندازی فروشگاه با ووکامرس",
        "درگاه پرداخت و باشگاه مشتریان",
        "مدیریت نامحدود محصول و دسته‌بندی",
        "پنل ارسال و پیگیری سفارش",
        "بهینه‌سازی سرعت و سئو فروشگاهی",
        "آموزش کامل مدیریت فروشگاه",
      ],
      en: [
        "WooCommerce store setup",
        "Payment gateway & customer accounts",
        "Unlimited products & categories",
        "Shipping and order tracking panel",
        "Speed optimization & store SEO",
        "Full store management training",
      ],
    },
  },
  {
    id: "wp-custom",
    category: "wordpress",
    tier: "custom",
    price: 12000000,
    priceUnit: "toman",
    deliveryDays: 18,
    title: { fa: "وردپرس اختصاصی", en: "WordPress · Custom" },
    tagline: {
      fa: "طراحی کاملاً اختصاصی برای نیازهای خاص شما",
      en: "Fully bespoke build tailored to your exact needs",
    },
    features: {
      fa: [
        "طراحی UI/UX کاملاً اختصاصی",
        "توسعه افزونه سفارشی در صورت نیاز",
        "یکپارچه‌سازی با سیستم‌های شخص ثالث",
        "چند زبانه و چند ارزی",
        "پشتیبانی و امنیت پیشرفته",
        "۳ ماه پشتیبانی رایگان",
      ],
      en: [
        "Fully custom UI/UX design",
        "Custom plugin development if needed",
        "Third-party system integrations",
        "Multi-language & multi-currency",
        "Advanced hardening & support",
        "3 months of free support",
      ],
    },
  },
  // ---------- Code (React/Next/Node/Tailwind/TS) ----------
  {
    id: "code-corporate",
    category: "code",
    tier: "corporate",
    price: 9000000,
    priceUnit: "toman",
    deliveryDays: 14,
    title: { fa: "کدنویسی شرکتی", en: "Code · Corporate" },
    tagline: {
      fa: "React، Next.js و Tailwind برای سرعت و پایداری بالا",
      en: "React, Next.js and Tailwind for speed and reliability",
    },
    features: {
      fa: [
        "توسعه با Next.js + TypeScript",
        "طراحی رابط کاربری اختصاصی با Tailwind CSS",
        "بک‌اند سبک با Node.js برای فرم‌ها",
        "سرعت بارگذاری بالا و SEO فنی",
        "کد تمیز و مستندسازی شده",
        "آموزش تحویل و دیپلوی",
      ],
      en: [
        "Built with Next.js + TypeScript",
        "Custom UI with Tailwind CSS",
        "Lightweight Node.js backend for forms",
        "High performance & technical SEO",
        "Clean, documented codebase",
        "Handover and deployment guidance",
      ],
    },
  },
  {
    id: "code-store",
    category: "code",
    tier: "store",
    price: 15000000,
    priceUnit: "toman",
    deliveryDays: 21,
    title: { fa: "کدنویسی فروشگاهی", en: "Code · Store" },
    tagline: {
      fa: "فروشگاه اختصاصی با Next.js و Node.js",
      en: "A bespoke storefront built on Next.js and Node.js",
    },
    features: {
      fa: [
        "فرانت‌اند Next.js + TypeScript + Tailwind",
        "بک‌اند اختصاصی Node.js و API سفارشی",
        "درگاه پرداخت، سبد خرید و حساب کاربری",
        "پنل مدیریت محصولات و سفارش‌ها",
        "کارایی بالا در مقیاس‌های بزرگ",
        "۲ ماه پشتیبانی رایگان",
      ],
      en: [
        "Next.js + TypeScript + Tailwind frontend",
        "Custom Node.js backend & API",
        "Payment gateway, cart and accounts",
        "Product & order admin panel",
        "Built to perform at scale",
        "2 months of free support",
      ],
    },
  },
  {
    id: "code-custom",
    category: "code",
    tier: "custom",
    price: 25000000,
    priceUnit: "toman",
    deliveryDays: 30,
    title: { fa: "کدنویسی اختصاصی", en: "Code · Custom" },
    tagline: {
      fa: "محصول وب کاملاً اختصاصی، از صفر تا صد",
      en: "A fully bespoke web product, built end to end",
    },
    features: {
      fa: [
        "معماری اختصاصی React / Next.js / Node.js",
        "پنل مدیریت و داشبورد اختصاصی",
        "احراز هویت، نقش‌های کاربری و امنیت",
        "یکپارچه‌سازی با سرویس‌ها و API‌های خارجی",
        "تست، بهینه‌سازی و مقیاس‌پذیری",
        "۳ ماه پشتیبانی و توسعه رایگان",
      ],
      en: [
        "Custom React / Next.js / Node.js architecture",
        "Bespoke admin panel & dashboard",
        "Auth, user roles and security",
        "Integrations with external APIs & services",
        "Testing, optimization and scalability",
        "3 months of free support & iteration",
      ],
    },
  },
  // ---------- SEO ----------
  {
    id: "seo-basic",
    category: "seo",
    tier: "basic",
    price: 1500000,
    priceUnit: "toman_month",
    title: { fa: "سئو پایه", en: "SEO · Basic" },
    tagline: {
      fa: "شروع درست سئو برای دیده‌شدن در گوگل",
      en: "A solid start toward ranking on Google",
    },
    features: {
      fa: [
        "بررسی و رفع خطاهای فنی سایت",
        "تحقیق کلمات کلیدی اولیه",
        "بهینه‌سازی تگ‌های عنوان و توضیحات",
        "ثبت در گوگل سرچ کنسول و آنالیتیکس",
        "گزارش ماهانه پیشرفت",
      ],
      en: [
        "Technical site audit & fixes",
        "Initial keyword research",
        "Title & meta description optimization",
        "Google Search Console & Analytics setup",
        "Monthly progress report",
      ],
    },
  },
  {
    id: "seo-intermediate",
    category: "seo",
    tier: "intermediate",
    price: 3000000,
    priceUnit: "toman_month",
    title: { fa: "سئو متوسط", en: "SEO · Intermediate" },
    tagline: {
      fa: "تولید محتوا و لینک‌سازی برای رشد پیوسته",
      en: "Content and link building for steady growth",
    },
    features: {
      fa: [
        "همه موارد پلن پایه",
        "تولید محتوای بهینه (۴ مقاله در ماه)",
        "لینک‌سازی داخلی و خارجی",
        "بهینه‌سازی سرعت سایت",
        "رصد رتبه کلمات کلیدی",
        "گزارش تحلیلی ماهانه",
      ],
      en: [
        "Everything in Basic",
        "Optimized content (4 articles/month)",
        "Internal & external link building",
        "Site speed optimization",
        "Keyword rank tracking",
        "Monthly analytics report",
      ],
    },
  },
  {
    id: "seo-advanced",
    category: "seo",
    tier: "advanced",
    price: 5500000,
    priceUnit: "toman_month",
    title: { fa: "سئو پیشرفته", en: "SEO · Advanced" },
    tagline: {
      fa: "استراتژی کامل سئو برای رقابت در نتایج برتر",
      en: "A full strategy to compete for top rankings",
    },
    features: {
      fa: [
        "همه موارد پلن متوسط",
        "استراتژی سئوی رقابتی و تحلیل رقبا",
        "تولید محتوای پیشرفته (۸ مقاله در ماه)",
        "سئوی فنی پیشرفته و Core Web Vitals",
        "لینک‌سازی حرفه‌ای و دیجیتال PR",
        "جلسه مشاوره اختصاصی ماهانه",
      ],
      en: [
        "Everything in Intermediate",
        "Competitive strategy & competitor analysis",
        "Advanced content (8 articles/month)",
        "Advanced technical SEO & Core Web Vitals",
        "Professional link building & digital PR",
        "Monthly 1:1 strategy session",
      ],
    },
  },
];

export const getPlansByCategory = (category: Plan["category"]) =>
  plans.filter((p) => p.category === category);

export const getPlanById = (id: string) => plans.find((p) => p.id === id);
