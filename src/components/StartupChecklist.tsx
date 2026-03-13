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
    id: "software",
    title: "Software & Application Needs",
    description:
      "Get help selecting, implementing, or building the right software — from productivity suites and accounting tools to custom applications and SaaS platforms.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    ),
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Automation",
    description:
      "Leverage AI-powered tools for customer service chatbots, content creation, lead generation, workflow automation, and data-driven decision making.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
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

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/mNr3aCm0bvD70r49HVTH/webhook-trigger/73c93ad0-2ad1-45f4-aff5-af3311c36646";

export default function StartupChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employees, setEmployees] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const checkedItems = checklistItems.filter((item) => checked.has(item.id));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    trackCTAClick("startup_checklist_inquiry");

    const needsHelp = checkedItems.map((item) => item.title).join(", ");

    try {
      await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          employees: employees || "Not specified",
          budget: budget || "Not specified",
          timeline: timeline || "Not specified",
          notes: notes || "",
          needs_help_with: needsHelp,
          items_checked: checkedItems.length,
          total_items: checklistItems.length,
          source: "Copperstone Business Solutions – Startup Checklist",
          page_url: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="startup-checklist" className="mt-16 lg:mt-20">
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
        Business Startup Checklist
      </h2>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Check Off What You Need Help With
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
        Go through the checklist below and check every item you&apos;d like
        assistance with. When you&apos;re done, enter your contact info and
        we&apos;ll reach out with a personalized plan.
      </p>

      {/* ── Progress indicator ── */}
      <div className="mt-6 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-[#f3c89a] to-[#c47a3a] transition-all duration-500 ease-out"
            style={{
              width: `${(checked.size / checklistItems.length) * 100}%`,
            }}
          />
        </div>
        <span className="shrink-0 text-xs font-semibold text-[#c47a3a]">
          {checked.size}/{checklistItems.length}
        </span>
      </div>

      {/* ── Checkable Cards ── */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {checklistItems.map((item, i) => {
          const isChecked = checked.has(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggle(item.id)}
              className={`group flex gap-4 rounded-2xl border p-5 text-left transition-all ${
                isChecked
                  ? "border-[#c47a3a] bg-[#fffaf5] shadow-md ring-1 ring-[#c47a3a]/20"
                  : "border-slate-200 bg-white shadow-sm hover:border-[#c47a3a]/40 hover:shadow-md"
              }`}
              aria-pressed={isChecked}
            >
              {/* Checkbox */}
              <div className="flex flex-col items-center gap-2 pt-0.5">
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all ${
                    isChecked
                      ? "border-[#c47a3a] bg-[#c47a3a]"
                      : "border-slate-300 bg-white group-hover:border-[#c47a3a]/60"
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="h-3.5 w-3.5 text-white"
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
                </div>
                <span className="text-[0.6rem] font-semibold text-slate-400">
                  {i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <svg
                    className={`h-4 w-4 shrink-0 transition ${
                      isChecked ? "text-[#c47a3a]" : "text-slate-400 group-hover:text-[#c47a3a]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                  <h3
                    className={`text-sm font-semibold transition ${
                      isChecked ? "text-[#8a4f3d]" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
                {item.note && (
                  <p className="mt-2 rounded-lg bg-amber-50 px-3 py-1.5 text-[0.65rem] leading-relaxed text-amber-800">
                    {item.note}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Contact form (appears after checking at least 1 item) ── */}
      <div
        className={`mt-8 overflow-hidden rounded-3xl border transition-all duration-500 ${
          checked.size > 0
            ? "border-[#d6b08a] bg-[#fffaf5] p-6 opacity-100 lg:p-8"
            : "pointer-events-none max-h-0 border-transparent p-0 opacity-0"
        }`}
      >
        {submitted ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center">
            <svg
              className="mx-auto h-8 w-8 text-green-600"
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
            <p className="mt-2 text-sm font-semibold text-green-900">
              Thank you! We&apos;ll be in touch soon.
            </p>
            <p className="mt-1 text-xs text-green-700">
              A Copperstone team member will review what you need help with and
              reach out to schedule a consultation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Great — let&apos;s get you started
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              You&apos;ve selected{" "}
              <span className="font-semibold text-[#c47a3a]">
                {checked.size} {checked.size === 1 ? "item" : "items"}
              </span>{" "}
              you need help with. Enter your info below and we&apos;ll follow up
              with a personalized consultation.
            </p>

            {/* Selected summary */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {checkedItems.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center gap-1 rounded-full bg-[#c47a3a]/10 px-2.5 py-1 text-[0.68rem] font-medium text-[#8a4f3d]"
                >
                  <svg
                    className="h-3 w-3"
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
                  {item.title}
                </span>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="checklist-name"
                  className="block text-xs font-medium text-slate-700"
                >
                  Name <span className="text-red-400">*</span>
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
                  Email <span className="text-red-400">*</span>
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
              <div>
                <label
                  htmlFor="checklist-phone"
                  className="block text-xs font-medium text-slate-700"
                >
                  Phone
                </label>
                <input
                  id="checklist-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Business details */}
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
              Tell us about your business
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="checklist-employees"
                  className="block text-xs font-medium text-slate-700"
                >
                  Number of Employees
                </label>
                <select
                  id="checklist-employees"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
                >
                  <option value="">Select…</option>
                  <option value="Just me">Just me</option>
                  <option value="2-5">2–5</option>
                  <option value="6-10">6–10</option>
                  <option value="11-25">11–25</option>
                  <option value="26-50">26–50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="checklist-budget"
                  className="block text-xs font-medium text-slate-700"
                >
                  Monthly Budget
                </label>
                <select
                  id="checklist-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
                >
                  <option value="">Select…</option>
                  <option value="Under $500">Under $500/mo</option>
                  <option value="$500-$1,000">$500–$1,000/mo</option>
                  <option value="$1,000-$2,500">$1,000–$2,500/mo</option>
                  <option value="$2,500-$5,000">$2,500–$5,000/mo</option>
                  <option value="$5,000+">$5,000+/mo</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="checklist-timeline"
                  className="block text-xs font-medium text-slate-700"
                >
                  When do you need to start?
                </label>
                <select
                  id="checklist-timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
                >
                  <option value="">Select…</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1-3 months">1–3 months</option>
                  <option value="3-6 months">3–6 months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>
            </div>

            {/* Notes / constraints */}
            <div className="mt-3">
              <label
                htmlFor="checklist-notes"
                className="block text-xs font-medium text-slate-700"
              >
                Anything else we should know?
              </label>
              <textarea
                id="checklist-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
                placeholder="Budget constraints, timing issues, special requirements, number of offices needed, etc."
              />
            </div>

            {error && (
              <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
                Something went wrong. Please try again or{" "}
                <Link
                  href="/contact"
                  className="font-semibold underline underline-offset-2"
                >
                  contact us directly
                </Link>
                .
              </p>
            )}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24] disabled:opacity-50 disabled:shadow-none"
              >
                {submitting ? "Sending…" : "Send My Checklist"}
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

      {/* ── Prompt when nothing checked ── */}
      {checked.size === 0 && (
        <p className="mt-6 text-center text-sm text-slate-500">
          Check the items above that you need help with to get started.
        </p>
      )}

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
