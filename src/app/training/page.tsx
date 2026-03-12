import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Training & Classes – Business, Leadership & Professional Development",
  description:
    "Business training, leadership classes, and professional development workshops at Copperstone Executive Suites in Land O' Lakes and South Tampa. Browse the schedule and book your seat.",
  alternates: { canonical: "https://copperstone.info/training" },
  openGraph: {
    title: "Training & Classes | Copperstone Executive Suites",
    description:
      "Business training, leadership development, and professional workshops. Browse the schedule and book your seat today.",
    url: "https://copperstone.info/training",
  },
};

const trainingSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Copperstone Executive Suites – Training & Development",
  url: "https://copperstone.info/training",
  description:
    "Business training, leadership classes, and professional development workshops for entrepreneurs and professionals in Tampa Bay.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3632 Land O' Lakes Blvd #105",
    addressLocality: "Land O Lakes",
    addressRegion: "FL",
    postalCode: "34639",
    addressCountry: "US",
  },
};

type TrainingCategory = {
  title: string;
  description: string;
  icon: React.ReactNode;
  classes: string[];
};

const categories: TrainingCategory[] = [
  {
    title: "Leadership & Management",
    description:
      "Develop the skills to lead teams, manage operations, and make confident decisions as your business grows.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    ),
    classes: [
      "Leading Through Change",
      "Effective Team Communication",
      "Manager Foundations",
      "Conflict Resolution for Leaders",
      "Strategic Thinking for Small Business",
    ],
  },
  {
    title: "Business Strategy & Growth",
    description:
      "From business planning to market expansion, learn frameworks that help you scale with clarity and confidence.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
    classes: [
      "Business Plan Workshop",
      "Revenue Growth Strategies",
      "Market Positioning & Competitive Advantage",
      "Financial Literacy for Owners",
      "Scaling Without Losing Quality",
    ],
  },
  {
    title: "Sales & Client Relations",
    description:
      "Build repeatable sales processes and stronger client relationships that drive revenue and referrals.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
      />
    ),
    classes: [
      "Consultative Selling",
      "Client Retention & Relationship Management",
      "Networking That Actually Works",
      "Proposal & Presentation Skills",
      "Sales Pipeline Management",
    ],
  },
  {
    title: "Digital & Technology",
    description:
      "Stay competitive with practical training on digital tools, marketing, and technology essentials for business.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
      />
    ),
    classes: [
      "Digital Marketing Fundamentals",
      "SEO & Local Search Visibility",
      "CRM & Automation Essentials",
      "AI Tools for Small Business",
      "Cybersecurity Awareness",
    ],
  },
  {
    title: "Operations & Productivity",
    description:
      "Optimize how your business runs with workshops focused on systems, efficiency, and sustainable operations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
    ),
    classes: [
      "Time Management & Prioritization",
      "Process Improvement for Small Teams",
      "Delegation & Workflow Design",
      "Project Management Foundations",
      "Building Standard Operating Procedures",
    ],
  },
  {
    title: "Professional Development",
    description:
      "Invest in yourself with classes that build personal effectiveness, communication, and career readiness.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    ),
    classes: [
      "Public Speaking & Executive Presence",
      "Business Writing Essentials",
      "Personal Brand Building",
      "Emotional Intelligence at Work",
      "Goal Setting & Accountability",
    ],
  },
];

