"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef as gsapRef, useEffect as gsapEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = gsapRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    gsap.fromTo(el, { opacity: 0, y: 80 }, {
      opacity: 1, y: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none none" },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

const CDN = "https://cdn.prod.website-files.com/69798387493c019bcbc16fc7";

// ─── Section 0: Hero ───
export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative z-0 flex h-svh min-h-svh flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" onLoadedData={() => setLoaded(true)}>
          <source src={`${CDN}%2F69a2bbca5ce26ae402fcebae_Banner%20Video%20v1.2%20%28smaller%29_mp4.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#175a6b]/65" />
      </div>

      <div className="relative z-[2] mx-auto mb-[4.6875rem] flex w-full max-w-[60.1875rem] flex-col items-start gap-2 px-[3.75rem]">
        <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
          MEDICAL-GRADE. ISO 13485 CERTIFIED.
        </span>
        <h1 className="text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white">
          Rethink Water.<br />Your most essential source.
        </h1>
        <p className="max-w-[39.375rem] text-base leading-relaxed text-white/85 sm:text-lg">
          Water is the foundation of your body. Most of us drink it dead and depleted. PeakSpring exists to change that. Hydrogen-rich water, engineered to medical-grade standards and tailored to your health goals directly from your tap.
        </p>
        <div className="mt-[0.6875rem] mb-6 flex items-center">
          <div className="relative flex">
            {["69798387493c019bcbc1705a_icon-1.webp", "699d7ca057bab3f88bc9f1eb_Ellipse%204.png", "69798387493c019bcbc17059_icon-3.webp", "699d7cb2b0e5f34f517d6577_Ellipse%202.png"].map((f, i) => (
              <img key={f} src={`${CDN}/${f}`} alt="" className="relative h-[3.0625rem] w-[3.0625rem] rounded-full border-2 border-white object-cover"
                style={{ marginLeft: i > 0 ? "-1.125rem" : 0, zIndex: 10 - i }} />
            ))}
          </div>
          <span className="ml-2 text-sm font-medium text-white/90">100K+ people already made the switch.</span>
        </div>
        <a href="/contact" className="rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors shadow-xl">
          Book a Free Consultation
        </a>
      </div>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/31612345678" target="_blank" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg"
        aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">1</span>
      </a>
    </section>
  );
}

// ─── Section 1: Feature Grid ───
const features = [
  { icon: `${CDN}/69798387493c019bcbc1705f_home_grid_icon_1.svg`, title: "15–25 Year Lifespan", sub: "Built to last generations." },
  { icon: `${CDN}/69798387493c019bcbc17061_home_grid_icon_2.svg`, title: "ISO 13485 Certification", sub: "Medical grade production." },
  { icon: `${CDN}/69798387493c019bcbc17060_home_grid_icon_3.svg`, title: "5 Years Warranty", sub: "Full peace of mind." },
  { icon: `${CDN}/69798387493c019bcbc17062_home_grid_icon_4.svg`, title: "Dedicated Expert Support", sub: "Personal guidance throughout." },
];

export function FeatureGrid() {
  return (
    <ScrollReveal>
    <section className="section_features_icon" style={{ backgroundImage: `url(${CDN}/69798387493c019bcbc170a6_features-bg.avif)`, backgroundPosition: "50%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="container-large padding-global py-5">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className="flex max-w-[20.625rem] flex-col items-center justify-center gap-5 text-center text-[#175a6b]"
              style={{ transition: `opacity 1s ${i * 0.1}s, transform 1s ${i * 0.1}s` }}>
              <img src={f.icon} alt={f.title} className="h-14 w-14" style={{ width: "3.5rem", height: "3.5rem", minWidth: "3.5rem", minHeight: "3.5rem" }} />
              <span className="text-lg font-bold">{f.title}</span>
              <span className="text-sm text-[#5d6c7b]">{f.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}

// ─── Section 2: Choose Path ───
export function ChoosePath() {
  return (
    <section className="section_home-choose-path">
      <div className="container-large padding-global py-20">
        <h2 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl">Where does your journey start?</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { href: "/family", img: `${CDN}/69798387493c019bcbc17064_choose_your_path_image_1.webp`, title: "Family", sub: "Nourish what matters." },
            { href: "/performance", img: `${CDN}/69798387493c019bcbc17077_choose_your_path_image_2.webp`, title: "Performance", sub: "Optimize every variable." },
          ].map(c => (
            <Link key={c.title} href={c.href} className="group relative overflow-hidden rounded-[20px]">
              <img src={c.img} alt={c.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-white/80">{c.sub}</p>
                <span className="mt-3 inline-block text-sm font-bold text-[#b2945e]">Explore {c.title} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: PeakLiving ───
export function PeakLiving() {
  return (
    <section className="section_home-body-peakliving py-20 lg:py-28" style={{ backgroundImage: `url(${CDN}/69798387493c019bcbc17078_body-peakspring.webp)`, backgroundPosition: "50% 0", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="container-large padding-global">
        <h2 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Hydration designed for your biology.</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <img src={`${CDN}/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif`} alt="" className="h-full w-full rounded-[20px] object-cover" />
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Not just a device. A new way of living.</h3>
            <p className="text-base leading-relaxed text-[#5d6c7b] sm:text-lg">The machine is designed to be effortless. We handle the complexity of water chemistry so you can focus on the clarity of your day.</p>
            <div className="rounded-[20px] bg-[#f1efee] p-6 space-y-6">
              {[
                { icon: `${CDN}/697b66349831f5d3ba44d102_features-icons-1.svg`, title: "Personalized 1-on-1 consultation", text: "We don't just ship a box. Our experts guide you through a setup tailored to your water and goals." },
                { icon: `${CDN}/697b66f1e74a54d34111304e_features-icons-2.svg`, title: "Automated cleaning & alerts", text: "The ionizer monitors its own performance and guides you through every maintenance step." },
                { icon: `${CDN}/697b66f103c1f444c0b1072a_features-icons-3.svg`, title: "Plug-and-Play installation", text: "Designed to fit into your kitchen without invasive plumbing." },
                { icon: `${CDN}/697b66f1c7cc26e0245b9360_features-icons-4.svg`, title: "A higher standard", text: "You choose the best in everything. Your water should be no different." },
              ].map(f => (
                <div key={f.title} className="flex gap-4">
                  <img src={f.icon} alt="" className="mt-1 h-9 w-9 shrink-0" />
                  <div><h4 className="font-bold">{f.title}</h4><p className="mt-1 text-sm leading-relaxed text-[#5d6c7b]">{f.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: pH Experience ───
export function PhExperience() {
  const [dragPos, setDragPos] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const levels = [
    { ph: "2.5", use: "Cleaning", name: "Strong Acidic Water", text: "Not for drinking. For sanitizing surfaces and cutting boards without chemicals." },
    { ph: "5.5", use: "Beauty", name: "Beauty Water", text: "Matches your skin's natural pH. Use as a facial toner." },
    { ph: "7.0", use: "Cleanse", name: "Clean Water", text: "Neutral pH. Perfect for medication and baby formula." },
    { ph: "8.5", use: "Daily", name: "Kangen Water®", text: "Your daily baseline. Hydrogen-rich, mineral-rich hydration." },
    { ph: "9.0", use: "Cooking", name: "Strong Kangen Water", text: "Extracts deeper flavours. Removes pesticides from vegetables." },
    { ph: "9.5", use: "Digestion", name: "Strong Kangen Water", text: "Helps neutralize stomach acidity after heavy meals." },
    { ph: "11.0", use: "Prepare", name: "Strong Kangen Water", text: "Emulsifies oils. Removes waxes from fruits and vegetables." },
    { ph: "11.5", use: "Detox", name: "Strong Alkaline Water", text: "Removes oil-based pesticides. Soak produce 10-15 minutes." },
  ];

  return (
    <section className="section_home-ph py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Purposeful pH.</h2>
        <p className="mb-10 max-w-xl text-lg text-[#5d6c7b]">One machine. Multiple pH levels. Over 60 purposes.</p>

        {/* pH Drag Block */}
        <div ref={barRef} className="relative mb-12 h-20 w-full cursor-pointer rounded-[77.5px] shadow-md"
          style={{ background: "linear-gradient(90deg, #964f44 0%, #bc8267 7%, #c99e6d 14%, #c5b078 22%, #c0c283 29%, #aab589 36%, #94a88e 43%, #819c91 50%, #6e9194 57%, #5c8699 64%, #547a9e 71%, #4c6ea3 79%, #556394 86%, #4d578a 93%, #42426f 100%)" }}
          onMouseDown={e => { const r = barRef.current!.getBoundingClientRect(); setDragPos(Math.max(0, Math.min(e.clientX - r.left, r.width))); }}
        >
          <div className="absolute top-0 flex h-full w-20 items-center justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm"
            style={{ left: Math.max(0, Math.min(dragPos - 41, (barRef.current?.getBoundingClientRect().width || 1000) - 82)) }}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-black text-[#175a6b]">⟷</div>
          </div>
        </div>

        {/* pH Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map(l => (
            <div key={l.ph} className="flex flex-col rounded-[20px] border border-gray-100 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center justify-center rounded-[77.5px] bg-[#175a6b] px-4 py-1.5 text-xs font-bold text-white">pH {l.ph}</span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#b2945e]/80">{l.use}</span>
              </div>
              <h3 className="text-base font-bold">{l.name}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[#5d6c7b]">{l.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Fuelling Potential Slider ───
export function PotentialSlider() {
  return (
    <section className="section_home-fuelling-potential-slider py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">We invite you to watch and learn more.</h2>
        <p className="mb-10 max-w-xl text-lg text-[#5d6c7b]">See how hydrogen-rich water transforms the daily lives of people around the world.</p>
        <Swiper modules={[Navigation, Pagination]} spaceBetween={24} slidesPerView="auto" loop pagination={{ clickable: true }} navigation className="!pb-12">
          {["The Full Story in Five Minutes", "Book Your Free Consultation", "The Complete Source", "One Machine. From Drinking to Cleaning.", "True Hydration"].map(title => (
            <SwiperSlide key={title} className="!w-[300px]">
              <div className="group cursor-pointer overflow-hidden rounded-[20px] bg-black">
                <div className="relative">
                  <img src={`${CDN}/69798387493c019bcbc170a6_features-bg.avif`} alt="" className="aspect-video w-full object-cover opacity-70 transition-opacity group-hover:opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="p-5"><h3 className="text-lg font-bold text-white">{title}</h3></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// ─── Section 6: Stacked Cards ───
export function StackedCards() {
  return (
    <section className="section_stacked-card py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="mb-4 mx-auto max-w-[48rem] text-center text-4xl font-bold tracking-tight sm:text-5xl">How your tap water becomes hydrogen-rich water</h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-2 relative">
          {[
            { step: "01", title: "Step 1: Filtration", text: "Tap water enters the device and passes through a medical-grade internal filter. This removes chlorine, sediment, rust, microplastics and other contaminants — without stripping the essential minerals your body needs." },
            { step: "02", title: "Step 2: Electrolysis", text: "Inside the platinum-coated titanium electrolysis chamber, an electrical current separates the water into acidic and alkaline streams. The result: hydrogen-rich Kangen Water® — packed with molecular hydrogen (H₂)." },
          ].map((card, i) => (
            <div key={card.step} className="group relative overflow-hidden rounded-[20px] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow" style={{ position: "sticky", top: `${i === 0 ? 22 : 27}rem` }}>
              <span className="text-6xl font-black text-[#175a6b]/10">{card.step}</span>
              <h3 className="mt-2 text-2xl font-bold">{card.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#5d6c7b]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Certificates ───
export function Certificates() {
  return (
    <section className="section_home-certificates py-20 lg:py-28 bg-gradient-to-b from-white to-[#f6fafb]/50">
      <div className="container-large padding-global">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <img src={`${CDN}/69798387493c019bcbc1709a_certificate_logo_3.webp`} alt="ISO 13485" className="mb-6 h-20 w-auto" />
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Medical Grade Purity. Certified Safety</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5d6c7b] sm:text-lg">Most water ionizers are classified as kitchen appliances. PeakSpring is different. Our ionizer is manufactured to ISO 13485 — the same internationally recognized standard required for the production of medical devices.</p>
            <a href="/about-us" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#175a6b]/30 px-6 py-3 text-sm font-bold text-[#175a6b] hover:bg-[#175a6b]/5 transition-colors">Discover the Technology →</a>
          </div>
          <img src={`${CDN}/69798387493c019bcbc17082_performance_image.webp`} alt="" className="w-full rounded-[20px] object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: Antioxidant ───
export function Antioxidant() {
  return (
    <section className="section_home-features py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img src={`${CDN}/69798387493c019bcbc17082_performance_image.webp`} alt="" className="w-full rounded-[20px] object-cover shadow-lg" />
          </div>
          <div>
            <img src={`${CDN}/69798387493c019bcbc1709a_certificate_logo_3.webp`} alt="ISO 13485" className="mb-5 h-10 w-auto" />
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The Ultimate Antioxidant. Liquid Immunity.</h2>
            <p className="mt-6 text-base leading-relaxed text-[#5d6c7b] sm:text-lg">Chronic inflammation is the silent adversary of longevity and the root cause of most modern diseases. Molecular hydrogen (H₂) is the smallest molecule in existence. It penetrates where other antioxidants cannot, reaching your cells at the deepest level. Backed by over 3,000 peer-reviewed studies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: Performance System ───
export function PerformanceSystem() {
  return (
    <section className="section_home-performance py-20 lg:py-24 border-y border-gray-100">
      <div className="container-large padding-global">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl">A performance system built for a lifetime</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-lg text-[#5d6c7b]">This is more than a machine. A long-term investment in your health, focus, and recovery.</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {["Personalized 1-on-1 Consultation", "Ongoing Expert Service & Support", "Performance Optimization Checkups"].map((item, i) => (
            <div key={item} className="rounded-[20px] border border-gray-100 bg-[#fafafa] p-8 text-center hover:-translate-y-1 hover:border-[#b2945e] transition-all">
              <span className="text-3xl font-black text-[#175a6b]/10">{i + 1}</span>
              <p className="mt-2 font-semibold">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#08303a] transition-colors shadow-lg">Book a Free Consultation</a>
        </div>
      </div>
    </section>
  );
}

// ─── Section 10: Benefits Slider ───
export function BenefitsSlider() {
  const benefits = [
    { title: "Recovery", text: "Molecular hydrogen reduces exercise-induced oxidative stress, helping muscles recover faster." },
    { title: "Focus", text: "Hydrogen-rich water supports mitochondrial function for sustained mental clarity." },
    { title: "Longevity", text: "Selective antioxidant action targets harmful free radicals while preserving beneficial ones." },
    { title: "Sleep", text: "Better hydration improves sleep quality by regulating body temperature." },
    { title: "Immunity", text: "Hydrogen water supports a balanced inflammatory response for optimal immune function." },
    { title: "Skin", text: "Beauty Water at pH 5.5 works as an effective, chemical-free facial toner." },
  ];

  return (
    <section className="section_home-benefits py-20 lg:py-28 bg-[#f8fdff]">
      <div className="container-large padding-global">
        <Swiper modules={[Autoplay, EffectFade]} effect="fade" loop autoplay={{ delay: 5000 }} pagination={{ clickable: true, el: ".benefits-pagination" }} className="!pb-12">
          <SwiperSlide><div className="mx-auto max-w-2xl text-center"><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">You optimize everything. Now optimize your water.</h2></div></SwiperSlide>
          {benefits.map(b => (
            <SwiperSlide key={b.title}>
              <div className="mx-auto max-w-2xl rounded-[20px] border border-gray-100 bg-white p-8 text-center">
                <h3 className="text-xl font-bold">{b.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#5d6c7b]">{b.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="benefits-pagination mt-6 flex justify-center gap-2" />
      </div>
    </section>
  );
}

// ─── Section 11: FAQ Accordion ───
export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0); // First item open per contract
  const faqs = [
    { q: "Does it interfere with my training adaptations?", a: "No, and this is one of the most important distinctions. High-dose antioxidant supplements can suppress reactive oxygen species your body uses as a training signal. H₂ does not work this way. It selectively neutralizes only cytotoxic free radicals." },
    { q: "Which support do I get from PeakSpring?", a: "PeakSpring is here from your first question to years after installation. After purchase, you receive personal guidance on installation, usage, and water quality, plus access to our dedicated support team." },
    { q: "How do I receive more information?", a: "We are happy to assist in the way that suits you best. Book a free consultation for a personal walkthrough via video call, or contact us directly on WhatsApp." },
    { q: "Why have I never heard of this before?", a: "Molecular hydrogen has been researched for decades and is supported by over 3,000 peer-reviewed publications. The FDA acknowledged it as safe in 2014. In Japan, this technology has been used for over 50 years." },
    { q: "Is it backed by science?", a: "Molecular hydrogen is scientifically recognized as a selective antioxidant. It has been recognized as safe (GRAS) by the FDA since 2014 and is supported by over 3,000 peer-reviewed publications." },
    { q: "What is hydrogen rich water and how is it different from filtered water?", a: "Standard filters take things out like chlorine and sediment. The ionizer goes a step further by putting something back in: dissolved molecular hydrogen (H₂), the smallest and most bioavailable antioxidant in existence." },
  ];

  return (
    <section id="faq" className="section_faq py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-3xl">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-100">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-12 py-4 text-[1.25rem] font-medium leading-[2rem] transition-colors hover:text-[#b2945e]">
                {item.q}
                <span className="text-2xl text-[#b2945e] transition-transform duration-200" style={{ transform: open === i ? "rotate(180deg)" : "rotate(0)" }}>+</span>
              </button>
              <div style={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0, overflow: "hidden", transition: "height 0.5s ease, opacity 0.3s ease" }}>
                <p className="pb-4 text-sm leading-relaxed text-[#5d6c7b]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}