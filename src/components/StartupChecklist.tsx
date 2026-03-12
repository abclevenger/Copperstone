"use client";

import { useState } from "react";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

type ChecklistItem = {
  id: string;
  title: string;
  description: string;
  note?: string;
  icon: React.ReactNode;
};

const checklistItems: ChecklistItem[] = [
  {
    id: "business-address",
    title: "Professional Business Address",
    description:
      "Establish credibility with a professional business address and virtual office services. Use a real commercial address for your LLC, marketing, and client correspondence.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    ),
  },
  {
    id: "workspace",
    title: "Workspace or Meeting Space",
    description:
      "Access private executive offices, flexible coworking, and meeting rooms when you need them — without the overhead of a traditional lease.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    ),
  },
  {
    id: "phone-system",
    title: "Business Phone System",
    description:
      "Professional phone numbers, VoIP systems, and call handling solutions available through trusted technology partners.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    id: "website",
    title: "Website & Online Presence",
    description:
      "Professional website development and digital presence services to help customers find and trust your business online.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve visibility on Google and attract new customers with professional SEO services that put your business in front of local buyers.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    ),
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & IT Protection",
    description:
      "Protect your business systems and customer data with cybersecurity solutions through trusted technology providers.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
  {
    id: "internet",
    title: "Internet & Connectivity Solutions",
    description:
      "Reliable internet, cloud services, and communications infrastructure through partner technology providers.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
      />
    ),
  },
  {
    id: "crm",
    title: "CRM & Business Automation",
    description:
      "Automate sales, follow-ups, and customer management using modern CRM and automation platforms configured by experienced partners.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    id: "legal-formation",
    title: "Business Formation & Legal Setup",
    description:
      "Copperstone can introduce you to trusted legal professionals who assist with business formation, entity structure, and compliance.",
    note: "Legal services are provided by licensed attorneys through their respective firms, such as Mission Impact Legal Services. Copperstone facilitates introductions only.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    ),
  },
  {
    id: "consulting",
    title: "Growth & Business Consulting",
    description:
      "Access experienced consultants and technology advisors who help streamline operations, improve sales processes, and scale your business.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
  },
];

const interestOptions = [
  { id: "office-space", label: "Office Space" },
  { id: "virtual-office", label: "Virtual Office" },
  { id: "meeting-space", label: "Meeting Space" },
  { id: "phone-internet", label: "Phone / Internet" },
  { id: "website-seo", label: "Website / SEO" },
  { id: "cybersecurity-it", label: "Cybersecurity / IT" },
  { id: "business-formation", label: "Business Formation" },
  { id: "consulting", label: "Business Consulting" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-5 w-5 text-[#c47a3a]"}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default function StartupChecklist() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackCTAClick("startup_checklist_inquiry");
    setSubmitted(true);
  };

  return (
    <section id="startup-checklist" className="mt-16 lg:mt-20">
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
        Business Startup Checklist
      </h2>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Start Your Business With the Right Foundation
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
        Copperstone helps entrepreneurs access the workspace, tools, and trusted
        partners needed to launch and grow a successful business.
      </p>
      <p className="mt-3 max-w-3xl text-xs leading-relaxed text-slate-500 sm:text-sm">
        New businesses often need multiple services at once — a professional
        address, a website, a phone system, legal formation, and more.
        Copperstone simplifies the process by helping you identify what you
        need and connecting you with reliable partners for each step.
      </p>

      {/* ── Checklist Cards ── */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {checklistItems.map((item, i) => (
          <div
            key={item.id}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#c47a3a]/40 hover:shadow-md"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3c89a]/25 text-xs font-semibold text-[#a35f24]">
                {i + 1}
              </span>
              <svg
                className="h-5 w-5 shrink-0 text-[#c47a3a]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {item.description}
              </p>
              {item.note && (
                <p className="mt-2 rounded-lg bg-amber-50 px-3 py-1.5 text-[0.65rem] leading-relaxed text-amber-800">
                  {item.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Lead Capture / Interest Selector ── */}
      <div className="mt-10 rounded-3xl border border-[#d6b08a] bg-[#fffaf5] p-6 lg:p-8">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Not Sure What Your Business Needs?
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
          Select the services you&apos;re interested in and we&apos;ll follow up
          with a personalized consultation. Copperstone will review your goals
          and connect you with the right workspace and trusted service partners.
        </p>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-center">
            <CheckIcon className="mx-auto h-8 w-8 text-green-600" />
            <p className="mt-2 text-sm font-semibold text-green-900">
              Thank you! We&apos;ll be in touch soon.
            </p>
            <p className="mt-1 text-xs text-green-700">
              A Copperstone team member will review your interests and reach out
              to schedule a consultation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
              I&apos;m interested in:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {interestOptions.map((opt) => {
                const active = selected.has(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggle(opt.id)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                      active
                        ? "border border-[#c47a3a] bg-[#c47a3a] text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-[#c47a3a] hover:text-[#8a4f3d]"
                    }`}
                    aria-pressed={active}
                  >
                    {active && (
                      <svg
                        className="-ml-0.5 mr-1 inline-block h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    )}
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="checklist-name"
                  className="block text-xs font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="checklist-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="checklist-email"
                  className="block text-xs font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="checklist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {selected.size > 0 && (
              <p className="mt-3 text-[0.68rem] text-slate-500">
                Selected:{" "}
                {interestOptions
                  .filter((o) => selected.has(o.id))
                  .map((o) => o.label)
                  .join(", ")}
              </p>
            )}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={selected.size === 0}
                className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24] disabled:opacity-50 disabled:shadow-none"
              >
                Schedule a Consultation
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d]"
              >
                Contact Copperstone
              </Link>
            </div>
          </form>
        )}
      </div>

      {/* ── Section Disclaimer ── */}
      <p className="mt-6 text-[0.65rem] leading-relaxed text-slate-400">
        Some services referenced above are provided through independent partner
        organizations and licensed professionals. Copperstone Executive Suites
        facilitates introductions and connections but does not provide legal,
        accounting, or regulated professional services. Legal services, including
        business formation, are provided by licensed attorneys through their
        respective firms.
      </p>
    </section>
  );
}
