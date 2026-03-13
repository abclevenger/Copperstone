"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import {
  PRICING,
  PHONE_SERVICES,
  TRADITIONAL_OFFICE,
  formatPrice,
} from "@/content/pricing";

type SliderConfig = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  format: (v: number) => string;
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
  },
  {
    id: "employees",
    label: "Employees",
    min: 1,
    max: 30,
    step: 1,
    defaultValue: 3,
    format: (v) => `${v} ${v === 1 ? "person" : "people"}`,
  },
  {
    id: "meetingHours",
    label: "Meeting Room Hours / Month",
    min: 0,
    max: 60,
    step: 2,
    defaultValue: 10,
    format: (v) => `${v} hrs/mo`,
  },
  {
    id: "term",
    label: "Lease Term",
    min: 1,
    max: 36,
    step: 1,
    defaultValue: 12,
    format: (v) => `${v} ${v === 1 ? "month" : "months"}`,
  },
];

type CostBreakdown = { label: string; monthly: number };

export default function CostCalculator() {
  const [values, setValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    for (const s of sliders) initial[s.id] = s.defaultValue;
    return initial;
  });
  const [phoneEnabled, setPhoneEnabled] = useState(false);
  const [phoneUsers, setPhoneUsers] = useState(0);

  const update = (id: string, val: number) =>
    setValues((prev) => ({ ...prev, [id]: val }));

  const employees = values.employees ?? 3;

  const handlePhoneToggle = () => {
    const next = !phoneEnabled;
    setPhoneEnabled(next);
    if (next && phoneUsers === 0) setPhoneUsers(employees);
  };

  const { traditional, copperstone, savings, savingsPercent } = useMemo(() => {
    const sqft = values.sqft ?? 500;
    const emp = values.employees ?? 3;
    const meetingHours = values.meetingHours ?? 10;
    const term = values.term ?? 12;

    const tradRent = (sqft * TRADITIONAL_OFFICE.ratePerSqFt) / 12;
    const tradCAM = (sqft * TRADITIONAL_OFFICE.camPerSqFt) / 12;
    const tradBuildout =
      term > 0 ? (sqft * TRADITIONAL_OFFICE.buildoutPerSqFt) / term : 0;
    const tradFurniture =
      term > 0 ? (emp * TRADITIONAL_OFFICE.furniturePerPerson) / term : 0;
    const tradInternet = TRADITIONAL_OFFICE.internetMonthly;
    const tradUtilities = (sqft * TRADITIONAL_OFFICE.utilitiesPerSqFt) / 12;
    const tradInsurance = TRADITIONAL_OFFICE.insuranceMonthly;
    const tradMeetings = meetingHours * TRADITIONAL_OFFICE.meetingRoomRate;
    const tradPhone = phoneEnabled
      ? emp * TRADITIONAL_OFFICE.phonePerUser
      : 0;

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
    if (phoneEnabled) {
      tradBreakdown.push({
        label: `Phone System (${emp} users)`,
        monthly: tradPhone,
      });
    }

    const tradTotal = tradBreakdown.reduce((sum, b) => sum + b.monthly, 0);

    let discount = 0;
    if (term >= 12) discount = PRICING.executiveSuite.discount12Month;
    else if (term >= 6) discount = PRICING.executiveSuite.discount6Month;

    const baseCost =
      emp * PRICING.executiveSuite.perPerson * (1 - discount);
    const extraMeetingHours = Math.max(
      0,
      meetingHours - PRICING.meetingSpace.includedHoursPerMonth
    );
    const meetingCost =
      extraMeetingHours * PRICING.meetingSpace.extraHourRate;
    const phoneCost = phoneEnabled
      ? phoneUsers * PHONE_SERVICES.pricePerUser
      : 0;

    const copBreakdown: CostBreakdown[] = [
      { label: `Suite (${emp} people)`, monthly: baseCost },
      {
        label:
          extraMeetingHours > 0
            ? `Meeting Rooms (+${extraMeetingHours} hrs)`
            : `Meeting Rooms (${PRICING.meetingSpace.includedHoursPerMonth} hrs included)`,
        monthly: meetingCost,
      },
      { label: "Internet, Utilities, Insurance", monthly: 0 },
      { label: "Furniture & Build-out", monthly: 0 },
    ];
    if (phoneEnabled) {
      copBreakdown.push({
        label: `Phone Services (${phoneUsers} ${phoneUsers === 1 ? "user" : "users"})`,
        monthly: phoneCost,
      });
    }

    const copTotal = copBreakdown.reduce((sum, b) => sum + b.monthly, 0);
    const sav = tradTotal - copTotal;
    const pct = tradTotal > 0 ? (sav / tradTotal) * 100 : 0;

    return {
      traditional: { breakdown: tradBreakdown, total: tradTotal },
      copperstone: { breakdown: copBreakdown, total: copTotal },
      savings: sav,
      savingsPercent: pct,
    };
  }, [values, phoneEnabled, phoneUsers]);

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
            const pct =
              ((val - s.min) / (s.max - s.min)) * 100;
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

      {/* ── Phone Services Add-On Toggle ── */}
      <div
        className={`mt-4 rounded-2xl border p-5 shadow-sm transition-all sm:p-6 ${
          phoneEnabled
            ? "border-[#c47a3a]/30 bg-[#fffaf5]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-[#c47a3a]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Add Phone Services
              </p>
              <p className="mt-0.5 text-[0.68rem] text-slate-500">
                {PHONE_SERVICES.shortDescription} —{" "}
                <span className="font-medium text-[#c47a3a]">
                  {formatPrice(PHONE_SERVICES.pricePerUser)}/user/mo
                </span>
              </p>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={phoneEnabled}
            onClick={handlePhoneToggle}
            className={`relative mt-0.5 inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
              phoneEnabled ? "bg-[#c47a3a]" : "bg-slate-200"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transition-transform ${
                phoneEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {phoneEnabled && (
          <div className="mt-4 flex items-center gap-4 border-t border-[#d6b08a]/30 pt-4">
            <label
              htmlFor="phone-users"
              className="text-xs font-medium text-slate-700"
            >
              Phone users:
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPhoneUsers(Math.max(1, phoneUsers - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-bold text-slate-600 transition hover:border-[#c47a3a] hover:text-[#c47a3a]"
              >
                −
              </button>
              <input
                id="phone-users"
                type="number"
                min={PHONE_SERVICES.minUsers}
                max={PHONE_SERVICES.maxUsers}
                value={phoneUsers}
                onChange={(e) =>
                  setPhoneUsers(
                    Math.max(1, Math.min(PHONE_SERVICES.maxUsers, Number(e.target.value) || 1))
                  )
                }
                className="w-14 rounded-lg border border-slate-300 bg-white px-2 py-1 text-center text-sm font-semibold text-slate-900 outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
              />
              <button
                type="button"
                onClick={() =>
                  setPhoneUsers(Math.min(PHONE_SERVICES.maxUsers, phoneUsers + 1))
                }
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-bold text-slate-600 transition hover:border-[#c47a3a] hover:text-[#c47a3a]"
              >
                +
              </button>
            </div>
            <span className="text-xs font-semibold text-[#c47a3a]">
              {formatPrice(phoneUsers * PHONE_SERVICES.pricePerUser)}/mo
            </span>
          </div>
        )}
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
          {savings > 0 ? formatPrice(savings) : "$0"}
        </p>
        {savings > 0 && (
          <p className="mt-1 text-sm font-medium text-emerald-600">
            That&apos;s {savingsPercent.toFixed(0)}% less than a traditional
            lease
          </p>
        )}
        {savings > 0 && (
          <p className="mt-0.5 text-xs text-emerald-600/80">
            {formatPrice(savings * 12)}/year in potential savings
          </p>
        )}
      </div>

      {/* ── Side-by-Side Breakdown ── */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Traditional Office Lease
          </h3>
          <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            {formatPrice(traditional.total)}
            <span className="text-sm font-normal text-slate-500">/mo</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-slate-400 transition-all duration-500"
              style={{ width: `${(traditional.total / maxCost) * 100}%` }}
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
                  {formatPrice(item.monthly)}
                </span>
              </li>
            ))}
          </ul>
        </div>

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
            {formatPrice(copperstone.total)}
            <span className="text-sm font-normal text-slate-500">/mo</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f3c89a]/30">
            <div
              className="h-full rounded-full bg-linear-to-r from-[#f3c89a] to-[#c47a3a] transition-all duration-500"
              style={{ width: `${(copperstone.total / maxCost) * 100}%` }}
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
                    formatPrice(item.monthly)
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
            `${PRICING.meetingSpace.includedHoursPerMonth} hrs meeting room/mo`,
            "Professional address",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs text-slate-600"
            >
              <svg
                className="h-3.5 w-3.5 shrink-0 text-[#c47a3a]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
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
        and term. Phone Services at {formatPrice(PHONE_SERVICES.pricePerUser)}/user/mo;
        traditional phone at {formatPrice(TRADITIONAL_OFFICE.phonePerUser)}/user/mo.{" "}
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
