import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StartupChecklist from "@/components/StartupChecklist";
import {
  benefits,
  coreServices,
  partnerCategories,
  processSteps,
} from "@/content/business-solutions";

export const metadata: Metadata = {
  title: "Business Solutions – Workspace, Technology & Growth Services",
  description:
    "Copperstone Executive Suites offers office space, virtual offices, meeting rooms, and business growth solutions through trusted partners — phone systems, website design, SEO, AI solutions, cybersecurity, IT, and consulting in Land O' Lakes and South Tampa.",
  alternates: { canonical: "https://copperstone.info/business-solutions" },
  openGraph: {
    title: "Business Solutions | Copperstone Executive Suites",
    description:
      "Workspace and business growth solutions from one professional hub. Office space, phone systems, website design, SEO, cybersecurity, and consulting through trusted partners.",
    url: "https://copperstone.info/business-solutions",
  },
};

const solutionsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Copperstone Business Solutions",
  provider: {
    "@type": "LocalBusiness",
    name: "Copperstone Executive Suites",
    url: "https://copperstone.info",
  },
  description:
    "Workspace, technology, and business growth solutions through direct services and trusted strategic partners.",
  areaServed: {
    "@type": "Place",
    name: "Tampa Bay, Florida",
  },
  serviceType: [
    "Executive Office Space",
    "Virtual Office",
    "Meeting Room Rentals",
    "Business Phone Systems",
    "Website Design",
    "SEO Services",
    "Cybersecurity Solutions",
    "Software & Applications",
    "AI Solutions",
    "Franchise Services",
    "Leadership Training & Development",
    "Business Consulting",
  ],
};

function CoreServiceIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    building: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    ),
    mailbox: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
    users: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    ),
    calendar: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    ),
    laptop: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
      />
    ),
    clock: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    envelope: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
      />
    ),
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  };

  return (
    <svg
      className="h-6 w-6 text-[#c47a3a]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      {iconMap[icon] ?? iconMap.building}
    </svg>
  );
}

function PartnerCategoryIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
    globe: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
    lock: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    ),
    chart: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
    storefront: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
      />
    ),
    academic: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    ),
    code: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    ),
    sparkles: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    ),
    gear: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
    ),
  };

  const gearCircle = (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  );

  return (
    <svg
      className="h-8 w-8 text-[#c47a3a]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      {iconMap[icon] ?? iconMap.globe}
      {icon === "gear" && gearCircle}
    </svg>
  );
}

function BenefitIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    hub: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    ),
    image: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    ),
    scale: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    ),
    verified: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
    rocket: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    ),
  };

  return (
    <svg
      className="h-6 w-6 text-[#c47a3a]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      {iconMap[icon] ?? iconMap.hub}
    </svg>
  );
}

