"use client";

import { useEffect, useRef, useState } from "react";

// Webflow lightbox behavior: opens modal with Vimeo Embedly iframe
// Supports Escape, click-outside close, focus trap, body scroll lock

export function VideoLightbox({ videoUrl, trigger }: { videoUrl: string; trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
      return;
    }
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handler);
    // Focus the close button
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  // Build Vimeo embed URL
  const vimeoId = videoUrl.match(/vimeo\.com\/(\d+)/)?.[1];
  const embedUrl = vimeoId
    ? `https://player.vimeo.com/video/${vimeoId}?h=${videoUrl.split("/").pop()?.split("?")[0] || ""}&autoplay=1`
    : videoUrl;

  return (
    <>
      <button ref={triggerRef} onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </button>
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(false)} />
          <div ref={dialogRef} className="relative z-10 w-full max-w-4xl aspect-video mx-4">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-[#b2945e] transition-colors"
              aria-label="Close"
            >&times;</button>
            <iframe
              src={embedUrl}
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}