"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

type SliderConfig = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  format: (v: number) => string;
  unit: string;
};

const sliders: SliderConfig[] = [
  {
    id: "sqft",
    label: "Office Size",
    min: 100,
    max: 3000,
    step: 50,
    defaultValue: 500,
    format: (v) => `${v.toLocaleString()} sq ft`,
    unit: "sq ft",
  },
  {
    id: "employees",
    label: "Employees",
    min: 1,
    max: 30,
    step: 1,
    defaultValue: 3,
    format: (v) => `${v} ${v === 1 ? "person" : "people"}`,
    unit: "people",
  },
  {
    id: "meetingHours",
    label: "Meeting Room Hours / Month",
    min: 0,
    max: 60,
    step: 2,
    defaultValue: 10,
    format: (v) => `${v} hrs/mo`,
    unit: "hrs/mo",
  },
  {
    id: "term",
    label: "Lease Term",
    min: 1,
    max: 36,
    step: 1,
    defaultValue: 12,
    format: (v) => `${v} ${v === 1 ? "month" : "months"}`,
    unit: "months",
  },
];

const TRADITIONAL_RATE_PER_SQFT = 28;
const TRADITIONAL_CAM_PER_SQFT = 8;
const TRADITIONAL_BUILDOUT_PER_SQFT = 45;
const TRADITIONAL_FURNITURE_PER_PERSON = 2000;
const TRADITIONAL_INTERNET_MONTHLY = 250;
const TRADITIONAL_UTILITIES_PER_SQFT = 3;
const TRADITIONAL_INSURANCE_MONTHLY = 200;
const TRADITIONAL_MEETING_RATE = 75;

const COPPERSTONE_BASE_PER_PERSON = 499;
const COPPERSTONE_MEETING_INCLUDED = 8;
const COPPERSTONE_EXTRA_MEETING_RATE = 49;
const COPPERSTONE_DISCOUNT_6MO = 0.05;
const COPPERSTONE_DISCOUNT_12MO = 0.1;

type CostBreakdown = {
  label: string;
  monthly: number;
};

