"use client";

import { PhoneField } from "@/components/forms/PhoneField";

export function ContactForm() {
  return (
    <form className="mt-8 space-y-5" onSubmit={e => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <input placeholder="First name*" required className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]" />
        <input placeholder="Last name*" required className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]" />
      </div>
      <input type="email" placeholder="Email Address" required className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]" />
      <PhoneField required />
      <textarea placeholder="Message*" required rows={4} className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]" />
      <label className="flex items-center gap-2 text-sm text-[#5d6c7b]"><input type="checkbox" className="accent-[#175a6b]" /> Yes, I'd like to receive news and updates by email</label>
      <button type="submit" className="rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#08303a] transition-colors">Send Message</button>
    </form>
  );
}