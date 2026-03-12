import type { Step } from "@/content/home";

type StepsSectionProps = {
  steps: Step[];
};

export default function StepsSection({ steps }: StepsSectionProps) {
  return (
    <section className="mt-16 border-y border-slate-200 bg-slate-50/70 py-10 lg:mt-20 lg:py-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            How It Works
          </h2>
          <p className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            A clear path from workspace friction to reliable, professional operations.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            We guide you to the right workspace model now, with room to expand as your business
            grows.
          </p>
        </div>
        <ol className="space-y-4">
          {steps.map(({ step, title, body }) => (
            <li
              key={step}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c47a3a] text-xs font-semibold text-white shadow shadow-[#a35f24]/40">
                {step}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
