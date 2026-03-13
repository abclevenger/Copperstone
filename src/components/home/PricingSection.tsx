import Link from "next/link";

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
    name: "Virtual Office",
    starting: "$99",
    period: "/mo",
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
    name: "Executive Suite",
    starting: "$499",
    period: "/mo",
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
    name: "Meeting Space",
    starting: "$49",
    period: "/hr",
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
                <span className={`rounded-full px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide ${
                  tier.badge === "Waitlist Only"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}>
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
            <p className="mt-3 text-xs leading-relaxed text-slate-600">{tier.description}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-700">
                  <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c47a3a]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
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
      <p className="mt-4 text-center text-[0.68rem] text-slate-500">
        Prices vary by location, suite size, and term length.{" "}
        <Link href="/#contact" className="font-semibold text-[#c47a3a] underline underline-offset-2">
          Contact us for a custom quote.
        </Link>
      </p>
    </section>
  );
}
