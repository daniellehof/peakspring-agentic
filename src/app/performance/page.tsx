import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FeatureGrid, PotentialSlider, BenefitsSlider, FaqAccordion } from "@/components/site/HomeSections";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const CDN = "https://cdn.prod.website-files.com/69798387493c019bcbc16fc7";

export default function PerformancePage() {
  return (<><Navbar /><main>
    {/* Hero */}
    <section className="relative z-0 flex h-svh min-h-svh flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={`${CDN}/69798387493c019bcbc17058_home-hero.webp`} alt="" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-[#175a6b]/65"/>
      </div>
      <div className="relative z-[2] mx-auto mb-[4.6875rem] w-full max-w-[60.1875rem] px-[3.75rem]">
        <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">Engineered Hydration. ISO 13485.</span>
        <h1 className="text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white">The missing variable in your performance equation.</h1>
        <p className="mt-2 max-w-[39.375rem] text-base leading-relaxed text-white/85 sm:text-lg">You track sleep, recovery, macros. You measure everything that moves the needle. But the water fuelling every cell, every rep, every recovery window? Most athletes never question it. Hydrogen-rich water, produced to ISO 13485 medical device standards, is the variable you haven't optimised yet.</p>
        <div className="mt-[0.6875rem] mb-6 flex items-center"><span className="text-sm font-medium text-white/90">Backed by 3,000+ peer-reviewed studies.</span></div>
        <a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors shadow-xl">Book a Free Consultation</a>
      </div>
    </section>

    <FeatureGrid />

    {/* Why hydration is a performance metric */}
    <section className="section_athletes-body-peakliving py-20 lg:py-28" style={{backgroundImage:`url(${CDN}/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif)`,backgroundPosition:"50% 0",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className="container-large padding-global">
        <h2 className="reveal mb-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Why hydration is a performance metric.</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <img src={`${CDN}/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif`} alt="" className="reveal h-full w-full rounded-[20px] object-cover"/>
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-[#5d6c7b]">Your body is up to 70% water. Every system that drives performance, from oxygen delivery to muscle contraction to cognitive sharpness, depends on water. Most athletes assume they're hydrated because they drink enough. Volume is only part of the equation. What your cells actually absorb determines whether you recover in hours or ache for days.</p>
            <p className="text-base leading-relaxed text-[#5d6c7b]">Standard tap and bottled water has been treated with chlorine, processed, and stored in plastic. The result hydrates, but only on the surface. Hydrogen-rich water adds dissolved molecular hydrogen (H₂): the smallest molecule in existence, capable of passing through the cell membrane to neutralise oxidative stress at its source. This is hydration at the level where performance is actually built.</p>
            <div className="grid grid-cols-2 gap-4">
              {["Train Harder, Recover Faster","Protect Your Cells Under Pressure","Sustain Focus When It Counts","Fuel Long Term Performance"].map((t,i)=>(
                <div key={i} className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
                  <img src={`${CDN}/${["69798387493c019bcbc1707b_peakliving_icon_1","69798387493c019bcbc1707a_peakliving_icon_2","69798387493c019bcbc1707c_peakliving_icon_3","69798387493c019bcbc17079_peakliving_icon_4"][i]}.svg`} alt="" className="h-8 w-8 shrink-0"/>
                  <span className="text-sm font-semibold text-[#175a6b]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Performance Impact: What the Research shows */}
    <section className="section_home-features is-color-secondary py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Performance Impact: What the <span className="text-[#b2945e]">Research</span> shows</h2>
            <p className="text-sm text-[#b2945e]">All figures from peer-reviewed studies on trained athletes. Full sources available in our Engineered Hydration Report.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[{icon:`${CDN}/697b66f103c1f444c0b1072a_features-icons-3.svg`,stat:"Peak power output",label:"↓ Blood Lactate Faster Recovery"},{icon:`${CDN}/69798387493c019bcbc1707a_peakliving_icon_2.svg`,stat:"Mean Power Output",label:"Less Effort, Same Output"}].map(c=>(
                <div key={c.label} className="rounded-xl bg-white p-5 shadow-sm text-center">
                  <img src={c.icon} alt="" className="mx-auto mb-3 h-10 w-10"/>
                  <span className="block text-3xl font-bold text-[#175a6b]">{c.stat}</span>
                  <span className="text-sm text-[#5d6c7b]">{c.label}</span>
                </div>
              ))}
            </div>
            <a href="/contact" className="mt-4 inline-flex rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#08303a] transition-colors">Book a Free Consultation</a>
          </div>
          <img src={`${CDN}/6a25d1b345841096e8ab3fa5_runner.png`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
        </div>
      </div>
    </section>

    {/* Biohack Your Recovery */}
    <section className="section_home-features is-color-secondary py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid gap-12 lg:grid-cols-2">
          <img src={`${CDN}/69967ba7efb89a730d52d290_8813a50c5595143e8eb74aeef7bb818f4af`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
          <div className="reveal space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Biohack Your Recovery at the <span className="text-[#b2945e]">Cellular Level.</span></h2>
            <p className="text-base leading-relaxed text-[#5d6c7b]">During intense effort, your body produces reactive oxygen species (ROS). In small amounts they are essential signals for adaptation. In excess, they cause inflammation, slow recovery, and accelerate the aging of your cells.</p>
            <p className="text-base leading-relaxed text-[#5d6c7b]">Most antioxidant supplements neutralize ROS indiscriminately. High-dose vitamin C and E suppress the adaptive signal you trained for. H₂ is different. It selectively neutralizes only the cytotoxic free radicals, the ones that cause damage. The signal that builds muscle, strength, and capacity is preserved. It is also the only antioxidant small enough to cross the blood-brain barrier.</p>
            <p className="text-sm font-semibold text-[#b2945e] mt-5 mb-3">What's inside</p>
            <div className="flex gap-4 flex-wrap">
              {[{icon:`${CDN}/69798387493c019bcbc1707e_truth_icon_1.svg`,t:"Penetrates the Cell Membrane"},{icon:`${CDN}/69798387493c019bcbc17081_truth_icon_2.svg`,t:"Selective, Not Suppressive"},{icon:`${CDN}/697b66f1c7cc26e0245b9360_features-icons-4.svg`,t:"Crosses Blood-Brain Barrier"}].map(c=>(
                <div key={c.t} className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm"><img src={c.icon} alt="" className="h-6 w-6"/><span className="text-sm font-semibold text-[#175a6b]">{c.t}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How to use it */}
    <section className="section_home-performance py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="reveal mb-2 text-4xl font-bold tracking-tight sm:text-5xl">How to use it. A structured <span className="text-[#b2945e]">Protocol.</span></h2>
        <p className="reveal mb-10 text-lg text-[#5d6c7b]">For best results, drink 1.5 to 2.5 litres daily. Timed around your training for maximum effect.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {[{t:"Pre-Training",d:"/ 10-30 min before effort",img:`${CDN}/6a25d76d7b716ffce3715afb_schoen%20klein.jpg`},{t:"Post-Training",d:"/ within the first hour",img:`${CDN}/697b66f103c1f444c0b1072a_features-icons-3.svg`}].map(c=>(
            <div key={c.t} className="reveal rounded-[20px] border bg-white p-8 flex gap-4 items-center shadow-sm">
              <img src={c.img} alt="" className="h-16 w-16 rounded-xl object-cover"/>
              <div><h3 className="text-xl font-bold">{c.t}</h3><p className="text-sm text-[#5d6c7b]">{c.d}</p></div>
            </div>
          ))}
        </div>
        <div className="reveal mt-8 text-center"><a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors">Book a Free Consultation</a></div>
      </div>
    </section>

    {/* Built to last */}
    <section className="section_home-features is-color-secondary py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built to last. <br/><span className="text-[#b2945e]">Guaranteed</span> to perform.</h2>
            <p className="text-base leading-relaxed text-[#5d6c7b]">This is not a gadget or a trend. The ionizer is manufactured to ISO 13485 medical device standards and engineered to last 15–25 years. You are investing in decades of health, performance, and precision.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[{icon:`${CDN}/69798387493c019bcbc17061_home_grid_icon_2.svg`,t:"ISO 13485 Medical Certification"},{icon:`${CDN}/69798387493c019bcbc17062_home_grid_icon_4.svg`,t:"Dedicated Expert Support"},{icon:`${CDN}/69798387493c019bcbc17060_home_grid_icon_3.svg`,t:"5 Yrs Manufacturer Warranty"},{icon:`${CDN}/69798387493c019bcbc1705f_home_grid_icon_1.svg`,t:"15–25 Year Lifespan"}].map(c=>(
                <div key={c.t} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"><img src={c.icon} alt="" className="h-8 w-8 shrink-0"/><span className="text-sm font-semibold text-[#175a6b]">{c.t}</span></div>
              ))}
            </div>
            <a href="/contact" className="mt-4 inline-flex rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#08303a] transition-colors">Book a Free Consultation</a>
          </div>
          <img src={`${CDN}/69967f7a367a0f16e9ac8027_image%20582%201.avif`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
        </div>
      </div>
    </section>

    <PotentialSlider />

    {/* The chemistry of Victory */}
    <section className="section_home-certificates py-20 lg:py-28 bg-gradient-to-b from-white to-[#f6fafb]/50">
      <div className="container-large padding-global">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The chemistry of Victory</h2>
            <p className="mt-6 text-base leading-relaxed text-[#5d6c7b]">Every detail of your performance is engineered. Your water should be no different. The ionizer is manufactured to ISO 13485 medical device standards, the same certification required for hospital equipment. The same level of rigour you demand from your equipment, applied to your hydration.</p>
            <Link href="/about-us" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#175a6b]/30 px-6 py-3 text-sm font-bold text-[#175a6b] hover:bg-[#175a6b]/5 transition-colors">Discover the Technology →</Link>
          </div>
          <img src={`${CDN}/6996817990b3e91b7a9e010d_cc5e2d5c7aebe1af49e6775da8e620a9532`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
        </div>
      </div>
    </section>

    {/* Performance system */}
    <section className="section_home-performance py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="reveal mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl">A performance system built for a lifetime</h2>
        <p className="reveal mx-auto mb-12 max-w-xl text-center text-lg text-[#5d6c7b]">This is more than a machine. It is a long-term investment in your health, your focus, and your recovery. Backed by medical grade technology and dedicated expert support from PeakSpring.</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {["Personalized 1-on-1 Consultation","Ongoing Expert Service & Support","Performance Optimization Checkups"].map((t,i)=>(
            <div key={t} className="reveal rounded-[20px] border border-gray-100 bg-[#fafafa] p-8 text-center hover:-translate-y-1 hover:border-[#b2945e] transition-all">
              <span className="text-3xl font-bold text-[#175a6b]/10">{i+1}</span>
              <p className="mt-2 font-semibold">{t}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 text-center"><a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#08303a] transition-colors shadow-lg">Book a Free Consultation</a></div>
      </div>
    </section>

    <BenefitsSlider />
    <FaqAccordion />
  </main><Footer /></>);
}