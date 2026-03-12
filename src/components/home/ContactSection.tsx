import GHLInlineForm from "@/components/GHLInlineForm";

type ContactSectionProps = {
  phoneLandOLakes: string;
  phoneSouthTampa: string;
};

export default function ContactSection({
  phoneLandOLakes,
  phoneSouthTampa,
}: ContactSectionProps) {
  return (
    <section id="contact" className="mt-12 lg:mt-16">
      <div className="form-section">
        <div className="form-layout">
          <div className="form-copy">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Schedule a Tour
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Book a guided tour and get a right-fit workspace plan.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Share a few details and we&apos;ll reach out to confirm your tour time and help you
              explore the right office or meeting space for your needs.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-600 sm:text-sm">
              <p className="font-semibold text-slate-900">What happens after you submit:</p>
              <ul className="mt-2 space-y-1.5">
                <li>• We contact you within one business day</li>
                <li>• We confirm your tour time and location</li>
                <li>• We recommend the best-fit setup based on your needs</li>
              </ul>
            </div>
            <div className="mt-4 flex flex-col gap-2 text-xs text-slate-600 sm:text-sm">
              <p>
                <span className="font-semibold text-slate-900">Land O&apos; Lakes:</span>{" "}
                <a
                  href={`tel:${phoneLandOLakes}`}
                  className="font-semibold text-[#a0621e] underline underline-offset-2"
                >
                  {phoneLandOLakes}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">South Tampa:</span>{" "}
                <a
                  href={`tel:${phoneSouthTampa}`}
                  className="font-semibold text-[#a0621e] underline underline-offset-2"
                >
                  {phoneSouthTampa}
                </a>
              </p>
            </div>
            <div className="mt-4 space-y-2 text-xs text-slate-600 sm:text-sm">
              <p className="font-semibold text-slate-900">Common questions before booking:</p>
              <p>
                <span className="font-semibold text-slate-800">How long does a tour take?</span>{" "}
                Typically 20-30 minutes.
              </p>
              <p>
                <span className="font-semibold text-slate-800">
                  Can you help me choose the right option?
                </span>{" "}
                Yes, we guide you based on workflow, client needs, and budget.
              </p>
              <p>
                <span className="font-semibold text-slate-800">Is this a sales-heavy call?</span> No.
                The tour is consultative and focused on fit.
              </p>
            </div>
          </div>
          <GHLInlineForm />
        </div>
      </div>
    </section>
  );
}
