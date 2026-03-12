export const metadata = {
  title: "Accessibility | Copperstone Executive Suites",
};

export default function AccessibilityPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-0 lg:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Accessibility Statement
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          Copperstone Executive Suites is committed to providing an accessible,
          welcoming experience for all guests and clients, both at our physical
          locations and on our website.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          Our Commitment
        </h2>
        <p>
          We aim to make reasonable efforts so that people with disabilities can
          access information about our office and meeting spaces, schedule tours,
          and communicate with our team. This includes considering recognized
          accessibility practices when we update or add new features to our
          site.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          Physical Accessibility
        </h2>
        <p>
          Our locations are designed to serve a wide range of professionals.
          For specific questions about building access, parking, or meeting room
          accommodation needs, please contact us directly so we can review how
          we may assist.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          Website Experience
        </h2>
        <p>
          We strive to design our website with clear structure, readable text,
          and navigable layouts. As we continue improving the site, we welcome
          feedback from visitors who use assistive technologies or have
          particular accessibility needs.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          Need Assistance or Have Feedback?
        </h2>
        <p>
          If you experience difficulty accessing any part of this website or
          need information in an alternative format, please contact our office.
          Let us know the page you were trying to access and the type of
          assistance you need, and we will do our best to help.
        </p>
      </section>
    </main>
  );
}

