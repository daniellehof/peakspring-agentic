import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FeatureGrid, PhExperience, BenefitsSlider, FaqAccordion } from "@/components/site/HomeSections";

export default function PerformancePage() {
  return (<><Navbar /><main>
    <section className="relative z-0 flex h-svh min-h-svh flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="https://cdn.prod.website-files.com/69798387493c019bcbc16fc7%2F69a2bbca5ce26ae402fcebae_Banner%20Video%20v1.2%20%28smaller%29_mp4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#175a6b]/65" />
      </div>
      <div className="relative z-[2] mx-auto mb-[4.6875rem] flex w-full max-w-[60.1875rem] flex-col items-start gap-2 px-[3.75rem]">
        <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">Engineered Hydration. ISO 13485.</span>
        <h1 className="text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white">The missing variable in<br />your performance equation.</h1>
        <p className="max-w-[39.375rem] text-base leading-relaxed text-white/85 sm:text-lg">You track sleep, recovery, macros. You measure everything that moves the needle. But the water fuelling every cell, every rep, every recovery window? Most athletes never question it. Hydrogen-rich water, produced to ISO 13485 medical device standards, is the variable you haven't optimised yet.</p>
        <div className="mt-[0.6875rem] mb-6 flex items-center"><span className="text-sm font-medium text-white/90">Backed by 3,000+ peer-reviewed studies.</span></div>
        <a href="/contact" className="rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors shadow-xl">Book a Free Consultation</a>
      </div>
    </section>
    <FeatureGrid />
    <PhExperience />
    <BenefitsSlider />
    <FaqAccordion />
  </main><Footer /></>);
}