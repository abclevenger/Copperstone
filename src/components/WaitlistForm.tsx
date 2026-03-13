"use client";

import { useState } from "react";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/mNr3aCm0bvD70r49HVTH/webhook-trigger/73c93ad0-2ad1-45f4-aff5-af3311c36646";

const SPACE_TYPES = [
  "Private Executive Office",
  "Team / Multi-Room Suite",
  "Dedicated Desk",
  "Coworking Membership",
  "Virtual Office",
  "Not Sure Yet",
] as const;

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [people, setPeople] = useState("");
  const [location, setLocation] = useState("");
  const [timeline, setTimeline] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    trackCTAClick("waitlist_signup");

    try {
      await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company: company || "Not provided",
          space_type: spaceType || "Not specified",
          number_of_people: people || "Not specified",
          preferred_location: location || "No preference",
          move_in_timeline: timeline || "Not specified",
          notes: notes || "",
          source: "Copperstone Waitlist Form",
          signup_date: new Date().toISOString(),
          page_url:
            typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-6 text-center sm:p-8">
        <svg
          className="mx-auto h-10 w-10 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-3 text-lg font-semibold text-green-900">
          You&apos;re on the list!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-green-700">
          Thank you for your interest in Copperstone Executive Suites. We&apos;ll
          reach out as soon as a space matching your needs becomes available.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/meeting-space"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d]"
          >
            Browse Meeting Rooms
          </Link>
          <Link
            href="/business-solutions"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d]"
          >
            Explore Business Solutions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Contact Info */}
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
        Your Information
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="wl-name" className="block text-xs font-medium text-slate-700">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="wl-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="wl-company" className="block text-xs font-medium text-slate-700">
            Company / Business Name
          </label>
          <input
            id="wl-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="wl-email" className="block text-xs font-medium text-slate-700">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="wl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="wl-phone" className="block text-xs font-medium text-slate-700">
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            id="wl-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Space Needs */}
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
        What Are You Looking For?
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="wl-space" className="block text-xs font-medium text-slate-700">
            Type of Space
          </label>
          <select
            id="wl-space"
            value={spaceType}
            onChange={(e) => setSpaceType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
          >
            <option value="">Select…</option>
            {SPACE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="wl-people" className="block text-xs font-medium text-slate-700">
            Number of People
          </label>
          <select
            id="wl-people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
          >
            <option value="">Select…</option>
            <option value="Just me">Just me</option>
            <option value="2-3">2–3</option>
            <option value="4-6">4–6</option>
            <option value="7-10">7–10</option>
            <option value="11-20">11–20</option>
            <option value="20+">20+</option>
          </select>
        </div>
        <div>
          <label htmlFor="wl-location" className="block text-xs font-medium text-slate-700">
            Preferred Location
          </label>
          <select
            id="wl-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
          >
            <option value="">No preference</option>
            <option value="Land O' Lakes">Land O&apos; Lakes</option>
            <option value="South Tampa">South Tampa</option>
            <option value="Either location">Either location</option>
          </select>
        </div>
        <div>
          <label htmlFor="wl-timeline" className="block text-xs font-medium text-slate-700">
            When Do You Need Space?
          </label>
          <select
            id="wl-timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
          >
            <option value="">Select…</option>
            <option value="Immediately">Immediately</option>
            <option value="Within 30 days">Within 30 days</option>
            <option value="1-3 months">1–3 months</option>
            <option value="3-6 months">3–6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-4">
        <label htmlFor="wl-notes" className="block text-xs font-medium text-slate-700">
          Anything else we should know?
        </label>
        <textarea
          id="wl-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
          placeholder="Specific requirements, budget range, hours of operation needed, etc."
        />
      </div>

      {error && (
        <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
          Something went wrong. Please try again or{" "}
          <Link
            href="/contact"
            className="font-semibold underline underline-offset-2"
          >
            contact us directly
          </Link>
          .
        </p>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24] disabled:opacity-50 disabled:shadow-none"
        >
          {submitting ? "Adding You to the List…" : "Join the Waitlist"}
        </button>
        <p className="text-[0.62rem] leading-relaxed text-slate-400 sm:max-w-xs sm:text-right">
          We&apos;ll only use your information to contact you about space
          availability. No spam, no sharing.
        </p>
      </div>
    </form>
  );
}
