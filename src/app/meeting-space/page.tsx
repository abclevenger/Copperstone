import Image from "next/image";

export const metadata = {
  title: "Meeting Space & Conference Rooms in Land O' Lakes, FL",
  description:
    "Reserve professional conference rooms, meeting rooms, and event space in Land O' Lakes and South Tampa. Ideal for presentations, trainings, and workshops.",
  alternates: { canonical: "https://copperstone.info/meeting-space" },
  openGraph: {
    title: "Meeting Space & Conference Rooms | Copperstone Executive Suites",
    description:
      "Reserve professional conference rooms and event space in Land O' Lakes and South Tampa, FL.",
    url: "https://copperstone.info/meeting-space",
    images: [{ url: "/conference-room-land-o-lakes.jpg", width: 1200, height: 630 }],
  },
};

const accent = "#c47a3a";

export default function MeetingSpacePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]" style={{ ["--accent" as string]: accent }}>
        Meeting Space
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Meeting Space
      </h1>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Conference rooms, meeting rooms, and event space sized for your next gathering.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
          <Image
            src="/conference-room-land-o-lakes.jpg"
            alt="Conference room at Copperstone Executive Suites Land O' Lakes"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
          <Image
            src="/Conference-Rooms-Land-O-Lakes.jpg"
            alt="Meeting room at Copperstone Executive Suites Land O' Lakes"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-sm">
        <p>
          Copperstone Executive Suites offers professional meeting space for client meetings,
          trainings, workshops, and events. From small conference rooms to larger event spaces, we
          can help you host the right kind of gathering for your business or organization.
        </p>

        <div className="mt-4 grid gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-700 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">Room types</p>
            <p>Conference rooms, training rooms, and large event space.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Group size</p>
            <p>From small team meetings to larger workshops and receptions.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Tenant perks</p>
            <p>Office tenants receive discounted meeting and event rates.</p>
          </div>
        </div>

        <h2 className="mt-5 text-base font-semibold text-slate-900">
          Meeting &amp; Event Options
        </h2>
        <ul className="mt-2 space-y-1.5 text-sm">
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Conference rooms for important meetings and presentations</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Meeting rooms for team sessions, interviews, and trainings</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Event space suitable for workshops, seminars, and receptions</span>
          </li>
        </ul>

        <p className="mt-3">
          Current office tenants receive discounted rates on meeting and conference room bookings.
          Ask our team for details when you schedule your visit.
        </p>

        <p className="mt-4 text-sm text-slate-700">
          To check availability or reserve space, please contact our Land O&apos; Lakes or South
          Tampa office, or request more information through the Schedule a Tour form on the
          homepage.
        </p>
        <p className="mt-2 text-sm text-slate-700">
          You can{" "}
          <a href="/#contact" className="font-semibold text-[#c47a3a] underline underline-offset-2">
            schedule a tour
          </a>{" "}
          today and we&apos;ll help you match the right room to your event.
        </p>
      </section>
    </main>
  );
}