export default function BusinessSolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }}
      />

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Business Solutions" }]}
        />

        {/* ── Hero Section ── */}
        <section className="text-center">
          <p className="inline-flex items-center rounded-full bg-[#f3c89a]/30 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#a35f24] sm:text-[0.68rem]">
            Workspace + Business Infrastructure
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            Business Solutions Beyond Office Space
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            From professional workspace and virtual business addresses to phone systems,
            websites, SEO, and technology solutions through trusted partners —
            Copperstone helps businesses grow from one professional hub.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24] sm:w-auto"
            >
              Schedule a Consultation
            </Link>
            <a
              href="#partner-solutions"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] hover:shadow-md sm:w-auto"
            >
              Explore Solutions
            </a>
            <a
              href="#startup-checklist"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] hover:shadow-md sm:w-auto"
            >
              Startup Checklist
            </a>
          </div>
        </section>

        {/* ── Intro Section ── */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:mt-20 lg:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            How It Works
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Workspace and business growth from one address.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Copperstone Executive Suites provides professional workspace directly and
            connects you with business growth solutions through carefully vetted
            strategic partners. Whether you need an office, a website, a phone system,
            or cybersecurity — start the conversation here and we&apos;ll help you build
            the right support system.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">Direct services</span> —
              Office space, meeting rooms, virtual offices, and coworking provided
              directly by Copperstone.
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">Partner solutions</span> —
              Technology, marketing, and consulting services facilitated through trusted
              referral and affiliate relationships.
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 sm:col-span-2 lg:col-span-1">
              <span className="font-semibold text-slate-900">One conversation</span> —
              Tell us what you need and we handle the coordination. No cold calls, no
              guesswork.
            </div>
          </div>
        </section>

        {/* ── Section A: Core Copperstone Services ── */}
        <section className="mt-16 lg:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            Core Copperstone Services
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Professional workspace and business infrastructure — directly from us.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            These are the services Copperstone provides to members and tenants at our
            Land O&apos; Lakes and South Tampa locations.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#c47a3a]/40 hover:shadow-md"
              >
                <CoreServiceIcon icon={service.icon} />
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-600">
                  {service.description}
                </p>
                {service.href && (
                  <Link
                    href={service.href}
                    className="mt-3 text-[0.68rem] font-semibold text-[#a35f24] underline underline-offset-2 transition hover:text-[#c47a3a]"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
            >
              Schedule a Tour
            </Link>
          </div>
        </section>

        {/* ── Section B: Partner Business Solutions ── */}
        <section id="partner-solutions" className="mt-16 lg:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            Partner Business Solutions
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Technology, marketing, and growth services through trusted partners.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Copperstone connects you with vetted providers for the business
            infrastructure you need — without the hassle of sourcing vendors on your
            own. We facilitate introductions and consultations so you can focus on
            running your business.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#c47a3a]/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3c89a]/20">
                    <PartnerCategoryIcon icon={cat.icon} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {cat.category}
                  </h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {cat.description}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-slate-700">
                      <svg
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c47a3a]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] hover:shadow-md"
            >
              Ask About Partner Solutions
            </Link>
          </div>
        </section>

        {/* ── Why Businesses Use Copperstone ── */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-[#fffaf5] p-6 lg:mt-20 lg:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8a4f3d]">
            Why Businesses Choose Copperstone
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            More than office space — a launchpad for growing companies.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 rounded-xl border border-[#d6b08a]/30 bg-white px-4 py-3"
              >
                <div className="mt-0.5">
                  <BenefitIcon icon={b.icon} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{b.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Business Startup Checklist ── */}
        <StartupChecklist />

        {/* ── How It Works: 3 Steps ── */}
        <section className="mt-16 lg:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            Getting Started
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Three steps to your complete business support system.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c47a3a] text-sm font-semibold text-white">
                  {step.step}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="mt-16 rounded-3xl border border-[#c47a3a] bg-linear-to-b from-[#fffaf5] to-[#f3e8d9] p-8 text-center shadow-sm lg:mt-20 lg:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Let&apos;s build your business support system.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Whether you need workspace, a technology upgrade, marketing support, or all
            of the above — the conversation starts with one meeting. No pressure, no
            obligation.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24] sm:w-auto"
            >
              Book a Consultation
            </Link>
            <Link
              href="/office-space-for-rent"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] sm:w-auto"
            >
              Explore Office Space
            </Link>
            <Link
              href="/meeting-space"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] sm:w-auto"
            >
              View Meeting Rooms
            </Link>
          </div>
        </section>

        {/* ── Interest-Based Quick Links ── */}
        <section className="mt-10 grid gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Office Space", href: "/office-space-for-rent" },
            { label: "Virtual Office", href: "/office-space-for-rent" },
            { label: "AI Solutions", href: "#partner-solutions" },
            { label: "Meeting Space", href: "/meeting-space" },
            { label: "Business Consulting", href: "/#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-[#c47a3a] hover:text-[#c47a3a] hover:shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </section>

        {/* ── Disclaimer Section ── */}
        <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="text-[0.68rem] leading-relaxed text-slate-500">
            <span className="font-semibold text-slate-600">Disclaimer:</span> Certain
            business solutions featured on this page are offered through trusted
            third-party partners, affiliates, or referral relationships. Copperstone
            Executive Suites facilitates introductions and consultations but does not
            directly provide regulated professional services such as legal, accounting,
            or licensed financial advice. Availability, pricing, and service terms may
            vary and may be subject to separate provider agreements. Copperstone is not
            a law firm, CPA firm, telecommunications carrier, managed service provider,
            or cybersecurity vendor. Partner services are provided by their respective
            companies under their own terms and conditions.
          </p>
        </section>
      </main>
    </div>
  );
}
