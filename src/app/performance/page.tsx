import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero, FeatureGrid, BenefitsSlider, FaqAccordion } from "@/components/site/HomeSections";

export default function PerformancePage() {
  return (<><Navbar /><main><Hero /><FeatureGrid /><BenefitsSlider /><FaqAccordion /></main><Footer /></>);
}