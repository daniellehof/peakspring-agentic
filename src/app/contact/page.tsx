import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FaqAccordion } from "@/components/site/HomeSections";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (<><Navbar /><main>
    <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[82.5rem] px-[3.75rem]"><div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div><span className="inline-flex rounded-full border border-[#175a6b]/20 bg-[#175a6b]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#175a6b]">Contact</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Send Us a Message</h1>
        <p className="mt-4 text-base text-[#5d6c7b]">Fill out the form and we'll get back to you within 24 hours.</p>
        <ContactForm />
      </div>
      <div className="space-y-8"><div className="rounded-[20px] border border-gray-100 bg-[#fafafa] p-6"><h3 className="font-bold">Contact Information</h3><p className="mt-2 text-sm text-[#5d6c7b]">Reach out through your preferred channel</p><div className="mt-4 space-y-2 text-sm"><p><strong>Email:</strong> support@peakspring.nl</p><p><strong>Phone:</strong> +31 30 207 2760</p><p className="text-xs text-[#5d6c7b]/70">Mon–Fri: 9:00–18:00 CET</p></div></div></div>
    </div></div></section>
    <FaqAccordion />
  </main><Footer /></>);
}