export default function BuyerFitSection() {
  return (
    <section className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
          Best Fit For
        </h2>
        <ul className="mt-3 space-y-2 text-xs text-slate-700 sm:text-sm">
          <li>Professionals who meet with clients and need a credible setting</li>
          <li>Teams upgrading from a home office or fragmented coworking setup</li>
          <li>Businesses that want flexibility without traditional lease friction</li>
          <li>Owners focused on productivity, consistency, and growth</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
          Probably Not a Fit If
        </h2>
        <ul className="mt-3 space-y-2 text-xs text-slate-700 sm:text-sm">
          <li>You only need occasional drop-in coffee shop alternatives</li>
          <li>You are looking for the absolute cheapest workspace option only</li>
          <li>You do not need client-facing professionalism in your environment</li>
          <li>You are not ready to commit to a consistent work routine</li>
        </ul>
      </div>
    </section>
  );
}
