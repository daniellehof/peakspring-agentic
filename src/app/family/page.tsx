import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FeatureGrid, PeakLiving, PhExperience, BenefitsSlider, FaqAccordion } from "@/components/site/HomeSections";

export default function FamilyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-black">
          <img src="https://cdn.prod.website-files.com/69798387493c019bcbc16fc7/69798387493c019bcbc17063_home_footer_bg.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
          <div className="relative mx-auto max-w-[82.5rem] px-[3.75rem] py-24 text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/80">For Your Family</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">Nourish what matters.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75 sm:text-xl">Water is the foundation of your family's health. Most tap water has been stripped of what makes it truly effective. The ionizer brings it back: hydrogen rich, mineral rich, and free from chlorine and microplastics.</p>
            <a href="/contact" className="mt-8 inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors shadow-2xl">Protect Your Family's Health</a>
          </div>
        </section>
        <FeatureGrid />
        <PeakLiving />
        <PhExperience />
        <BenefitsSlider />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}