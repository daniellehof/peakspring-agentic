import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const SECTIONS = [
  { t: "1. Website Use", b: "By using the PeakSpring website, you agree to these Terms of Service. Content is for general information purposes and subject to change without notice." },
  { t: "2. Orders and Payments", b: "All orders are subject to availability. Pricing and availability of products are subject to change. PeakSpring reserves the right to refuse or cancel any order." },
  { t: "3. Intellectual Property", b: "All content on this website, including text, graphics, logos, images, and software, is the property of PeakSpring and protected by intellectual property laws." },
  { t: "4. Limitation of Liability", b: "PeakSpring shall not be liable for any indirect, incidental, or consequential damages arising from use of, or inability to use, this website or our products." },
  { t: "5. Contact", b: "Questions about these Terms? Contact us at support@peakspring.nl or +31 30 207 2760." },
];

export default function TermsPage() {
  return (<><Navbar /><main><section className="bg-white"><div className="mx-auto max-w-3xl px-[3.75rem] py-20 lg:py-28">
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
    <p className="mt-2 text-sm text-[#5d6c7b]">Last updated: July 2026</p>
    <div className="mt-10 space-y-8 text-base leading-relaxed text-[#5d6c7b]">{SECTIONS.map(s => <section key={s.t}><h2 className="text-xl font-bold text-[#175a6b]">{s.t}</h2><p className="mt-2">{s.b}</p></section>)}</div>
  </div></section></main><Footer /></>);
}