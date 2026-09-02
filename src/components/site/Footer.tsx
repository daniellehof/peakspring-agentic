"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative min-h-screen overflow-hidden">
      <img
        src="/source-assets/69798387493c019bcbc17063_home_footer_bg.webp"
        alt=""
        className="absolute inset-0 z-[1] h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-[#175a6b]/60" />

      <div className="relative z-10 flex min-h-screen flex-col justify-end pb-12">
        <div className="mx-auto w-full max-w-[82.5rem] px-[3.75rem] pt-32">
          <div className="mb-10">
            <h2 className="max-w-[68rem] text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-7xl">
              You optimize everything.<br />Now optimize your water.
            </h2>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors"
            >
              Book a Free Consultation
            </a>
            <p className="mt-4 text-sm text-white/60">No commitment. We'll help you figure out what's right for you.</p>
          </div>

          <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src="/source-assets/69798387493c019bcbc17034_logo.webp" alt="PeakSpring" className="mb-4 h-10 w-auto" />
              <p className="text-sm leading-relaxed text-white/60">Medical-grade hydrogen-rich water ionizers. Designed in the Netherlands.</p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Pages</h4>
              <div className="space-y-2 text-sm text-white/70">
                {["Home","About","Performance","Family"].map(l => (
                  <Link key={l} href={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="block transition-colors hover:text-white">{l}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Support</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/contact" className="block hover:text-white">Contact</Link>
                <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-white">Terms of Service</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>support@peakspring.nl</p>
                <p>+31 30 207 2760</p>
                <p className="text-white/40">Mon–Fri: 9:00–18:00 CET</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
            © {new Date().getFullYear()} PeakSpring. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}