import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const SECTIONS = [
  { t: "1. Information We Collect", b: "PeakSpring collects personal information you voluntarily provide when you contact us, book a consultation, or communicate with us. This may include your name, email, phone number." },
  { t: "2. How We Use Your Information", b: "We use your personal information to respond to inquiries, schedule consultations, provide our services, send product updates, and improve your experience." },
  { t: "3. Data Security", b: "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction." },
  { t: "4. Your Rights", b: "Under the GDPR, you have the right to access, correct, delete, or restrict processing of your personal data. Contact us at support@peakspring.nl to exercise these rights." },
  { t: "5. Contact", b: "Questions? Contact us at support@peakspring.nl or +31 30 207 2760." },
];

export default function PrivacyPage() {
  return (<><Navbar /><main><section className="bg-white"><div className="mx-auto max-w-3xl px-[3.75rem] py-20 lg:py-28">
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
    <p className="mt-2 text-sm text-[#5d6c7b]">Last updated: July 2026</p>
    <div className="mt-10 space-y-8 text-base leading-relaxed text-[#5d6c7b]">{SECTIONS.map(s => <section key={s.t}><h2 className="text-xl font-bold text-[#175a6b]">{s.t}</h2><p className="mt-2">{s.b}</p></section>)}</div>
  </div></section></main><Footer /></>);
}