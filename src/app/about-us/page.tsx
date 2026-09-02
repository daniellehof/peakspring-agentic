import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export default function AboutPage() {
  return (<><Navbar /><main>
    <section className="bg-gradient-to-b from-[#f6fafb]/50 to-white py-24 lg:py-32"><div className="mx-auto max-w-[82.5rem] px-[3.75rem]">
      <span className="inline-flex rounded-full border border-[#175a6b]/20 bg-[#175a6b]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#175a6b]">About Us</span>
      <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">We founded PeakSpring to answer a simple question.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5d6c7b] sm:text-xl">Why do we treat water, our most essential source, as an afterthought? We exist to change that. Bringing hydrogen rich water, engineered to medical grade standards, into the heart of your home.</p>
    </div></section>
    <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[82.5rem] px-[3.75rem]"><div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why We Chose Enagic</h2><p className="mt-4 text-base leading-relaxed text-[#5d6c7b] sm:text-lg">We chose Enagic® because they own their entire production process. Over 50 years of Japanese engineering, based in Okinawa — a Blue Zone. Every device is ISO 13485 certified with a 27-step quality inspection. One machine, multiple pH levels, 60+ purposes, built to last 15–25 years.</p></div>
      <img src="https://cdn.prod.website-files.com/69798387493c019bcbc16fc7/697b5a04c607c257835b9a2e_8820d0e03c252420f0e6817d5a6a40fa_features-image.avif" alt="" className="w-full rounded-[20px] object-cover shadow-lg" />
    </div></div></section>
  </main><Footer /></>);
}