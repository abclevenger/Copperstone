import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Copperstone Executive Suites",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-0 lg:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          This Privacy Policy explains how Copperstone Executive Suites collects,
          uses, and protects information we receive from website visitors,
          prospective clients, and current clients.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          1. Information We Collect
        </h2>
        <p>We may collect the following types of information:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-medium">Contact details</span> such as your
            name, email address, phone number, and company name when you request
            a tour, submit a form, or contact us.
          </li>
          <li>
            <span className="font-medium">Business details</span> you share when
            inquiring about or entering into an office or meeting space
            agreement.
          </li>
          <li>
            <span className="font-medium">Usage data</span> and technical
            information, such as pages visited, browser type, and approximate
            location, collected through standard website analytics tools.
          </li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          2. How We Use Your Information
        </h2>
        <p>We use the information we collect to:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Respond to your inquiries and schedule tours.</li>
          <li>Provide, manage, and improve our office and meeting services.</li>
          <li>
            Send important updates related to your license, membership, or
            reservations.
          </li>
          <li>
            Share occasional marketing communications about our services, which
            you can opt out of at any time.
          </li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          3. Sharing of Information
        </h2>
        <p>
          We do not sell your personal information. We may share limited
          information with trusted vendors or partners who help us operate our
          business (for example, technology and marketing service providers),
          only to the extent reasonably necessary for them to perform their
          services for us.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          4. Data Security
        </h2>
        <p>
          We use reasonable administrative and technical measures to help
          protect the information we manage. However, no website or email
          transmission is completely secure, and we cannot guarantee absolute
          security of information transmitted over the internet.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          5. Your Choices
        </h2>
        <p>
          You may request updates or corrections to your contact details, or ask
          to be removed from our marketing communications, by contacting our
          office. We may still contact you with important non-marketing
          communications related to active agreements or reservations.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          6. Third-Party Links
        </h2>
        <p>
          Our website may link to other sites for convenience or reference.
          Those sites are governed by their own privacy policies. We encourage
          you to review those policies before providing personal information to
          third parties.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          7. Updates to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &quot;Last updated&quot; date at the top. Your
          continued use of our website or services after changes take effect
          means you accept the updated policy.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          8. Contact Us
        </h2>
        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, please contact our office team.
        </p>
      </section>
    </main>
  );
}

