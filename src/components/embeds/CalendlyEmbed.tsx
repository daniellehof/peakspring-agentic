"use client";

import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
  minHeight?: string;
}

/**
 * Calendly inline embed.
 * Default URL can be overridden — update CALENDLY_URL env var or pass via prop.
 */
export function CalendlyEmbed({ url, className = "", minHeight = "700px" }: CalendlyEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const calendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/peakspring/consultation";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (ref.current && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: ref.current,
          prefill: {},
          utm: {},
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [calendlyUrl]);

  return (
    <div
      ref={ref}
      className={`calendly-inline-widget w-full rounded-[20px] overflow-hidden ${className}`}
      style={{ minHeight, minWidth: "320px" }}
      data-url={calendlyUrl}
    />
  );
}

/**
 * Floating Calendly button + popup — opens Calendly in a modal overlay.
 */
export function CalendlyPopup({ label = "Book a Free Consultation", url }: { label?: string; url?: string }) {
  const calendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/peakspring/consultation";

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors shadow-xl"
    >
      {label}
    </a>
  );
}