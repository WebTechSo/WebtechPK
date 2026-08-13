import { CaseStudies } from "@/components/home/CaseStudies";
import { CtaBand } from "@/components/home/CtaBand";
import { Engagement } from "@/components/home/Engagement";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Stats } from "@/components/home/Stats";
import { Technologies } from "@/components/home/Technologies";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBar } from "@/components/home/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <ServicesPreview />
      <CaseStudies />
      <Engagement />
      <Technologies />
      <Testimonials />
      <CtaBand />
    </>
  );
}
