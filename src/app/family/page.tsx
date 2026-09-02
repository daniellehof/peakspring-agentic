import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FeatureGrid, BenefitsSlider, FaqAccordion } from "@/components/site/HomeSections";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";

const CDN = "https://cdn.prod.website-files.com/69798387493c019bcbc16fc7";
const CMS = "https://cdn.prod.website-files.com/69798387493c019bcbc16fd5";

export default function FamilyPage() {
  return (<><Navbar /><main>
    {/* Hero */}
    <div className="relative z-0 flex h-svh min-h-svh flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={`${CDN}/69798387493c019bcbc17058_home-hero.webp`} alt="" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-[#175a6b]/65"/>
      </div>
      <div className="relative z-[2] mx-auto mb-[4.6875rem] w-full max-w-[60.1875rem] px-[3.75rem]">
        <h1 className="text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white"><span className="is-heading-style">Nourish </span>what matters</h1>
        <p className="mt-2 max-w-[39.375rem] text-base leading-relaxed text-white/85 sm:text-lg">Water is the foundation of your family's health. Most tap water has been stripped of what makes it truly hydrating. PeakSpring restores water to its natural, living state. Hydrogen-rich water engineered to ISO 13485 medical device standards, tailored to protect what matters most.</p>
        <div className="mt-[0.6875rem] mb-6 flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-2 text-sm font-medium text-white/90">100K+ people already made the switch.</span>
          <span className="flex items-center gap-2 text-sm font-medium text-white/90 border-l border-white/20 pl-4">Protect Your Family's Health</span>
        </div>
        <a href="/contact" className="inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors shadow-xl">Book a Free Consultation</a>
      </div>
    </div>

    <FeatureGrid />

    {/* Why filtered water isn't enough */}
    <section className="section_why-filter py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="reveal text-4xl font-bold tracking-tight sm:text-5xl">Why filtered water isn't enough</h2>
            <p className="text-base leading-relaxed text-[#5d6c7b]">Standard filters are excellent at removing impurities, but that is only half the picture. Most filtration strips away essential minerals while leaving behind microplastics that pass straight through standard filter pores. The ionizer does both: it filters, then enriches. Hydrogen rich, mineral rich water that supports hydration at the deepest level.</p>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b2945e]">The Lifecycle Impact</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f8fdff] p-5 border border-gray-100">
                <h4 className="font-bold text-[#175a6b]">For Growing Minds</h4>
                <p className="mt-2 text-sm text-[#5d6c7b]">Children need more than just fluids. Hydrogen rich, mineral rich water supports hydration at the deepest level, without the sugar, additives, or plastic of bottled alternatives.</p>
              </div>
              <div className="rounded-2xl bg-[#f8fdff] p-5 border border-gray-100">
                <h4 className="font-bold text-[#175a6b]">For Active Longevity</h4>
                <p className="mt-2 text-sm text-[#5d6c7b]">Keep your natural vitality high. Hydrogen rich water supports cognitive clarity, sustained energy, and overall wellbeing as the years go on.</p>
              </div>
            </div>
          </div>
          <img src={`${CDN}/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
        </div>
      </div>
    </section>

    {/* Not just a device. A foundation for daily health */}
    <section className="section_home-features is-color-secondary py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal space-y-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Not just a device. A foundation for <span className="text-[#b2945e]">daily health</span></h2>
            <p className="text-base leading-relaxed text-[#5d6c7b]">Enjoy pure, living water without the worry. We provide the technology and support to ensure your family is protected for decades.</p>
            {[{icon:`${CDN}/697b66349831f5d3ba44d102_features-icons-1.svg`,t:"Personalized 1-on-1 consultation",d:"Our team walks you through a setup tailored to your local water quality and your family's daily needs."},
              {icon:`${CDN}/697b66f1e74a54d34111304e_features-icons-2.svg`,t:"Automated cleaning & alerts",d:"The ionizer monitors its own performance and guides you through every maintenance step, so your water stays pristine year after year."},
              {icon:`${CDN}/69798387493c019bcbc17062_home_grid_icon_4.svg`,t:"Dedicated Expert Support",d:"Our team is here from your first question to years after installation. We guide you through every step."}].map(f=>(
              <div key={f.t} className="flex gap-4">
                <img src={f.icon} alt="" className="mt-1 h-9 w-9 shrink-0"/>
                <div>
                  <h4 className="font-bold text-[#175a6b]">{f.t}</h4>
                  <p className="mt-1 text-sm text-[#5d6c7b]">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
          <img src={`${CDN}/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
        </div>
      </div>
    </section>

    {/* One source. Endless purpose — full pH section */}
    <section className="section_home-ph py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="reveal mb-4 text-4xl font-bold tracking-tight sm:text-5xl">One source. Endless purpose.</h2>
        <p className="reveal mb-4 max-w-xl text-lg text-[#5d6c7b]">Water changes its properties as the pH shifts. Alkaline hydrogen rich water for drinking, natural antioxidants to strengthen the body. Every pH level has its own purpose.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[{ph:"2.5",use:"Deep Sanitise",name:"Strong Acid - pH 2.5",text:"A hospital-grade disinfectant. Kills bacteria on hands, cutting boards, knives, and surfaces instantly."},
            {ph:"6.0",use:"Surface Safe",name:"Mildly Acidic - pH 6.0",text:"A streak-free cleaner for glass, mirrors, and eyeglasses. Removes hard water stains without harsh ammonia."},
            {ph:"7.0",use:"Baby Formula",name:"Neutral - pH 7.0",text:"Pure, filtered, and chemically neutral. Ideal for mixing formula to support proper nutrient absorption."},
            {ph:"11.5",use:"Eat Clean",name:"Strong Alkaline - 11.5",text:"A powerful emulsifier. Soak produce for 10 minutes to strip away oil-based pesticides, wax, and grime."}].map(l=>(
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

    {/* We didn't invent water. We just restored it */}
    <section className="section_home-features py-20 lg:py-28">
      <div className="container-large padding-global">
        <div className="grid gap-12 lg:grid-cols-2">
          <img src={`${CDN}/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
          <div className="reveal space-y-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">We didn't invent water. We just <span className="text-[#b2945e]">restored it</span></h2>
            <p className="text-base leading-relaxed text-[#5d6c7b]">Standard tap water cannot remove oil based pesticides from your produce. The ionizer produces strong alkaline water (pH 11.5) that emulsifies these pesticides on contact. Invest in a medical-grade ecosystem that protects your home for decades.</p>
            <div className="grid grid-cols-3 gap-4">
              {[{icon:`${CDN}/69798387493c019bcbc17061_home_grid_icon_2.svg`,t:"ISO 13485 Medical Certification"},
                {icon:`${CDN}/697b66f1c7cc26e0245b9360_features-icons-4.svg`,t:"Access to our community"},
                {icon:`${CDN}/69798387493c019bcbc17080_truth_icon_3.svg`,t:"Chemical-Free household"}].map(c=>(
                <div key={c.t} className="flex flex-col items-center gap-2 rounded-xl bg-[#fafafa] p-4 text-center shadow-sm">
                  <img src={c.icon} alt="" className="h-8 w-8"/>
                  <span className="text-xs font-semibold text-[#175a6b]">{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Essential Hydration to Support Your Growing Family — Video slider */}
    <section className="section_home-fuelling-potential-slider py-20 lg:py-28">
      <div className="container-large padding-global">
        <h2 className="reveal mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Essential Hydration to Support Your Growing Family</h2>
        <Swiper modules={[Navigation,Pagination]} spaceBetween={24} slidesPerView="auto" loop pagination={{clickable:true}} navigation className="!pb-12">
          {[
            {t:"The Full Story in Five Minutes",img:`${CMS}/69b2f91760aee78458574a06_699d26188ec347d509d70d7a_EP_20251113_4012.png`,d:"The origin. The technology. Every pH level and its purpose."},
            {t:"Book Your Free Consultation",img:`${CMS}/6a2d2256dc09561caec90657_69b719e387bfbb64aef9f092_EP_20251113_3986.jpeg`,d:"Get your questions answered and discover what this machine can do for your daily life."},
            {t:"The Complete Source",img:`${CMS}/6a2d22576792d9efde48bea7_69b71f48d9baa13733feca65_u2596555278_Photorealistic_advertising_image_.jpeg`,d:"One device. Zero chemicals. Watch it replace an entire cabinet of cleaning products and remove pesticides."},
            {t:"True Hydration",img:`${CMS}/6a2d2259169b3836cba9247b_69b718f9fae37cf37a520604_image%20481.png`,d:"Your cells don't just need water. They need water small enough to enter."},
            {t:"Water for every purpose",img:`${CMS}/6a2d225a6792d9efde48c2da_69b717a33d3c647af0cecbf9_Gemini_Generated.png`,d:"Drink it. Cook with it. Clean with it. One system for every moment."},
            {t:"Return to Origin",img:`${CMS}/6a2d225d95e473b91674184a_69b7236853b98c89ac2a68fe_evaeva7103_a_father_and_son_sitting_under_an_.jpeg`,d:"50 years of Japanese engineering. Born in Okinawa, one of the world's seven Blue Zones."},
          ].map(v=>(
            <SwiperSlide key={v.t} className="!w-[300px]">
              <div className="group cursor-pointer overflow-hidden rounded-[20px] bg-black">
                <div className="relative">
                  <img src={v.img} alt="" className="aspect-video w-full object-cover opacity-70 transition-opacity group-hover:opacity-90"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{v.t}</h3>
                  <p className="mt-1 text-sm text-white/60">{v.d}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    {/* Medical Grade Purity. Certified Safety */}
    <section className="section_home-certificates py-20 lg:py-28 bg-gradient-to-b from-white to-[#f6fafb]/50">
      <div className="container-large padding-global">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Medical Grade Purity. Certified Safety</h2>
            <p className="mt-6 text-base leading-relaxed text-[#5d6c7b]">True peace of mind comes from knowing exactly what is in your glass. The ionizer is rigorously tested and manufactured to ISO 13485 standards, the international certification for medical device manufacturing.</p>
            <Link href="/about-us" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#175a6b]/30 px-6 py-3 text-sm font-bold text-[#175a6b] hover:bg-[#175a6b]/5 transition-colors">Discover the Technology →</Link>
          </div>
          <img src={`${CDN}/69798387493c019bcbc1709a_certificate_logo_3.webp`} alt="" className="reveal mx-auto max-h-60 w-auto"/>
        </div>
      </div>
    </section>

    {/* Bring the vitality of a natural spring home */}
    <section className="section_home-performance py-20 lg:py-28 border-y border-gray-100">
      <div className="container-large padding-global">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Bring the vitality of a natural spring home</h2>
            <p className="mt-6 text-base leading-relaxed text-[#5d6c7b]">This is more than a machine. It is a long term investment in your family's daily health. We bring Japanese medical-grade technology directly to your kitchen tap, so your family drinks living water, every single day.</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[{t:"Plan Your Home Ecosystem"},{t:"Personalized Family Setup"},{t:"Lifetime Expert Support"},{t:"Integrated in Your Daily Routine"}].map((item,i)=>(
                <div key={item.t} className="rounded-[20px] border border-gray-100 bg-[#fafafa] p-5 text-center hover:-translate-y-1 transition-all">
                  <span className="text-3xl font-bold text-[#175a6b]/10">{i+1}</span>
                  <p className="mt-1 font-semibold text-sm">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={`${CDN}/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif`} alt="" className="reveal w-full rounded-[20px] object-cover shadow-lg"/>
        </div>
      </div>
    </section>

    <BenefitsSlider />
    <FaqAccordion />
  </main><Footer /></>);
}