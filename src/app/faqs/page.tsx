import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs – Office & Meeting Space in Land O' Lakes & South Tampa",
  description:
    "Answers to common questions about executive suites, coworking, virtual offices, and meeting space at Copperstone Executive Suites in Land O' Lakes and South Tampa, FL.",
  alternates: { canonical: "https://copperstone.info/faqs" },
  openGraph: {
    title: "FAQs | Copperstone Executive Suites",
    description:
      "Common questions about office space, meeting rooms, coworking, and virtual offices at Copperstone Executive Suites.",
    url: "https://copperstone.info/faqs",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
        FAQs
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Search or browse answers to common questions about Copperstone Executive
        Suites.
      </p>

      <InteractiveFAQ />
    </main>
  );
}
