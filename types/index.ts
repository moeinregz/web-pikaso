export type Locale = "fa" | "en";

export type PlanCategory = "wordpress" | "code" | "seo";

export type Plan = {
  id: string;
  category: PlanCategory;
  tier: string;
  price: number;
  priceUnit: "toman" | "toman_month";
  deliveryDays?: number;
  title: { fa: string; en: string };
  tagline: { fa: string; en: string };
  features: { fa: string[]; en: string[] };
};

export type Project = {
  id: string;
  slug: string;
  title: { fa: string; en: string };
  category: { fa: string; en: string };
  description: { fa: string; en: string };
  tags: string[];
  accent: string;
  href: string;
};

export type CartItem = {
  planId: string;
  category: PlanCategory;
  title: string;
  price: number;
};
