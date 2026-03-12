import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Copperstone Executive Suites – Land O' Lakes & South Tampa",
  description:
    "Contact Copperstone Executive Suites to schedule a tour or ask about office and meeting space availability in Land O' Lakes and South Tampa, Florida.",
  alternates: { canonical: "https://copperstone.info/contact" },
  openGraph: {
    title: "Contact Copperstone Executive Suites",
    description:
      "Schedule a tour or ask about office and meeting space in Land O' Lakes and South Tampa, FL.",
    url: "https://copperstone.info/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
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
            <a href="tel:(813) 298-7363" className="font-semibold text-[#c47a3a] underline underline-offset-2">
              (813) 298-7363
            </a>
          </p>
          <p className="mt-3 text-xs">
            <Link href="/contact/land-o-lakes" className="text-[#c47a3a] underline underline-offset-2">
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
            <a href="tel:(813) 906-8444" className="font-semibold text-[#c47a3a] underline underline-offset-2">
              (813) 906-8444
            </a>
          </p>
          <p className="mt-3 text-xs">
            <Link href="/contact/south-tampa-office-space" className="text-[#c47a3a] underline underline-offset-2">
              View South Tampa contact page
            </Link>
          </p>
        </div>
      </section>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Land O&apos; Lakes</p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8963826056515!2d-82.46603890909688!3d28.210460540986652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2bb9310bd3bab%3A0xcbc2539ff554e1dd!2sCopperstone%20Executive%20Suites!5e0!3m2!1sen!2sus!4v1773342316933!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "300px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Copperstone Executive Suites – Land O' Lakes location map"
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">South Tampa</p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.966885218928!2d-82.49667452333108!3d27.93366041547121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3045feeb555%3A0xd88f8b9254938e99!2sCopperstone%20Executive%20Suites!5e0!3m2!1sen!2sus!4v1773342285611!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "300px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Copperstone Executive Suites – South Tampa location map"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

