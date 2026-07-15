import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <PortfolioPreview />
      <CtaBand />
    </>
  );
}
