import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Copperstone Executive Suites",
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-0 lg:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          Welcome to Copperstone Executive Suites. These Terms of Service explain
          the rules for using our office, coworking, virtual office, and meeting
          space services, as well as this website. By visiting our locations,
          leasing space, or using this site, you agree to these terms.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          1. Who We Are
        </h2>
        <p>
          Copperstone Executive Suites provides professional office and meeting
          space in Land O&apos; Lakes and South Tampa, Florida. We may work with
          trusted partners such as Yellow Mountain Business Solutions LLC
          ({' '}
          <Link
            href="https://ymbs.pro"
            className="underline underline-offset-2"
            target="_blank"
          >
            ymbs.pro
          </Link>
          {' '} ) for technology, marketing, or operational support, but your
          agreement for office and meeting space remains with Copperstone.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          2. Using Our Space and Services
        </h2>
        <p>
          You agree to use our offices, coworking areas, virtual office
          services, meeting rooms, and event spaces in a professional, lawful,
          and respectful manner. This includes complying with building rules,
          respecting other tenants and guests, and following any written
          policies we provide as part of your license or membership agreement.
        </p>
        <p>
          You are responsible for the actions of your employees, contractors,
          and guests while they are on-site or using our services.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          3. Website and Online Content
        </h2>
        <p>
          The content on this website is provided for general information about
          our services and locations. While we aim to keep information current,
          availability, pricing, and specific offerings may change without
          notice. Nothing on this site is a binding offer; all agreements are
          finalized in writing or through our booking process.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          4. Payments and Reservations
        </h2>
        <p>
          Terms for deposits, license fees, membership fees, and room rentals
          are set out in your specific license, membership, or booking
          agreement. You agree to pay all amounts due on time and to any
          additional charges for extended use, damage beyond normal wear, or
          extra services you request.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          5. Acceptable Use and Prohibited Activities
        </h2>
        <p>
          You may not use our locations, internet, or mailing address for any
          unlawful, fraudulent, or abusive activity. This includes, but is not
          limited to, activities involving harassment, spamming, distribution of
          malware, intellectual property infringement, or any use that disrupts
          other clients or our operations.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          6. Intellectual Property
        </h2>
        <p>
          Copperstone Executive Suites and our partners own or license the
          branding, photos, graphics, and written content on this site, except
          where otherwise noted. You may not copy, redistribute, or modify this
          material without permission, other than for your own internal
          reference when evaluating or using our services.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          7. Disclaimers and Limitation of Liability
        </h2>
        <p>
          Our spaces and services are provided on an &quot;as available&quot;
          basis. While we work hard to maintain a professional, well-maintained
          environment, we do not guarantee uninterrupted access to facilities,
          internet, or this website. To the fullest extent permitted by law,
          Copperstone Executive Suites is not liable for lost profits, loss of
          data, business interruption, or any indirect or consequential damages
          arising from use of our spaces or site.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          8. Changes to These Terms
        </h2>
        <p>
          We may update these Terms of Service from time to time to reflect
          changes in our services or applicable law. The &quot;Last updated&quot;
          date at the top will indicate the most recent revision. Your continued
          use of our services after changes are posted means you accept the
          updated terms.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          9. Contact Us
        </h2>
        <p>
          If you have questions about these terms, please contact our office
          team and we will be glad to help clarify how they apply to your
          situation.
        </p>
      </section>
    </main>
  );
}