function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function CostCalculator() {
  const [values, setValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    for (const s of sliders) initial[s.id] = s.defaultValue;
    return initial;
  });

  const update = (id: string, val: number) =>
    setValues((prev) => ({ ...prev, [id]: val }));

  const { traditional, copperstone, savings, savingsPercent } = useMemo(() => {
    const sqft = values.sqft ?? 500;
    const employees = values.employees ?? 3;
    const meetingHours = values.meetingHours ?? 10;
    const term = values.term ?? 12;

    const tradRent = (sqft * TRADITIONAL_RATE_PER_SQFT) / 12;
    const tradCAM = (sqft * TRADITIONAL_CAM_PER_SQFT) / 12;
    const tradBuildout =
      term > 0 ? (sqft * TRADITIONAL_BUILDOUT_PER_SQFT) / term : 0;
    const tradFurniture =
      term > 0 ? (employees * TRADITIONAL_FURNITURE_PER_PERSON) / term : 0;
    const tradInternet = TRADITIONAL_INTERNET_MONTHLY;
    const tradUtilities = (sqft * TRADITIONAL_UTILITIES_PER_SQFT) / 12;
    const tradInsurance = TRADITIONAL_INSURANCE_MONTHLY;
    const tradMeetings = meetingHours * TRADITIONAL_MEETING_RATE;

    const tradBreakdown: CostBreakdown[] = [
      { label: "Base Rent", monthly: tradRent },
      { label: "CAM / NNN Fees", monthly: tradCAM },
      { label: "Build-out (Amortized)", monthly: tradBuildout },
      { label: "Furniture (Amortized)", monthly: tradFurniture },
      { label: "Internet", monthly: tradInternet },
      { label: "Utilities", monthly: tradUtilities },
      { label: "Insurance", monthly: tradInsurance },
      { label: "Meeting Room Rental", monthly: tradMeetings },
    ];

    const tradTotal = tradBreakdown.reduce((sum, b) => sum + b.monthly, 0);

    let discount = 0;
    if (term >= 12) discount = COPPERSTONE_DISCOUNT_12MO;
    else if (term >= 6) discount = COPPERSTONE_DISCOUNT_6MO;

    const baseCost = employees * COPPERSTONE_BASE_PER_PERSON * (1 - discount);
    const extraMeetingHours = Math.max(
      0,
      meetingHours - COPPERSTONE_MEETING_INCLUDED
    );
    const meetingCost = extraMeetingHours * COPPERSTONE_EXTRA_MEETING_RATE;

    const copBreakdown: CostBreakdown[] = [
      { label: `Suite (${employees} people)`, monthly: baseCost },
      {
        label:
          extraMeetingHours > 0
            ? `Meeting Rooms (+${extraMeetingHours} hrs)`
            : "Meeting Rooms (8 hrs included)",
        monthly: meetingCost,
      },
      { label: "Internet, Utilities, Insurance", monthly: 0 },
      { label: "Furniture & Build-out", monthly: 0 },
    ];

    const copTotal = copBreakdown.reduce((sum, b) => sum + b.monthly, 0);

    const sav = tradTotal - copTotal;
    const pct = tradTotal > 0 ? (sav / tradTotal) * 100 : 0;

    return {
      traditional: { breakdown: tradBreakdown, total: tradTotal },
      copperstone: { breakdown: copBreakdown, total: copTotal },
      savings: sav,
      savingsPercent: pct,
    };
  }, [values]);

  const maxCost = Math.max(traditional.total, copperstone.total, 1);

  return (
    <div className="mt-10">
      {/* ── Sliders ── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
          Your Situation
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {sliders.map((s) => {
            const val = values[s.id] ?? s.defaultValue;
            const pct = ((val - s.min) / (s.max - s.min)) * 100;
            return (
              <div key={s.id}>
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor={`slider-${s.id}`}
                    className="text-xs font-medium text-slate-700"
                  >
                    {s.label}
                  </label>
                  <span className="text-sm font-semibold text-[#c47a3a]">
                    {s.format(val)}
                  </span>
                </div>
                <div className="relative mt-2">
                  <div className="pointer-events-none absolute top-1/2 h-2 w-full -translate-y-1/2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-[#f3c89a] to-[#c47a3a]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <input
                    id={`slider-${s.id}`}
                    type="range"
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    value={val}
                    onChange={(e) => update(s.id, Number(e.target.value))}
                    className="relative z-10 h-6 w-full cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#c47a3a] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-md [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#c47a3a] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Savings Summary ── */}
      <div
        className={`mt-6 rounded-2xl border p-5 text-center shadow-sm sm:p-6 ${
          savings > 0
            ? "border-emerald-200 bg-emerald-50"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Estimated Monthly Savings
        </p>
        <p
          className={`mt-1 text-3xl font-bold tracking-tight sm:text-4xl ${
            savings > 0 ? "text-emerald-700" : "text-slate-800"
          }`}
        >
          {savings > 0 ? `${formatCurrency(savings)}` : "$0"}
        </p>
        {savings > 0 && (
          <p className="mt-1 text-sm font-medium text-emerald-600">
            That&apos;s {savingsPercent.toFixed(0)}% less than a traditional
            lease
          </p>
        )}
        {savings > 0 && (
          <p className="mt-0.5 text-xs text-emerald-600/80">
            {formatCurrency(savings * 12)}/year in potential savings
          </p>
        )}
      </div>

      {/* ── Side-by-Side Breakdown ── */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Traditional */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Traditional Office Lease
          </h3>
          <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            {formatCurrency(traditional.total)}
            <span className="text-sm font-normal text-slate-500">/mo</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-slate-400 transition-all duration-500"
              style={{
                width: `${(traditional.total / maxCost) * 100}%`,
              }}
            />
          </div>
          <ul className="mt-4 space-y-2">
            {traditional.breakdown.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between text-xs"
              >
                <span className="text-slate-600">{item.label}</span>
                <span className="font-medium text-slate-800">
                  {formatCurrency(item.monthly)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Copperstone */}
        <div className="rounded-2xl border border-[#c47a3a]/30 bg-[#fffaf5] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a35f24]">
              Copperstone
            </h3>
            {savings > 0 && (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.62rem] font-semibold text-emerald-700">
                SAVES {savingsPercent.toFixed(0)}%
              </span>
            )}
          </div>
          <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            {formatCurrency(copperstone.total)}
            <span className="text-sm font-normal text-slate-500">/mo</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f3c89a]/30">
            <div
              className="h-full rounded-full bg-linear-to-r from-[#f3c89a] to-[#c47a3a] transition-all duration-500"
              style={{
                width: `${(copperstone.total / maxCost) * 100}%`,
              }}
            />
          </div>
          <ul className="mt-4 space-y-2">
            {copperstone.breakdown.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between text-xs"
              >
                <span className="text-slate-600">{item.label}</span>
                <span className="font-medium text-slate-800">
                  {item.monthly === 0 ? (
                    <span className="text-emerald-600">Included</span>
                  ) : (
                    formatCurrency(item.monthly)
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── What's Included ── */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-sm font-semibold text-slate-900">
          Included at No Extra Cost with Copperstone
        </h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Reception & front desk",
            "High-speed fiber internet",
            "All utilities & cleaning",
            "Furniture & build-out",
            "Kitchen & break room",
            "Mail & package handling",
            "24/7 building access",
            `${COPPERSTONE_MEETING_INCLUDED} hrs meeting room/mo`,
            "Professional address",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-slate-600">
              <svg
                className="h-3.5 w-3.5 shrink-0 text-[#c47a3a]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="mt-8 rounded-3xl bg-linear-to-br from-[#1e293b] to-[#0f172a] p-6 text-center sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c89a]">
          Ready to Save?
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
          See the space in person
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-300">
          Book a quick tour and we&apos;ll walk you through exactly which setup
          matches your budget and workflow.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/#contact"
            onClick={() => trackCTAClick("calculator_tour_cta")}
            className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
          >
            Schedule a Tour
          </Link>
          <a
            href="tel:+18132987363"
            onClick={() => trackCTAClick("calculator_phone_cta")}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-white/40 hover:text-white"
          >
            Call (813) 298-7363
          </a>
        </div>
      </div>

      <p className="mt-4 text-center text-[0.62rem] leading-relaxed text-slate-400">
        *Estimates are for illustration only. Traditional office costs based on
        Tampa Bay averages. Copperstone pricing varies by location, suite size,
        and term.{" "}
        <Link
          href="/contact"
          className="underline underline-offset-2 hover:text-[#c47a3a]"
        >
          Contact us
        </Link>{" "}
        for a personalized quote.
      </p>
    </div>
  );
}
