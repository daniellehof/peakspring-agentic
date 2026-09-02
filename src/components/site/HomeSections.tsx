"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const CDN = "https://cdn.prod.website-files.com/69798387493c019bcbc16fc7";

/* ═══════════════════════ HERO ═══════════════════════ */
export function Hero() {
  return (
    <section className="relative z-0 flex h-svh min-h-svh flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src={`${CDN}%2F69a2bbca5ce26ae402fcebae_Banner%20Video%20v1.2%20%28smaller%29_mp4.mp4`} type="video/mp4"/>
        </video>
        <div className="absolute inset-0 bg-[#175a6b]/65"/>
      </div>
      <div className="relative z-[2] mx-auto mb-[4.6875rem] w-full max-w-[60.1875rem] px-[3.75rem]">
        <h1 className="text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white">Rethink Water.</h1>
        <h1 className="text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white">Your most essential source.</h1>
        <p className="mt-2 max-w-[39.375rem] text-base leading-relaxed text-white/85 sm:text-lg">Water is the foundation of your body. Most of us drink it dead and depleted. PeakSpring exists to change that. Hydrogen-rich water, engineered to medical-grade standards and tailored to your health goals directly from your tap.</p>
        <div className="mt-[0.6875rem] mb-6 flex items-center">
          <div className="relative flex">
            {["69798387493c019bcbc1705a_icon-1.webp","699d7ca057bab3f88bc9f1eb_Ellipse%204.png","69798387493c019bcbc17059_icon-3.webp","699d7cb2b0e5f34f517d6577_Ellipse%202.png"].map((f,i)=>(
              <img key={f} src={`${CDN}/${f}`} alt="" className="h-[3.0625rem] w-[3.0625rem] rounded-full border-2 border-white object-cover" style={{marginLeft:i===0?0:"-1.125rem",zIndex:10-i}}/>
            ))}
          </div>
          <span className="ml-2 text-sm font-medium text-white/90">100K+ people already made the switch.</span>
        </div>
        <a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white shadow-xl hover:bg-[#9a7c4a] transition-colors">Book a Free Consultation</a>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 1 — Feature Grid ═══════════════════════ */
const features = [
  {icon:`${CDN}/69798387493c019bcbc1705f_home_grid_icon_1.svg`,t:"15–25 Year Lifespan"},
  {icon:`${CDN}/69798387493c019bcbc17061_home_grid_icon_2.svg`,t:"ISO 13485 Certification"},
  {icon:`${CDN}/69798387493c019bcbc17060_home_grid_icon_3.svg`,t:"5 Years Warranty"},
  {icon:`${CDN}/69798387493c019bcbc17062_home_grid_icon_4.svg`,t:"Dedicated Expert Support"},
];

export function FeatureGrid() {
  return (
    <section className="section_features_icon" style={{backgroundImage:`url(${CDN}/69798387493c019bcbc170a6_features-bg.avif)`,backgroundPosition:"50%",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className="container-large padding-global py-5">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {features.map(f=>(
            <div key={f.t} className="reveal flex max-w-[20.625rem] flex-col items-center justify-center gap-5 text-center text-[#175a6b]">
              <img src={f.icon} alt={f.t} className="h-14 w-14" style={{width:"3.5rem",height:"3.5rem",minWidth:"3.5rem",minHeight:"3.5rem"}}/>
              <span className="text-lg font-bold">{f.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 2 — Choose Path ═══════════════════════ */
export function ChoosePath() {
  return (
    <section className="section_home-choose-path">
      <div className="container-large padding-global py-20">
        <p className="reveal mb-2 text-center text-sm font-semibold uppercase tracking-wider text-[#b2945e]">Select your path</p>
        <h2 className="reveal mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl">Where does your journey start?</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {[{href:"/family",img:`${CDN}/69798387493c019bcbc17064_choose_your_path_image_1.webp`,t:"For Family",s:"Protect what matters most.",l:"Explore Home Benefits"},{href:"/performance",img:`${CDN}/69798387493c019bcbc17077_choose_your_path_image_2.webp`,t:"For Performance",s:"Fuel your movement.",l:"Explore Sport Benefits"}].map(c=>(
            <Link key={c.t} href={c.href} className="group relative overflow-hidden rounded-[20px]">
              <img src={c.img} alt={c.t} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white">{c.t}</h3>
                <p className="mt-1 text-sm text-white/80">{c.s}</p>
                <span className="mt-3 inline-block text-sm font-bold text-[#b2945e]">{c.l} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 3 — PeakLiving Body ═══════════════════════ */
export function PeakLiving() {
  return (
    <section className="section_home-body-peakliving py-20 lg:py-28" style={{backgroundImage:`url(${CDN}/69798387493c019bcbc17078_body-peakspring.webp)`,backgroundPosition:"50% 0",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className="container-large padding-global">
        <h2 className="reveal mb-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Hydration designed for your biology.</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <img src={`${CDN}/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif`} alt="" className="reveal h-full w-full rounded-[20px] object-cover"/>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[#5d6c7b] sm:text-lg">Your body is up to 70% water. But not all water performs equally. To fuel energy production and cellular repair, water needs to be absorbed efficiently at the cellular level. Factors like molecular hydrogen content, electrical charge, and mineral composition all influence how well your body can actually use the water you drink.</p>
            <p className="text-base leading-relaxed text-[#5d6c7b] sm:text-lg">Most tap and bottled water has been stripped of exactly these properties. Treated with chlorine, processed, and stored in plastic. What remains hydrates, but only on the surface. The ionizer restores what processing strips away: hydrogen rich water with a negative electrical charge that acts as a natural antioxidant, paired with essential minerals your body can absorb at the cellular level.</p>
            <div className="grid grid-cols-2 gap-4">
              {[{icon:`${CDN}/699d90ee6e8bdc071fb0ad0b_Vector.svg`,t:"Sustain Cognitive Clarity"},{icon:`${CDN}/699d90ee3c6a83fb87c33c7f_Vector-1.svg`,t:"Defend Cellular Integrity"},{icon:`${CDN}/699d90ed6a5151c11d15216d_Group.svg`,t:"Restore Natural Structure"},{icon:`${CDN}/699d90edb451fb4d995a2a75_Group-1.svg`,t:"Build Daily Resilience"}].map(c=>(
                <div key={c.t} className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
                  <img src={c.icon} alt="" className="h-8 w-8 shrink-0"/>
                  <span className="text-sm font-semibold text-[#175a6b]">{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 4 — Features (Not just a device) ═══════════════════════ */
export function FeaturesSection() {
  const items = [
    {icon:`${CDN}/697b66349831f5d3ba44d102_features-icons-1.svg`,t:"Personalized 1-on-1 consultation",sub:"Calibration.",d:"We don't just ship a box. Our experts guide you through a setup tailored specifically to your local water quality and personal health goals."},
    {icon:`${CDN}/697b66f1e74a54d34111304e_features-icons-2.svg`,t:"Automated cleaning & alerts",sub:"Intelligent Purity.",d:"The ionizer monitors its own performance and guides you through every maintenance step, so your water stays pristine year after year."},
    {icon:`${CDN}/697b66f103c1f444c0b1072a_features-icons-3.svg`,t:"Plug-and-Play installation",sub:"Seamless Integration.",d:"Designed to fit into your kitchen without invasive plumbing. Our team assists in finding the right connection for your specific tap."},
    {icon:`${CDN}/697b66f1c7cc26e0245b9360_features-icons-4.svg`,t:"A higher standard",sub:"",d:"You choose the best in everything. Your water should be no different."},
  ];
  return (
    <section className="section_home-features py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            {items.map(f=>(
              <div key={f.t} className="reveal flex gap-4">
                <img src={f.icon} alt="" className="mt-1 h-9 w-9 shrink-0"/>
                <div>
                  <h4 className="font-bold text-[#175a6b]">{f.t}</h4>
                  {f.sub && <p className="text-sm italic text-[#b2945e]">{f.sub}</p>}
                  <p className="mt-1 text-sm leading-relaxed text-[#5d6c7b]">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#175a6b] sm:text-4xl">Not just a device.</h2>
            <h2 className="text-3xl font-bold tracking-tight text-[#175a6b] sm:text-4xl">A new way of living.</h2>
            <p className="text-base leading-relaxed text-[#5d6c7b] sm:text-lg">The machine is designed to be effortless. We handle the complexity of water chemistry so you can focus on the clarity of your day.</p>
            <a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#08303a] transition-colors shadow-lg">Book a Free Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 5 — pH Experience ═══════════════════════ */
export function PhExperience() {
  const [dragPos,setDragPos]=useState(0);
  const barRef=useRef<HTMLDivElement>(null);
  const levels=[
    {ph:"2.5",use:"Deep Sanitise",name:"Strong Acid - pH 2.5",text:"A hospital-grade disinfectant. Kills bacteria on hands, cutting boards, knives, and surfaces instantly without chemicals."},
    {ph:"6.0",use:"Surface Safe",name:"Mildly Acidic - pH 6.0",text:"A streak-free cleaner for glass, mirrors, and eyeglasses. Removes hard water stains without harsh ammonia."},
    {ph:"6.0",use:"Skin Toner",name:"Weak Acid - pH 6.0",text:"Matches the natural pH of your skin. Use as a facial mist to tighten pores and firm skin after washing."},
    {ph:"6.0",use:"Face Wash",name:"Gentle Wash - pH 6.0",text:"A non-stripping water for delicate skin. Perfect for washing your face in the morning to preserve natural oils."},
    {ph:"6.0",use:"Hair Shine",name:"Beauty Water - pH 6.0",text:"A natural alternative to conditioner. Rinsing hair with this water closes the cuticle, detangling strands."},
    {ph:"7.0",use:"Medication",name:"Absorption - pH 7.0",text:"Neutral water without alkaline properties, so your medication dissolves and absorbs as intended."},
    {ph:"7.0",use:"Baby Formula",name:"Neutral - pH 7.0",text:"Pure, filtered, and chemically neutral. Ideal for mixing formula to support proper nutrient absorption."},
    {ph:"7.0",use:"Pet Care",name:"Neutral - pH 7.0",text:"A gentle grooming rinse for pets. Neutralizes odors and soothes minor skin irritations or hot spots."},
    {ph:"8.5",use:"First Sip",name:"Acclimate - pH 8.5",text:"The starting level for hydrogen rich hydration. Drink this for the first two weeks to gently acclimate."},
    {ph:"9.0",use:"Daily Balance",name:"Active - pH 9.0",text:"The standard for daily drinking. Supports your body's alkaline balance and counteracts acidic foods."},
    {ph:"9.5",use:"Peak Hydration",name:"Optimal - pH 9.5",text:"High-antioxidant water for athletic recovery and deep cellular hydration. The gold standard for daily use."},
    {ph:"9.5",use:"Flavour Extract",name:"Tea & Coffee - pH 9.5",text:"Penetrates tea leaves and coffee beans deeper. Draws out richer flavor and aroma using less coffee or tea."},
    {ph:"11.5",use:"Eat Clean",name:"Strong Alkaline - 11.5",text:"A powerful emulsifier. Soak produce for 10 minutes to strip away oil-based pesticides, wax, and grime."},
    {ph:"11.5",use:"Meat & Fish",name:"Food Prep - pH 11.5",text:"Tenderizes meats and draws out gamey flavors from fish. Use as a soak before cooking to enhance texture."},
  ];
  const h=(cX:number)=>{if(!barRef.current)return;const r=barRef.current.getBoundingClientRect();setDragPos(Math.max(0,Math.min(cX-r.left,r.width)));};

  return (
    <section className="section_home-ph py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="reveal mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Purposeful pH.</h2>
        <p className="reveal mb-4 max-w-xl text-lg text-[#5d6c7b]">Water is not static. It is a spectrum of possibilities. Enagic® has pioneered this technology for over 50 years. PeakSpring brings it to your home.</p>
        <div className="reveal mb-10 flex gap-2 text-sm font-semibold text-[#b2945e]">
          <span className="rounded-full bg-[#b2945e]/10 px-4 py-1">Acidic</span>
          <span className="rounded-full bg-[#175a6b]/10 px-4 py-1">Neutral</span>
          <span className="rounded-full bg-[#175a6b]/10 px-4 py-1">Alkaline</span>
        </div>
        <div ref={barRef} className="reveal ph-gradient-bar relative mb-12 w-full cursor-pointer"
          onMouseDown={e=>h(e.clientX)} onTouchStart={e=>{const t=e.touches[0];if(t)h(t.clientX);}}>
          <div className="absolute top-0 flex h-full w-20 items-center justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm"
            style={{left:Math.max(0,Math.min(dragPos-41,(barRef.current?.getBoundingClientRect().width||1000)-82))}}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#175a6b]">⟷</div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map(l=>(
            <div key={l.name} className="reveal flex flex-col rounded-[20px] border border-gray-100 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
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

/* ═══════════════════════ SECTION 6 — Potential Slider ═══════════════════════ */
export function PotentialSlider() {
  const vids=[
    {t:"A Clean Foundation For Your Family",d:"Pesticide-free produce. Chemical-free cleaning. Microplastic-free drinking water. One machine protects it all."},
    {t:"Optimize Your Water",d:"You track sleep, recovery, and macros. But what about the water fuelling it all? Hydrate at the cellular level."},
    {t:"Reasons To Replace Tap Water",d:"No microplastics. No chlorine. Real cellular hydration, more energy, sharper focus."},
    {t:"My Personal Story",d:"Mother of two. One discovery changed everything from what her family drinks to how they cook and clean."},
    {t:"Return to Origin",d:"50 years of Japanese engineering. Born in Okinawa, one of the world's seven Blue Zones."},
    {t:"Remove pesticides from your produce",d:"Tap water can't touch oil-based pesticides. Ionized water strips them in minutes. See the difference."},
    {t:"Natural antioxidants",d:"Natural antioxidants in every glass. Strengthening their resilience, even on the days they skip their greens."},
    {t:"Water for every purpose",d:"Drink it. Cook with it. Clean with it. One system that adapts to every moment of your day."},
    {t:"True Hydration",d:"Your cells don't just need water. They need water small enough to enter. Discover how hydrogen changes everything."},
    {t:"One Machine. From Drinking to Cleaning.",d:"Made in Japan. Replaces your cleaning products, skincare, and bottled water all from one machine."},
    {t:"The Complete Source",d:"One device. Zero chemicals. Watch it replace an entire cabinet of cleaning products and remove pesticides."},
    {t:"Book Your Free Consultation",d:"Get your questions answered and discover what this machine can do for your daily life."},
    {t:"The Full Story in Five Minutes",d:"The origin. The technology. Every pH level and its purpose."},
  ];
  return (
    <section className="section_home-fuelling-potential-slider py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="reveal mb-1 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">We invite you to watch and</h2>
        <h2 className="reveal mb-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">learn more</h2>
        <Swiper modules={[Navigation,Pagination]} spaceBetween={24} slidesPerView="auto" loop pagination={{clickable:true}} navigation className="!pb-12">
          {vids.map(v=>(
            <SwiperSlide key={v.t} className="!w-[300px]">
              <div className="group cursor-pointer overflow-hidden rounded-[20px] bg-black">
                <div className="relative">
                  <img src={`${CDN}/69798387493c019bcbc170a6_features-bg.avif`} alt="" className="aspect-video w-full object-cover opacity-70 transition-opacity group-hover:opacity-90"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{v.t}</h3>
                  <p className="mt-1 text-sm text-white/60">{v.d}</p>
                  <span className="mt-2 inline-block text-sm text-[#b2945e]">Read more..</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 7 — Stacked Cards ═══════════════════════ */
export function StackedCards() {
  return (
    <section className="section_stacked-card py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="reveal mb-4 mx-auto max-w-[48rem] text-center text-4xl font-bold tracking-tight sm:text-5xl">How your tap water becomes hydrogen-rich water</h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {[{step:"01",title:"Step 1: Filtration",text:"Source water enters the internal high grade filter, a multi level system designed to prepare your water for electrolysis. Antibacterial granular activated carbon and calcium sulfite remove up to 95% of chlorine, volatile organic compounds, and sediment. What passes through is purified water, free from common contaminants but still rich in the essential minerals your body needs. Antibacterial granular activated carbon and calcium sulfite remove up to 95% of chlorine, volatile organic compounds, and sediment."},
            {step:"02",title:"Step 2: Electrolysis",text:"The filtered water moves through several electrode plates and membranes, separating into acidic and alkaline streams. The hydrogen ions react with electrons given by the cathode, forming H2, molecular hydrogen. This is the smallest and most bioavailable antioxidant molecule known to science."}].map((c,i)=>(
            <div key={c.step} className="reveal group relative overflow-hidden rounded-[20px] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow" style={{position:"sticky",top:`${i===0?22:27}rem`}}>
              <span className="text-6xl font-bold text-[#175a6b]/10">{c.step}</span>
              <h2 className="mt-2 text-2xl font-bold">{c.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#5d6c7b]">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 8 — Certificates ═══════════════════════ */
export function Certificates() {
  return (
    <section className="section_home-certificates py-20 lg:py-28 bg-gradient-to-b from-white to-[#f6fafb]/50">
      <div className="container-large padding-global">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <img src={`${CDN}/69798387493c019bcbc1709a_certificate_logo_3.webp`} alt="ISO 13485" className="mb-6 h-20 w-auto"/>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Medical Grade Purity. Certified Safety</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5d6c7b] sm:text-lg">True peace of mind comes from knowing exactly what is in your glass. The ionizer is rigorously tested to ensure every drop meets the highest standards of purity and performance.</p>
            <a href="/about-us" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#175a6b]/30 px-6 py-3 text-sm font-bold text-[#175a6b] hover:bg-[#175a6b]/5 transition-colors">Discover the Technology →</a>
          </div>
          <img src={`${CDN}/69798387493c019bcbc17082_performance_image.webp`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 9 — Antioxidant ═══════════════════════ */
export function Antioxidant() {
  return (
    <section className="section_home-features py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <img src={`${CDN}/69798387493c019bcbc17082_performance_image.webp`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
          <div className="reveal">
            <img src={`${CDN}/69798387493c019bcbc1709a_certificate_logo_3.webp`} alt="ISO 13485" className="mb-5 h-10 w-auto"/>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The Ultimate Antioxidant.</h2>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Liquid Immunity.</h2>
            <p className="mt-6 text-base leading-relaxed text-[#5d6c7b] sm:text-lg">Chronic inflammation is the silent adversary of longevity and the root cause of most modern diseases. Molecular hydrogen (H₂) is the smallest molecule in existence. It penetrates where other antioxidants cannot, reaching your cells at the deepest level. Backed by over 3,000 peer-reviewed studies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 10 — Performance System ═══════════════════════ */
export function PerformanceSystem() {
  return (
    <section className="section_home-performance py-20 lg:py-24 border-y border-gray-100">
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
        <div className="reveal mt-10 text-center">
          <a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#08303a] transition-colors shadow-lg">Book a Free Consultation</a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 11 — Benefits / Testimonials ═══════════════════════ */
export function BenefitsSlider() {
  const testimonials = [
    {q:"I never thought hydration could be a performance variable. Three weeks in, my recovery between sessions is noticeably faster and my resting heart rate dropped by 4 beats.",n:"Jessica, Athlete & Health Optimizer"},
    {q:"As a triathlete, I monitor every metric. Sleep, oxygen, recovery. Since installing the ionizer, my HRV has improved and I wake up feeling genuinely rested.",n:"Lucas, Hyrox Athlete"},
    {q:"Ironman racing is won or lost in recovery. I started using hydrogen-rich water six weeks out from my last race. I hit a PR by 18 minutes. The recovery was the difference.",n:"David, Ironman Athlete"},
  ];
  return (
    <section className="section_home-benefits py-20 lg:py-28 bg-[#f8fdff]">
      <div className="container-large padding-global">
        <Swiper modules={[Autoplay,EffectFade]} effect="fade" loop autoplay={{delay:5000}} pagination={{clickable:true,el:".benefits-pagination"}} className="!pb-12">
          {testimonials.map(t=>(
            <SwiperSlide key={t.n}>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xl italic leading-relaxed text-[#5d6c7b]">&quot;{t.q}&quot;</p>
                <p className="mt-4 font-semibold text-[#175a6b]">{t.n}</p>
                <a href="/contact" className="mt-6 inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors">Book a Free Consultation</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="benefits-pagination mt-6 flex justify-center gap-2"/>
      </div>
    </section>
  );
}

/* ═══════════════════════ SECTION 12 — FAQ ═══════════════════════ */
export function FaqAccordion() {
  const [open,setOpen]=useState<number|null>(0);
  const faqs=[
    {q:"What is hydrogen rich water and how is it different from filtered water?",a:"Standard filters are designed to take things out, like chlorine and sediment. Necessary, but only half the picture. The ionizer goes a step further by putting something back in: dissolved molecular hydrogen (H₂), the smallest and most bioavailable antioxidant in existence. H₂ selectively neutralizes harmful free radicals without interfering with your body's natural processes. Unlike reverse osmosis, this process preserves the essential minerals your body needs."},
    {q:"Is it backed by science?",a:"Molecular hydrogen is scientifically recognized as a selective antioxidant. It targets harmful free radicals like hydroxyl while leaving beneficial signaling molecules untouched. It has been recognized as safe (GRAS) by the FDA since 2014 and is supported by over 3,000 peer-reviewed publications. The ionizer is manufactured to ISO 13485 standards, the international certification for medical device manufacturing."},
    {q:"Why have I never heard of this before?",a:"Molecular hydrogen has been researched for decades and is supported by over 3,000 peer-reviewed publications. The FDA acknowledged it as safe in 2014. In Japan, this technology has been used in hospitals and homes for over 50 years. Europe is only now catching up."},
    {q:"How do I receive more information?",a:"We are happy to assist in the way that suits you best. Book a free consultation for a personal walkthrough via video call, or contact us directly on WhatsApp to get your questions answered. We are here to provide all the information you need."},
    {q:"Which support do I get from PeakSpring?",a:"PeakSpring is here from your first question to years after installation. We take the time to inform you, answer your questions, and help you understand what this machine can do for your daily life. After purchase, you receive personal guidance on installation, usage, and water quality, as well as access to our dedicated support team."},
    {q:"Does it interfere with my training adaptations?",a:"No, and this is one of the most important distinctions. High-dose antioxidant supplements like vitamin C and E can suppress the reactive oxygen species your body uses as a training signal, blunting the adaptation response. H₂ does not work this way. It selectively neutralizes only cytotoxic free radicals, leaving the signaling molecules that drive strength and endurance gains intact."},
  ];
  return (
    <section id="faq" className="section_faq py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="reveal mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h2>
        <p className="reveal mb-10 text-center text-lg text-[#5d6c7b]">Get answers to common questions about Peakspring and how our partnership can benefit your business.</p>
        <div className="mx-auto max-w-3xl">
          {faqs.map((item,i)=>(
            <div key={i} className="border-b border-gray-100">
              <button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-12 py-4 text-[1.25rem] font-medium leading-[2rem] transition-colors hover:text-[#b2945e]">
                {item.q}
                <span className="text-2xl text-[#b2945e] transition-transform duration-200" style={{transform:open===i?"rotate(45deg)":"rotate(0)"}}>+</span>
              </button>
              <div style={{height:open===i?"auto":0,opacity:open===i?1:0,overflow:"hidden",transition:"height 0.5s ease, opacity 0.3s ease"}}>
                <p className="pb-4 text-sm leading-relaxed text-[#5d6c7b]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 text-center">
          <a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors">Book a Free Consultation</a>
        </div>
      </div>
    </section>
  );
}