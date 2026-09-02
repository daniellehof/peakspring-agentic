"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/performance", label: "Performance" },
  { href: "/family", label: "Family" },
  { href: "/#faq", label: "FAQs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled(y > 100);
          // Hide on scroll down, show on scroll up (matches live nav behavior)
          if (menuOpen) return;
          if (y > lastScroll && y > 200) setVisible(false);
          else if (y < lastScroll) setVisible(true);
          setLastScroll(y);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll, menuOpen]);

  const textColor = scrolled ? "text-[#175a6b]" : "text-white";

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(248, 253, 255, 0.98)" : "transparent",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[82.5rem] items-center justify-between px-[3.75rem]">
        <Link href="/" className="mr-auto flex w-[11.1875rem] items-center gap-2">
          <img
            src="/source-assets/69798387493c019bcbc17034_logo.webp"
            alt="PeakSpring logo"
            className="h-10 w-auto shrink-0"
          />
          <div className="flex flex-col leading-tight">
            <span className={`text-sm font-semibold ${textColor}`}>PeakSpring</span>
            <span className={`text-[10px] font-light ${scrolled ? "text-[#175a6b]/60" : "text-white/60"}`}>
              Rethink water
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 text-sm font-semibold opacity-80 transition-opacity hover:opacity-100 ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-1 flex items-center gap-2">
          <a href="/contact" className="rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hidden sm:inline-flex hover:bg-[#9a7c4a] transition-colors">
            Book a call
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-12 w-12 flex-col items-center justify-center gap-[6px] md:hidden ${textColor}`}
          >
            <span
              className="block h-[2px] w-6 rounded-full bg-current transition-all duration-300"
              style={menuOpen ? { transform: "rotate(45deg) translate(5px, -6px)" } : {}}
            />
            <span
              className="block h-[2px] w-6 rounded-full bg-current transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block h-[2px] w-6 rounded-full bg-current transition-all duration-300"
              style={menuOpen ? { transform: "rotate(-45deg) translate(-12px, -1px)" } : {}}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="overflow-hidden bg-[#175a6b]/95 backdrop-blur transition-all duration-300 md:hidden"
        style={{ height: menuOpen ? "auto" : 0 }}
      >
        <div className="flex flex-col px-6 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-white/80 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}