const formatDetails = [
  {
    label: "In-Person",
    description: "Held at our Land O' Lakes and South Tampa locations",
  },
  {
    label: "Small Groups",
    description: "Focused sessions with 8–20 attendees for real interaction",
  },
  {
    label: "Flexible Scheduling",
    description: "Morning, afternoon, and evening sessions available",
  },
  {
    label: "Affordable",
    description: "Many classes included for members; à la carte options available",
  },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingSchema) }}
      />

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Training & Classes" }]}
        />

        {/* ── Hero ── */}
        <section className="text-center">
          <p className="inline-flex items-center rounded-full bg-[#f3c89a]/30 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#a35f24] sm:text-[0.68rem]">
            Professional Development
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            Training &amp; Classes for Growing Businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            Leadership development, business strategy, sales training, and technology
            workshops — designed for entrepreneurs, professionals, and teams in the Tampa
            Bay area. Browse the schedule and book your seat.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#book"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24] sm:w-auto"
            >
              Book a Class
            </a>
            <a
              href="#schedule"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] hover:shadow-md sm:w-auto"
            >
              View Schedule
            </a>
          </div>
        </section>

        {/* ── Why Train at Copperstone ── */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:mt-20 lg:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            Why Train Here
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            A professional environment designed for focused learning.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Copperstone Executive Suites hosts business and leadership training in
            our polished conference and event spaces. Small-group formats, experienced
            facilitators, and a professional setting ensure every session delivers real,
            actionable value.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {formatDetails.map((detail) => (
              <div
                key={detail.label}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <p className="text-xs font-semibold text-slate-900">{detail.label}</p>
                <p className="mt-1 text-xs text-slate-600">{detail.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Class Categories ── */}
        <section id="schedule" className="mt-16 lg:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            Training Categories
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Classes built for business owners, leaders, and professionals.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Browse our training topics below. Classes rotate on a regular schedule —
            check the booking calendar for upcoming dates and availability.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#c47a3a]/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3c89a]/20">
                    <svg
                      className="h-6 w-6 text-[#c47a3a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {cat.icon}
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{cat.title}</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {cat.description}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {cat.classes.map((cls) => (
                    <li
                      key={cls}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
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
                      {cls}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Mid-page CTA ── */}
        <section className="mt-12 rounded-3xl border border-[#d6b08a] bg-[#fffaf5] p-6 text-center lg:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Ready to invest in your team or yourself?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
            Browse upcoming sessions on the booking calendar below and reserve your
            spot. Have questions about group rates or private sessions?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#a35f24] underline underline-offset-2 hover:text-[#c47a3a]"
            >
              Contact us
            </Link>
            .
          </p>
        </section>

        {/* ── Booking Calendar ── */}
        <section id="book" className="mt-16 lg:mt-20">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
              Book a Class
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Browse the schedule and reserve your seat.
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              Select a date and class below to book. Classes are held at our Land
              O&apos; Lakes and South Tampa locations.
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-[#f7f7f5] p-4 shadow-sm sm:p-5">
            <BookingWidget />
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="mt-16 lg:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            Who It&apos;s For
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Training that meets you where you are.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Owners & Entrepreneurs",
                body: "Sharpen leadership skills and learn growth strategies from people who understand small business.",
              },
              {
                title: "Team Leaders & Managers",
                body: "Build confidence in delegation, communication, and driving team performance.",
              },
              {
                title: "Professionals & Solo Practitioners",
                body: "Invest in yourself with classes on sales, productivity, digital tools, and personal brand.",
              },
              {
                title: "Startups & Early-Stage Companies",
                body: "Get the foundations right — from business planning and financial literacy to sales process.",
              },
              {
                title: "Remote & Hybrid Workers",
                body: "Step into a focused learning environment and connect with peers in the Tampa Bay business community.",
              },
              {
                title: "Corporate Teams",
                body: "Book private group sessions for team-building, leadership retreats, or skills-based workshops.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
              >
                <p className="text-xs font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="mt-16 rounded-3xl border border-[#c47a3a] bg-linear-to-b from-[#fffaf5] to-[#f3e8d9] p-8 text-center shadow-sm lg:mt-20 lg:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Grow your skills from the same place you grow your business.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Whether you&apos;re building a team, sharpening your own leadership, or
            exploring new tools — Copperstone training gives you the space, structure,
            and community to level up.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#book"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24] sm:w-auto"
            >
              Book a Class
            </a>
            <Link
              href="/business-solutions"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] sm:w-auto"
            >
              Explore Business Solutions
            </Link>
            <Link
              href="/meeting-space"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] sm:w-auto"
            >
              View Event Space
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
