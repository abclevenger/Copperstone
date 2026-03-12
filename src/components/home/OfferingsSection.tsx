import type { Offering } from "@/content/home";

type OfferingsSectionProps = {
  offerings: Offering[];
};

export default function OfferingsSection({ offerings }: OfferingsSectionProps) {
  return (
    <section id="offerings" className="mt-16 lg:mt-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            Office & Meeting Space
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Workspace options designed around outcomes, not just square footage.
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Choose the setup that matches your current stage and gives you a practical path to scale
            without unnecessary overhead.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {offerings.map((offering) => (
          <article
            key={offering.title}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-300/70 hover:shadow-md"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{offering.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {offering.description}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                {offering.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
