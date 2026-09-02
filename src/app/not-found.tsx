import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-6xl font-black text-[#175a6b]/20">404</h1>
      <p className="text-lg text-[#5d6c7b]">This page doesn't exist.</p>
      <Link href="/" className="rounded-[4.5rem] bg-[#175a6b] px-5 py-3 text-[1.0625rem] font-semibold text-white hover:bg-[#08303a] transition-colors">Back to Home</Link>
    </main>
  );
}