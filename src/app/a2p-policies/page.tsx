export const metadata = {
  title: "A2P Messaging Policy | Copperstone Executive Suites",
};

export default function A2PPoliciesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-0 lg:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        A2P Messaging &amp; SMS Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          From time to time, Copperstone Executive Suites may use text messaging
          (SMS) or similar application-to-person (&quot;A2P&quot;) messaging to
          communicate with you about tours, reservations, or services you have
          requested.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          When You May Receive Messages
        </h2>
        <p>You may receive messages from us when you:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Request a tour or more information about our spaces.</li>
          <li>Ask us to confirm, update, or cancel a reservation or meeting.</li>
          <li>
            Opt in to receive reminders or other communications related to our
            services.
          </li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          Message Frequency and Costs
        </h2>
        <p>
          Message frequency will vary based on your interactions with us. We do
          not charge separate fees for messages, but your mobile carrier&apos;s
          standard message and data rates may apply.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          How to Opt Out or Get Help
        </h2>
        <p>
          You can opt out of receiving marketing or reminder messages at any time
          by replying <span className="font-mono font-medium">STOP</span> to a
          message you receive from us. To request assistance or more information
          by text, you may reply{" "}
          <span className="font-mono font-medium">HELP</span>.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          Responsible Use
        </h2>
        <p>
          We aim to use messaging only in ways that are respectful and relevant
          to your relationship with Copperstone Executive Suites. We do not sell
          your mobile number, and we do not permit messaging that is abusive,
          misleading, or unrelated to our services.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          Questions
        </h2>
        <p>
          If you have questions about this A2P Messaging &amp; SMS Policy or how
          it applies to you, please contact our office and we will be happy to
          help.
        </p>
      </section>
    </main>
  );
}

