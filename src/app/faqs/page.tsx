export const metadata = {
  title: "Frequently Asked Questions | Copperstone Executive Suites",
};

const accent = "#c47a3a";

const faqs = [
  {
    question: "What types of space do you offer?",
    answer:
      "We offer private executive suites, coworking and business club memberships, virtual office services, and meeting and event space in a range of sizes.",
  },
  {
    question: "Where are you located?",
    answer:
      "We have two locations: Land O' Lakes on U.S. 41 about one mile north of State Road 54, and South Tampa on S MacDill Ave.",
  },
  {
    question: "Is internet included?",
    answer:
      "Yes. High‑speed internet is included for our office and coworking clients and available in our meeting and event spaces.",
  },
  {
    question: "What is included with an executive suite?",
    answer:
      "Executive suites include a private, lockable office with access to shared reception areas, restrooms, break space, parking, utilities, and other common amenities. Furnished options may be available—ask our team for current availability.",
  },
  {
    question: "Do you offer virtual office services?",
    answer:
      "Yes. Virtual office plans typically include a professional business address at one of our locations and mail handling, with options to reserve meeting rooms as needed.",
  },
  {
    question: "How do I schedule a tour?",
    answer:
      "You can use the Schedule a Tour form on our homepage or call either location directly. Our team will confirm a time and show you the options that best fit how you work.",
  },
  {
    question: "Can I book a conference room without renting an office?",
    answer:
      "Yes. Meeting and conference rooms can be reserved even if you do not have a full‑time office with us, subject to availability and our booking policies.",
  },
  {
    question: "Are utilities and coffee included?",
    answer:
      "Yes. For our office and coworking clients, utilities are included and we provide free‑flowing coffee in shared areas.",
  },
  {
    question: "How long are your agreements?",
    answer:
      "We offer a variety of terms depending on the type of space and your needs. During your tour, we can walk through current options for short‑term and longer‑term agreements.",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way to get started is to schedule a tour. From there, we will help you choose the right space and walk through next steps for moving in or booking your first meeting.",
  },
];

export default function FAQsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent,var(--color-pink-300))" style={{ ["--accent" as string]: accent }}>
        FAQs
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Answers to common questions about Copperstone Executive Suites.
      </p>

      <section className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
        {faqs.map((faq) => (
          <div key={faq.question} className="px-5 py-4 text-sm leading-relaxed">
            <h2 className="text-[0.9rem] font-semibold text-slate-900">
              {faq.question}
            </h2>
            <p className="mt-1 text-slate-700">{faq.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

