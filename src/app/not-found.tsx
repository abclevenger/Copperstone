import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
      <Image
        src="/logo trans.svg"
        alt="Copperstone Executive Suites"
        width={180}
        height={48}
        className="mb-8 h-12 w-auto opacity-60"
      />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
        404
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
        >
          Back to Homepage
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d]"
        >
          Schedule a Tour
        </Link>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
        <Link href="/office-space-for-rent" className="hover:text-[#c47a3a]">
          Office Space
        </Link>
        <span className="text-slate-300">|</span>
        <Link href="/meeting-space" className="hover:text-[#c47a3a]">
          Meeting Space
        </Link>
        <span className="text-slate-300">|</span>
        <Link href="/faqs" className="hover:text-[#c47a3a]">
          FAQs
        </Link>
        <span className="text-slate-300">|</span>
        <Link href="/contact" className="hover:text-[#c47a3a]">
          Contact
        </Link>
      </div>
    </main>
  );
}
