import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist – Office Space at Copperstone Executive Suites",
  description:
    "All office spaces at Copperstone Executive Suites are currently full. Join our waiting list to be first in line when a suite opens at our Land O' Lakes or South Tampa location.",
  alternates: { canonical: "https://copperstone.info/waitlist" },
  openGraph: {
    title: "Join the Waitlist | Copperstone Executive Suites",
    description:
      "Office spaces are full — join the waitlist and be first in line when space opens up.",
    url: "https://copperstone.info/waitlist",
  },
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Join the Waitlist" }]}
        />

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-amber-700 sm:text-[0.68rem]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Currently Full
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Join the Waiting List
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Due to high demand, all office spaces at both our Land O&apos; Lakes
            and South Tampa locations are currently occupied. Spaces open
            regularly — add your name to the list and we&apos;ll contact you as
            soon as something matching your needs becomes available.
          </p>
        </div>

        {/* ── Key info cards ── */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
            <p className="text-xs font-semibold text-slate-900">No commitment</p>
            <p className="mt-0.5 text-[0.68rem] text-slate-500">
              Joining the list is free and doesn&apos;t obligate you.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
            <p className="text-xs font-semibold text-slate-900">First come, first served</p>
            <p className="mt-0.5 text-[0.68rem] text-slate-500">
              We contact the list in order when space opens.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
            <p className="text-xs font-semibold text-slate-900">Still available now</p>
            <p className="mt-0.5 text-[0.68rem] text-slate-500">
              Virtual offices, meeting rooms &amp; coworking.
            </p>
          </div>
        </div>

        <WaitlistForm />

        {/* ── Available alternatives ── */}
        <section className="mt-10 rounded-2xl border border-[#c47a3a]/20 bg-[#fffaf5] p-5 sm:p-6">
          <p className="text-sm font-semibold text-slate-900">
            Need space right now?
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            While you wait for an office, these options are available immediately:
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <Link
              href="/office-space-for-rent"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-xs font-semibold text-slate-700 shadow-sm transition hover:border-[#c47a3a] hover:text-[#c47a3a]"
            >
              Virtual Office<br />
              <span className="font-normal text-slate-500">From $99/mo</span>
            </Link>
            <Link
              href="/meeting-space"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-xs font-semibold text-slate-700 shadow-sm transition hover:border-[#c47a3a] hover:text-[#c47a3a]"
            >
              Meeting Rooms<br />
              <span className="font-normal text-slate-500">From $49/hr</span>
            </Link>
            <Link
              href="/business-solutions"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-xs font-semibold text-slate-700 shadow-sm transition hover:border-[#c47a3a] hover:text-[#c47a3a]"
            >
              Business Solutions<br />
              <span className="font-normal text-slate-500">Full service hub</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
