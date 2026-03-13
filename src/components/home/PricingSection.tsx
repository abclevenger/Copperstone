import Link from "next/link";
import {
  PRICING,
  PHONE_SERVICES,
  EMAIL_ACCOUNTS,
  WEBSITE_HOSTING,
  SEO_SERVICES,
  formatPrice,
} from "@/content/pricing";

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

type AddOn = {
  label: string;
  tagline: string;
  shortDescription: string;
  features: readonly string[];
  price: string;
  priceSuffix: string;
  volumeNote: string;
  icon: React.ReactNode;
};

const addOns: AddOn[] = [
  {
    label: PHONE_SERVICES.label,
    tagline: PHONE_SERVICES.tagline,
    shortDescription: PHONE_SERVICES.shortDescription,
    features: PHONE_SERVICES.features,
    price: formatPrice(PHONE_SERVICES.pricePerUser),
    priceSuffix: "/user/mo",
    volumeNote: PHONE_SERVICES.volumeNote,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    label: EMAIL_ACCOUNTS.label,
    tagline: EMAIL_ACCOUNTS.tagline,
    shortDescription: EMAIL_ACCOUNTS.shortDescription,
    features: EMAIL_ACCOUNTS.features,
    price: formatPrice(EMAIL_ACCOUNTS.pricePerUser),
    priceSuffix: "/user/mo",
    volumeNote: EMAIL_ACCOUNTS.volumeNote,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
  },
  {
    label: WEBSITE_HOSTING.label,
    tagline: WEBSITE_HOSTING.tagline,
    shortDescription: WEBSITE_HOSTING.shortDescription,
    features: WEBSITE_HOSTING.features,
    price: formatPrice(WEBSITE_HOSTING.startingPrice),
    priceSuffix: "/mo",
    volumeNote: WEBSITE_HOSTING.volumeNote,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
  },
  {
    label: SEO_SERVICES.label,
    tagline: SEO_SERVICES.tagline,
    shortDescription: SEO_SERVICES.shortDescription,
    features: SEO_SERVICES.features,
    price: formatPrice(SEO_SERVICES.startingPrice),
    priceSuffix: "/mo",
    volumeNote: SEO_SERVICES.volumeNote,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
      />
    ),
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

      {/* ── Workspace Tiers ── */}
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
              <span className="text-3xl font-semibold text-slate-900">{tier.starting}</span>
              <span className="text-sm text-slate-500">{tier.period}</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Starting from</p>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">{tier.description}</p>
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

      {/* ── Add-Ons ── */}
      <p className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-slate-900">
        Optional Add-Ons
      </p>
      <p className="mt-1 text-sm text-slate-600">
        Upgrade any plan with premium services. Mix and match to fit your needs.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {addOns.map((addon) => (
          <div
            key={addon.label}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-4 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3c89a]/20">
                  <svg
                    className="h-5 w-5 text-[#c47a3a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {addon.icon}
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-slate-900">{addon.label}</p>
                    <span className="rounded-full bg-[#f3c89a]/30 px-2 py-0.5 text-[0.54rem] font-semibold uppercase tracking-wide text-[#a35f24]">
                      Add-On
                    </span>
                  </div>
                  <p className="mt-0.5 text-[0.68rem] leading-relaxed text-slate-600">
                    {addon.tagline}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {addon.features.slice(0, 3).map((f) => (
                  <span key={f} className="flex items-center gap-1 text-[0.64rem] text-slate-500">
                    <CheckIcon />
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex items-end justify-between border-t border-slate-100 pt-3">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-semibold text-slate-900">{addon.price}</span>
                    <span className="text-[0.68rem] text-slate-500">{addon.priceSuffix}</span>
                  </div>
                  <p className="mt-0.5 text-[0.58rem] text-slate-400">{addon.volumeNote}</p>
                </div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-4 py-1.5 text-[0.68rem] font-semibold text-white shadow-md shadow-[#a35f24]/40 transition hover:from-[#edba85] hover:to-[#a35f24]"
                >
                  Add to Plan
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-[0.68rem] text-slate-500">
        Prices vary by location, suite size, and term length. Per-user add-ons billed per enabled user.{" "}
        <Link href="/#contact" className="font-semibold text-[#c47a3a] underline underline-offset-2">
          Contact us for a custom quote.
        </Link>
      </p>
    </section>
  );
}
