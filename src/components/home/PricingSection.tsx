import Link from "next/link";
import { PRICING, PHONE_SERVICES, formatPrice } from "@/content/pricing";

type Tier = {
  name: string;
  starting: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
  badge?: string;
};

const tiers: Tier[] = [
  {
    name: PRICING.virtualOffice.label,
    starting: formatPrice(PRICING.virtualOffice.startingPrice),
    period: `/${PRICING.virtualOffice.period}`,
    description: "Professional presence without the overhead",
    features: [
      "Professional business address",
      "Mail & package handling",
      "On-demand meeting room access",
      "Business credibility from day one",
    ],
    cta: "Learn More",
    href: "/office-space-for-rent",
    featured: false,
    badge: "Available",
  },
  {
    name: PRICING.executiveSuite.label,
    starting: formatPrice(PRICING.executiveSuite.startingPrice),
    period: `/${PRICING.executiveSuite.period}`,
    description: "Your private, client-ready office",
    features: [
      "Private, lockable office",
      "Reception & lobby presence",
      "High-speed internet included",
      "Utilities & coffee included",
      "Conference room access",
    ],
    cta: "Join the Waitlist",
    href: "/waitlist",
    featured: true,
    badge: "Waitlist Only",
  },
  {
    name: PRICING.meetingSpace.label,
    starting: formatPrice(PRICING.meetingSpace.startingPrice),
    period: `/${PRICING.meetingSpace.period}`,
    description: "Professional rooms for every occasion",
    features: [
      "Conference rooms for 2–20",
      "Presentation & AV equipment",
      "Event space available",
      "No membership required",
    ],
    cta: "View Rooms",
    href: "/meeting-space",
    featured: false,
    badge: "Available",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c47a3a]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="mt-16 lg:mt-20">
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
        Transparent Pricing
      </h2>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Workspace plans built for how you actually work.
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
        No hidden fees, no surprise charges. Every plan includes the essentials so you can focus on
        your business instead of your overhead.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${
              tier.featured
                ? "border-[#c47a3a] bg-[#fffaf5] shadow-[#a35f24]/10"
                : "border-slate-200 bg-white"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-4 rounded-full bg-[#c47a3a] px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-white">
                Most Popular
              </span>
            )}
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {tier.name}
              </p>
              {tier.badge && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide ${
                    tier.badge === "Waitlist Only"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {tier.badge}
                </span>
              )}
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-slate-900">
                {tier.starting}
              </span>
              <span className="text-sm text-slate-500">{tier.period}</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Starting from</p>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              {tier.description}
            </p>
            <ul className="mt-4 flex-1 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                tier.featured
                  ? "border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] text-white shadow-md shadow-[#a35f24]/40 hover:from-[#edba85] hover:to-[#a35f24]"
                  : "border border-slate-300 bg-white text-slate-800 hover:border-[#c47a3a] hover:text-[#8a4f3d]"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* ── Phone Services Add-On ── */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f3c89a]/20">
              <svg
                className="h-6 w-6 text-[#c47a3a]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-slate-900">
                  {PHONE_SERVICES.label}
                </p>
                <span className="rounded-full bg-[#f3c89a]/30 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide text-[#a35f24]">
                  Add-On
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {PHONE_SERVICES.tagline}. {PHONE_SERVICES.shortDescription}.
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {PHONE_SERVICES.features.slice(0, 4).map((f) => (
                  <span key={f} className="flex items-center gap-1 text-[0.68rem] text-slate-600">
                    <CheckIcon />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="shrink-0 text-center sm:text-right">
            <div className="flex items-baseline justify-center gap-1 sm:justify-end">
              <span className="text-2xl font-semibold text-slate-900">
                {formatPrice(PHONE_SERVICES.pricePerUser)}
              </span>
              <span className="text-xs text-slate-500">/user/mo</span>
            </div>
            <p className="mt-0.5 text-[0.62rem] text-slate-500">
              {PHONE_SERVICES.volumeNote}
            </p>
            <Link
              href="/#contact"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-5 py-2 text-xs font-semibold text-white shadow-md shadow-[#a35f24]/40 transition hover:from-[#edba85] hover:to-[#a35f24]"
            >
              Add to Your Plan
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[0.68rem] text-slate-500">
        Prices vary by location, suite size, and term length. Phone Services billed per enabled user.{" "}
        <Link href="/#contact" className="font-semibold text-[#c47a3a] underline underline-offset-2">
          Contact us for a custom quote.
        </Link>
      </p>
    </section>
  );
}
