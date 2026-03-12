export const metadata = {
  title: "Land O Lakes Office | Copperstone Executive Suites",
};

const accent = "#c47a3a";

export default function LandOLakesContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-0 lg:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Land O&apos; Lakes Office
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Contact information for Copperstone Executive Suites in Land O&apos; Lakes, Florida.
      </p>

      <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          Copperstone Executive Suites – Land O&apos; Lakes
          <br />
          3632 Land O&apos; Lakes Blvd #105
          <br />
          Land O Lakes, FL 34639
        </p>
        <p>
          Phone:{" "}
          <a href="tel:(813) 298-7363" className="font-semibold text-(--accent,var(--color-pink-300)) underline underline-offset-2" style={{ ["--accent" as string]: accent }}>
            (813) 298-7363
          </a>
        </p>
        <p>
          Call our Land O&apos; Lakes office or use the Schedule a Tour form on our homepage to
          arrange a visit and learn more about current office and meeting space availability.
        </p>
      </section>
    </main>
  );
}

