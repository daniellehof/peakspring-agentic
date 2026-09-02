"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative min-h-screen overflow-hidden">
      <img src="https://cdn.prod.website-files.com/69798387493c019bcbc16fc7/69798387493c019bcbc17063_home_footer_bg.webp" alt="" className="absolute inset-0 z-[1] h-full w-full object-cover"/>
      <div className="absolute inset-0 z-[1] bg-[#175a6b]/60"/>
      <div className="relative z-10 flex min-h-screen flex-col justify-end pb-12">
        <div className="mx-auto w-full max-w-[82.5rem] px-[3.75rem] pt-32">
          <div className="mb-10">
            <h2 className="max-w-[68rem] text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-7xl">You optimize everything. Now optimize your water.</h2>
            <a href="/contact" className="mt-8 inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors">Book a Free Consultation</a>
          </div>

          <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Discover</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/" className="block transition-colors hover:text-white">Home</Link>
                <Link href="/about-us" className="block transition-colors hover:text-white">About</Link>
                <Link href="/contact" className="block transition-colors hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Discover</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/family" className="block transition-colors hover:text-white">Family</Link>
                <Link href="/performance" className="block transition-colors hover:text-white">Performance</Link>
              </div>
            </div>
            <div>
              <div className="space-y-2 text-sm text-white/70 pt-7">
                <p>KvK 95242015</p>
                <Link href="/terms" className="block hover:text-white">Terms of Service</Link>
                <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
            © {new Date().getFullYear()} PeakSpring. All rights reserved. Digital experience by <a href="https://weblyfe.nl/" className="hover:text-white/60 underline">Weblyfe</a>
          </div>
        </div>
      </div>
    </footer>
  );
}