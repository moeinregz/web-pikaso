import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "gharch-room",
    title: { fa: "قارچ روم", en: "Gharch Room" },
    category: { fa: "فروشگاه تجهیزات پرورش قارچ", en: "Mushroom farming e-commerce" },
    description: {
      fa: "سایت فروش تجهیزات پرورش قارچ و آموزش پرورش قارچ خانگی، با فروشگاه کامل و مدیریت سفارش.",
      en: "An online store for mushroom-growing kits and know-how, with a full storefront and order management.",
    },
    tags: ["WordPress", "WooCommerce", "SEO"],
    accent: "#2F6FED",
    href: "https://gharchroom.com/"
  },
  {
    id: "2",
    slug: "ap-beauty",
    title: { fa: "ای‌پی بیوتی", en: "AP Beauty" },
    category: { fa: "لوازم آرایشی و بهداشتی", en: "Cosmetics & personal care" },
    description: {
      fa: "فروشگاه آنلاین لوازم آرایشی و بهداشتی با تجربه خرید سریع و ویترین محصولات جذاب.",
      en: "A cosmetics storefront built for a fast checkout flow and an eye-catching product showcase.",
    },
    tags: ["Elementor", "WooCommerce", "WordPress"],
    accent: "#C97B4A",
    href: "https://apbeauty.ir/"
  },
  {
    id: "3",
    slug: "style-pikaso",
    title: { fa: "استایل پیکاسو", en: "Style Pikaso" },
    category: { fa: "فروش پوشاک", en: "Fashion & apparel" },
    description: {
      fa: "فروشگاه پوشاک با تمرکز بر ویترین بصری قوی، فیلتر پیشرفته محصولات و تجربه خرید موبایل‌محور.",
      en: "An apparel store built around a strong visual showcase, advanced filtering and a mobile-first checkout.",
    },
    tags: ["React.js", "Node.js", "MongoDB"],
    accent: "#1B4B8F",
    href: "https://style-pikaso.vercel.app/"
  },
  {
    id: "4",
    slug: "moein-fayegh",
    title: { fa: "معین فایق", en: "Moein Fayegh" },
    category: { fa: "سایت شخصی و رزومه", en: "Personal portfolio & résumé" },
    description: {
      fa: "سایت شخصی و رزومه آنلاین با نمایش نمونه‌کارها، مهارت‌ها و راه ارتباطی مستقیم.",
      en: "A personal résumé site presenting work samples, skills, and a direct line of contact.",
    },
    tags: ["Next.js", "Tailwind", "TypeScript"],
    accent: "#0F0F11",
    href: "https://moein-fayegh.vercel.app/"
  },
];
