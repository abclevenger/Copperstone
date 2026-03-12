export default function InvestmentSection() {
  return (
    <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:mt-20 lg:p-8">
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
        Investment Logic
      </h2>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        A faster path to a professional setup than traditional office overhead.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Traditional Route
          </p>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 sm:text-sm">
            <li>Long lease commitments</li>
            <li>Furniture and buildout costs</li>
            <li>Utilities and internet setup burden</li>
            <li>Ongoing admin overhead</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#d6b08a] bg-[#fffaf5] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a4f3d]">
            Copperstone Route
          </p>
          <ul className="mt-3 space-y-2 text-xs text-slate-700 sm:text-sm">
            <li>Client-ready environment without heavy setup delay</li>
            <li>Flexible options aligned to your current growth stage</li>
            <li>Utilities, internet, and shared amenities already in place</li>
            <li>More time focused on clients, delivery, and revenue</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
