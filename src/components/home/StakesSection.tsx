export default function StakesSection() {
  return (
    <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:mt-20 lg:p-8">
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
        Why This Matters Now
      </h2>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        You can outgrow your workspace before you outgrow your business.
      </p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
        When your environment is inconsistent, your business feels inconsistent. Client meetings feel
        less polished, focus gets fragmented, and growth decisions get delayed.
      </p>
      <ul className="mt-5 grid gap-3 text-xs text-slate-700 sm:grid-cols-2 sm:text-sm">
        <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          Lost focus from noisy, distracting work environments
        </li>
        <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          Lower client confidence in important in-person meetings
        </li>
        <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          Slower team coordination and delivery quality
        </li>
        <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          Hidden setup overhead from patchwork workspace solutions
        </li>
      </ul>
    </section>
  );
}
