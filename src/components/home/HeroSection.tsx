import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  phoneLandOLakes: string;
  phoneSouthTampa: string;
};

export default function HeroSection({
  phoneLandOLakes,
  phoneSouthTampa,
}: HeroSectionProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
      <div>
        <p className="inline-flex items-center rounded-full bg-[#f3c89a] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
          Client-ready workspace in Land O&apos; Lakes &amp; South Tampa
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Stop running a serious business from a makeshift workspace.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Get a professional environment that helps you stay focused, present confidently to clients,
          and scale without the burden of a traditional office setup.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
          >
            Schedule Your Tour
          </Link>
          <Link
            href="/office-space-for-rent"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] hover:shadow-md"
          >
            Compare Workspace Options
          </Link>
        </div>
        <p className="mt-2 text-[0.7rem] text-slate-500">
          We&apos;ll follow up within one business day to confirm availability and next steps.
        </p>
        <p className="mt-3 text-xs text-slate-500">
          High-speed internet · Utilities included · Free-flowing coffee · Community events
        </p>
        <div className="mt-8 grid gap-4 text-xs text-slate-600 sm:grid-cols-2 sm:text-sm">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">&quot;Best prices and facilities we found.&quot;</p>
            <p className="mt-2 text-slate-600">
              &quot;Always clean and kept in great condition. The staff is excellent.&quot;
            </p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
              Florida Water Testing
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">
              &quot;Interior is top notch, quality is superior.&quot;
            </p>
            <p className="mt-2 text-slate-600">
              &quot;I have nothing but an A+ perspective on my tour and the facility.&quot;
            </p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
              Tyrell Scott
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_55%)] opacity-70" />
        <div className="relative z-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl backdrop-blur">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900">
            A workspace strategy, not just square footage.
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            We help you choose the right setup for your current stage, then scale as your needs
            evolve.
          </p>
          <dl className="mt-6 space-y-3 text-xs text-slate-700">
            <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] items-start gap-2">
              <dt className="font-medium text-slate-800">Executive Suites</dt>
              <dd className="text-left text-slate-500">
                Private offices for confidential work and strong client-facing credibility.
              </dd>
            </div>
            <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] items-start gap-2">
              <dt className="font-medium text-slate-800">Coworking &amp; Business Club</dt>
              <dd className="text-left text-slate-500">
                Flexible access for productivity without long-term overhead.
              </dd>
            </div>
            <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] items-start gap-2">
              <dt className="font-medium text-slate-800">Virtual Offices</dt>
              <dd className="text-left text-slate-500">
                Professional presence with operational flexibility.
              </dd>
            </div>
            <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] items-start gap-2">
              <dt className="font-medium text-slate-800">Meeting &amp; Event Space</dt>
              <dd className="text-left text-slate-500">
                On-demand rooms for presentations, planning, and high-stakes meetings.
              </dd>
            </div>
          </dl>
          <div className="mt-6 rounded-2xl border border-amber-300/40 bg-amber-50 px-4 py-3 text-xs text-amber-900">
            <p className="font-semibold text-amber-800">Ready to upgrade how your business operates?</p>
            <div className="mt-1 grid gap-2 text-[0.78rem] sm:grid-cols-2">
              <div>
                <span className="block font-semibold">Land O&apos; Lakes</span>
                <a
                  href={`tel:${phoneLandOLakes}`}
                  className="block font-semibold underline underline-offset-2"
                >
                  {phoneLandOLakes}
                </a>
              </div>
              <div>
                <span className="block font-semibold">South Tampa</span>
                <a
                  href={`tel:${phoneSouthTampa}`}
                  className="block font-semibold underline underline-offset-2"
                >
                  {phoneSouthTampa}
                </a>
              </div>
            </div>
            <p className="mt-2 text-[0.74rem]">
              Or use the form below and our team will reach out to confirm your tour time.
            </p>
          </div>
        </div>
        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
          <Image
            src="/office-space-land-o-lakes.webp"
            alt="Copperstone Executive Suites Land O' Lakes office exterior"
            width={900}
            height={500}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

