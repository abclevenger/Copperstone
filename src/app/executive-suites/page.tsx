import Image from "next/image";

export const metadata = {
  title: "Executive Suites | Copperstone Executive Suites",
};

const accent = "#c47a3a";

export default function ExecutiveSuitesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent,var(--color-pink-300))" style={{ ["--accent" as string]: accent }}>
        Executive Suites
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Executive Suites
      </h1>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Private offices in a professional setting, with amenities included so you can focus on your business.
      </p>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src="/executive-offices-land-o-lakes.jpg"
          alt="Executive office suite at Copperstone Executive Suites"
          width={1024}
          height={506}
          className="h-full w-full object-cover"
        />
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-sm">
        <p>
          Our executive suites are designed for professionals and growing companies who want a
          dedicated office in a shared business environment. You get the privacy of your own space
          with the benefits of shared conference rooms, lobby, and amenities.
        </p>

        <h2 className="mt-5 text-base font-semibold text-slate-900">
          Highlights
        </h2>
        <ul className="mt-2 space-y-1.5 text-sm">
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Private, lockable office with 24/7 access (where available)</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Shared reception area and lobby for greeting guests</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Access to conference rooms, meeting rooms, and event space</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>High-speed internet, utilities, and coffee included</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
            <span>Professional business address in Land O&apos; Lakes or South Tampa</span>
          </li>
        </ul>

        <p className="mt-4 text-sm text-slate-700">
          To see current executive suite availability and layout options, schedule a tour at the
          location that works best for you. We&apos;ll walk you through the spaces and help you
          decide what fits your business.
        </p>
      </section>
    </main>
  );
}


