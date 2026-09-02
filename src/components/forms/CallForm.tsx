"use client";

export function CallForm() {
  return (
    <div className="mx-auto mt-10 max-w-lg rounded-[20px] border border-gray-100 bg-[#fafafa] p-8">
      <form className="space-y-5" onSubmit={e => e.preventDefault()}>
        <input placeholder="Full name*" required className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]" />
        <input type="email" placeholder="Email Address*" required className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]" />
        <input type="tel" placeholder="Phone number*" required className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]" />
        <textarea placeholder="What would you like to discuss?" rows={3} className="w-full rounded-[16px] border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#175a6b]" />
        <button type="submit" className="w-full rounded-[4.5rem] bg-[#b2945e] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#9a7c4a] transition-colors">Request Consultation</button>
      </form>
    </div>
  );
}