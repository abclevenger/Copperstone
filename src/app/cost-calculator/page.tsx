import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "Cost Savings Calculator – Compare Office Costs",
  description:
    "See how much you could save with Copperstone Executive Suites vs. a traditional office lease. Interactive calculator for office space, coworking, and virtual offices in Land O' Lakes and South Tampa.",
  alternates: { canonical: "https://copperstone.info/cost-calculator" },
  openGraph: {
    title: "Cost Savings Calculator | Copperstone Executive Suites",
    description:
      "Compare traditional office costs vs Copperstone. See your potential savings instantly.",
    url: "https://copperstone.info/cost-calculator",
  },
};

export default function CostCalculatorPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-4xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Cost Calculator" }]}
        />
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-[#f3c89a]/30 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#a35f24] sm:text-[0.68rem]">
            Interactive Tool
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Cost Savings Calculator
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            See how much you could save with Copperstone vs. a traditional
            office lease. Adjust the sliders to match your situation.
          </p>
        </div>
        <CostCalculator />
      </main>
    </div>
  );
}
