import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  Hero, FeatureGrid, ChoosePath, PeakLiving, PhExperience,
  PotentialSlider, StackedCards, Certificates, Antioxidant,
  PerformanceSystem, BenefitsSlider, FaqAccordion,
} from "@/components/site/HomeSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <ChoosePath />
        <PeakLiving />
        <PhExperience />
        <PotentialSlider />
        <StackedCards />
        <Certificates />
        <Antioxidant />
        <PerformanceSystem />
        <BenefitsSlider />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}