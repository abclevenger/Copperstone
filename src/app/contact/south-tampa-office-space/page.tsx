export const metadata = {
  title: "South Tampa Office Space | Copperstone Executive Suites",
};

const accent = "#c47a3a";

export default function SouthTampaContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-0 lg:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        South Tampa Office
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Contact information for Copperstone Executive Suites in South Tampa, Florida.
      </p>

      <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          Copperstone Executive Suites – South Tampa
          <br />
          1001 S MacDill Ave
          <br />
          Tampa, FL 33629
        </p>
        <p>
          Phone:{" "}
          <a href="tel:(813) 906-8444" className="font-semibold text-(--accent,var(--color-pink-300)) underline underline-offset-2" style={{ ["--accent" as string]: accent }}>
            (813) 906-8444
          </a>
        </p>
        <p>
          Call our South Tampa office or use the Schedule a Tour form on our homepage to plan your
          visit and discuss office and meeting space options.
        </p>
      </section>
    </main>
  );
}

