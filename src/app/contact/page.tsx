import Link from "next/link";

export const metadata = {
  title: "Contact | Copperstone Executive Suites",
};

const accent = "#c47a3a";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent,var(--color-pink-300))" style={{ ["--accent" as string]: accent }}>
        Contact
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Contact Copperstone Executive Suites
      </h1>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Reach our Land O&apos; Lakes or South Tampa locations to schedule a tour or ask questions.
      </p>

      <section className="mt-6 grid gap-6 text-sm leading-relaxed text-slate-700 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Land O&apos; Lakes Office
          </h2>
          <p className="mt-2 text-slate-700">
            Copperstone Executive Suites
            <br />
            3632 Land O&apos; Lakes Blvd #105
            <br />
            Land O Lakes, FL 34639
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a href="tel:(813) 298-7363" className="font-semibold text-(--accent,var(--color-pink-300)) underline underline-offset-2">
              (813) 298-7363
            </a>
          </p>
          <p className="mt-3 text-xs">
            <Link href="/contact/land-o-lakes" className="text-(--accent,var(--color-pink-300)) underline underline-offset-2">
              View Land O&apos; Lakes contact page
            </Link>
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            South Tampa Office
          </h2>
          <p className="mt-2 text-slate-700">
            Copperstone Executive Suites
            <br />
            1001 S MacDill Ave
            <br />
            Tampa, FL 33629
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a href="tel:(813) 906-8444" className="font-semibold text-(--accent,var(--color-pink-300)) underline underline-offset-2">
              (813) 906-8444
            </a>
          </p>
          <p className="mt-3 text-xs">
            <Link href="/contact/south-tampa-office-space" className="text-(--accent,var(--color-pink-300)) underline underline-offset-2">
              View South Tampa contact page
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

