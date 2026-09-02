import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CallForm } from "@/components/forms/CallForm";

export default function CallPage() {
  return (<><Navbar /><main>
    <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[82.5rem] px-[3.75rem] text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Book a Free Consultation</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-[#5d6c7b]">Fill out the form below and we'll reach out to schedule your personal consultation.</p>
      <CallForm />
    </div></section>
  </main><Footer /></>);
}