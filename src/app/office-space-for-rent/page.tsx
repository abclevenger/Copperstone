import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Office Space for Rent in Land O' Lakes & South Tampa",
  description:
    "Rent private executive office space in Land O' Lakes and South Tampa, FL. Flexible terms, professional reception, high-speed internet, and premium amenities included.",
  alternates: { canonical: "https://copperstone.info/office-space-for-rent" },
  openGraph: {
    title: "Office Space for Rent | Copperstone Executive Suites",
    description:
      "Rent private executive office space in Land O' Lakes and South Tampa, FL. Flexible terms, professional reception, and premium amenities included.",
    url: "https://copperstone.info/office-space-for-rent",
    images: [{ url: "/Executive-Offices-for-Rent-Land-O-Lakes.jpg", width: 1200, height: 630 }],
  },
};

export default function OfficeSpacePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Office Space" }]} />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
        Office Space
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Office Space for Rent
      </h1>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Private executive offices and flexible workspace in Land O&apos; Lakes and South Tampa.
      </p>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <svg className="h-5 w-5 shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <p className="text-sm font-semibold text-amber-900">
            Office spaces are currently full at both locations.
          </p>
          <p className="mt-0.5 text-xs text-amber-700">
            We maintain a waiting list and will contact you as soon as space opens up.{" "}
            <a href="/waitlist" className="font-semibold underline underline-offset-2 hover:text-amber-900">
              Join the waitlist →
            </a>
          </p>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src="/Executive-Offices-for-Rent-Land-O-Lakes.jpg"
          alt="Executive office at Copperstone Executive Suites"
          width={1024}
          height={506}
          className="h-full w-full object-cover"
        />
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-sm">
        <p>
          Copperstone Executive Suites offers professional office space that helps you move beyond
          the limitations of a home office or busy coffee shop. Our executive suites provide a
          private, lockable office with access to shared amenities and on-site support.
        </p>

        <div className="mt-4 grid gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-700 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">Ideal for</p>
            <p>Solo professionals, small firms, and private practices.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Typical terms</p>
            <p>Flexible agreements with options for longer-term savings.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Tenant perks</p>
            <p>Discounts on meeting rooms and event space.</p>
          </div>
        </div>

        <h2 className="mt-5 text-base font-semibold text-slate-900">
          What&apos;s Included
        </h2>
        <ul className="mt-2 space-y-1.5 text-sm">
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Private, lockable offices in a professional setting</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Reception and lobby presence for you and your guests</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Access to conference rooms and meeting space</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>High-speed internet, utilities, and free-flowing coffee included</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Convenient parking and easy access for clients</span>
          </li>
        </ul>

        <h2 className="mt-5 text-base font-semibold text-slate-900">
          Locations
        </h2>
        <p className="mt-2">
          We have two locations in Land O&apos; Lakes and South Tampa. Due to high demand,
          office spaces at both locations are currently full.
        </p>

        <div className="mt-4 rounded-2xl border border-[#c47a3a]/30 bg-[#fffaf5] p-4">
          <p className="text-sm font-semibold text-slate-900">
            Join the Waiting List
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            Spaces open regularly as businesses grow and relocate. Get on our waiting list
            and be the first to know when an office becomes available. We&apos;ll also schedule
            a tour so you&apos;re ready to move quickly when the time comes.
          </p>
          <a
            href="/waitlist"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
          >
            Join the Waitlist
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          In the meantime, our virtual office plans, meeting rooms, and coworking memberships
          remain available.{" "}
          <a href="/meeting-space" className="font-semibold text-[#c47a3a] underline underline-offset-2">
            View meeting space →
          </a>
        </p>
      </section>
    </main>
  );
}

