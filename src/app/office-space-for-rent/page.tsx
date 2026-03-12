import type { Metadata } from "next";
import Image from "next/image";

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

const accent = "#c47a3a";

export default function OfficeSpacePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]" style={{ ["--accent" as string]: accent }}>
        Office Space
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Office Space for Rent
      </h1>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Private executive offices and flexible workspace in Land O&apos; Lakes and South Tampa.
      </p>

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
          Offices are available at both our Land O&apos; Lakes and South Tampa locations.
          Availability and specific layouts vary, so the best next step is to schedule a tour.
        </p>

        <p className="mt-4 text-sm text-slate-700">
          To learn more about current office availability or to schedule a tour, use the Schedule a
          Tour form on our homepage or contact either location directly.
        </p>
        <p className="mt-2 text-sm text-slate-700">
          When you&apos;re ready,{" "}
          <a href="/#contact" className="font-semibold text-[#c47a3a] underline underline-offset-2">
            schedule a tour
          </a>{" "}
          so we can show you available offices and answer your questions in person.
        </p>
      </section>
    </main>
  );
}

