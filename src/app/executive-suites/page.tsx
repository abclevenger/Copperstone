import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Executive Suites for Rent in Land O' Lakes & South Tampa",
  description:
    "Private, lockable executive suites with lobby reception, professional presence, and flexible lease terms in Land O' Lakes and South Tampa, FL.",
  alternates: { canonical: "https://copperstone.info/executive-suites" },
  openGraph: {
    title: "Executive Suites | Copperstone Executive Suites",
    description:
      "Private, lockable executive suites with lobby reception and flexible lease terms in Land O' Lakes and South Tampa, FL.",
    url: "https://copperstone.info/executive-suites",
    images: [{ url: "/Executive-Offices-for-Rent-Land-O-Lakes.jpg", width: 1200, height: 630 }],
  },
};

export default function ExecutiveSuitesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Executive Suites" }]} />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
        Executive Suites
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Executive Suites
      </h1>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Private offices in a professional setting, with amenities included so you can focus on your business.
      </p>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <svg className="h-5 w-5 shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <p className="text-sm font-semibold text-amber-900">
            All executive suites are currently occupied.
          </p>
          <p className="mt-0.5 text-xs text-amber-700">
            Join our waiting list to be first in line when a suite opens up.{" "}
            <a href="/waitlist" className="font-semibold underline underline-offset-2 hover:text-amber-900">
              Join the waitlist →
            </a>
          </p>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src="/Executive-Offices-for-Rent-Land-O-Lakes.jpg"
          alt="Executive office suite at Copperstone Executive Suites"
          width={1024}
          height={506}
          className="h-full w-full object-cover"
        />
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-sm">
        <p>
          Our executive suites are designed for professionals and growing companies who want a
          dedicated office in a shared business environment. You get the privacy of your own space
          with the benefits of shared conference rooms, lobby, and amenities.
        </p>

        <h2 className="mt-5 text-base font-semibold text-slate-900">
          Highlights
        </h2>
        <ul className="mt-2 space-y-1.5 text-sm">
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Private, lockable office with 24/7 access (where available)</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Shared reception area and lobby for greeting guests</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Access to conference rooms, meeting rooms, and event space</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>High-speed internet, utilities, and coffee included</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Professional business address in Land O&apos; Lakes or South Tampa</span>
          </li>
        </ul>

        <div className="mt-4 rounded-2xl border border-[#c47a3a]/30 bg-[#fffaf5] p-4">
          <p className="text-sm font-semibold text-slate-900">
            Join the Waiting List
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            All suites are currently full due to high demand. Openings happen regularly —
            join the waitlist and we&apos;ll reach out as soon as a suite becomes available.
            We can also schedule a tour so you&apos;re ready to move in quickly.
          </p>
          <a
            href="/waitlist"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
          >
            Join the Waitlist
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Virtual office plans, meeting rooms, and coworking access are still available while you wait.{" "}
          <a href="/meeting-space" className="font-semibold text-[#c47a3a] underline underline-offset-2">
            View meeting space →
          </a>
        </p>
      </section>
    </main>
  );
}


