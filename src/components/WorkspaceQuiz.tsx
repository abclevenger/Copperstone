"use client";

import { useState } from "react";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

type Answer = { label: string; value: string };
type Question = { id: string; question: string; answers: Answer[] };

const questions: Question[] = [
  {
    id: "team-size",
    question: "How many people need workspace?",
    answers: [
      { label: "Just me", value: "1" },
      { label: "2–5 people", value: "2-5" },
      { label: "6–15 people", value: "6-15" },
      { label: "15+", value: "15+" },
    ],
  },
  {
    id: "client-meetings",
    question: "How often do you meet clients in person?",
    answers: [
      { label: "Rarely or never", value: "rarely" },
      { label: "A few times a month", value: "monthly" },
      { label: "Weekly", value: "weekly" },
      { label: "Daily", value: "daily" },
    ],
  },
  {
    id: "privacy",
    question: "How important is a private, dedicated space?",
    answers: [
      { label: "Not important — open space is fine", value: "low" },
      { label: "Nice to have, not required", value: "medium" },
      { label: "Important — I need my own space", value: "high" },
      { label: "Critical — confidential work", value: "critical" },
    ],
  },
  {
    id: "commitment",
    question: "What kind of commitment works best?",
    answers: [
      { label: "Day-by-day flexibility", value: "daily" },
      { label: "Month-to-month", value: "monthly" },
      { label: "6–12 month term is fine", value: "annual" },
      { label: "I just need a business address", value: "address" },
    ],
  },
  {
    id: "budget",
    question: "What's your monthly workspace budget?",
    answers: [
      { label: "Under $200/mo", value: "low" },
      { label: "$200–$500/mo", value: "mid" },
      { label: "$500–$1,000/mo", value: "high" },
      { label: "$1,000+/mo", value: "premium" },
    ],
  },
];

type Recommendation = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  href: string;
  ctaLabel: string;
};

const recommendations: Record<string, Recommendation> = {
  "virtual-office": {
    title: "Virtual Office",
    tagline: "Professional presence without the overhead",
    description:
      "You need credibility and a business address but don't need physical space every day. A virtual office gives you a professional presence, mail handling, and on-demand meeting rooms.",
    features: [
      "Professional business address",
      "Mail & package handling",
      "On-demand meeting room access",
      "Business credibility from day one",
    ],
    price: "Starting from $99/mo",
    href: "/office-space-for-rent",
    ctaLabel: "Learn About Virtual Offices",
  },
  coworking: {
    title: "Coworking & Business Club",
    tagline: "Flexible workspace when you need it",
    description:
      "You want a professional environment without a long commitment. Coworking gives you flexible access, community, and all the amenities — without a dedicated office.",
    features: [
      "Flexible workspace access",
      "Professional environment",
      "High-speed internet & coffee",
      "Meeting room access included",
    ],
    price: "Starting from $199/mo",
    href: "/office-space-for-rent",
    ctaLabel: "Explore Coworking",
  },
  "executive-suite": {
    title: "Executive Suite",
    tagline: "Your own private, client-ready office",
    description:
      "You need a dedicated space for focused work and client-facing credibility. An executive suite gives you a private, lockable office with reception and full amenities included.",
    features: [
      "Private, lockable office",
      "Reception & lobby presence",
      "High-speed internet & utilities",
      "Conference room access",
    ],
    price: "Starting from $499/mo",
    href: "/executive-suites",
    ctaLabel: "View Executive Suites",
  },
  "meeting-space": {
    title: "Meeting & Event Space",
    tagline: "Professional rooms for every occasion",
    description:
      "Your primary need is client-facing meeting space — not a full-time office. Reserve conference rooms and event spaces as needed, with no membership required.",
    features: [
      "Conference rooms for 2–20",
      "AV & presentation equipment",
      "Event space available",
      "Book by the hour or day",
    ],
    price: "Starting from $49/hr",
    href: "/meeting-space",
    ctaLabel: "View Meeting Rooms",
  },
};

function getRecommendation(answers: Record<string, string>): string {
  const { "team-size": size, "client-meetings": meetings, privacy, commitment, budget } = answers;

  if (commitment === "address") return "virtual-office";
  if (budget === "low" && privacy === "low") return "virtual-office";
  if (budget === "low") return "coworking";

  if (privacy === "critical" || privacy === "high") {
    return "executive-suite";
  }

  if (meetings === "daily" || meetings === "weekly") {
    if (commitment === "daily") return "meeting-space";
    if (size === "1" && budget === "mid") return "coworking";
    return "executive-suite";
  }

  if (size === "6-15" || size === "15+") return "executive-suite";
  if (commitment === "daily") return "coworking";
  if (budget === "mid" && meetings === "rarely") return "coworking";

  return "coworking";
}

export default function WorkspaceQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const total = questions.length;
  const progress = ((step + (showResult ? 1 : 0)) / total) * 100;

  const handleAnswer = (questionId: string, value: string) => {
    const updated = { ...answers, [questionId]: value };
    setAnswers(updated);

    if (step < total - 1) {
      setStep(step + 1);
    } else {
      trackCTAClick("workspace_quiz_completed");
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const recKey = getRecommendation(answers);
  const rec = recommendations[recKey];
  const currentQ = questions[step];

  return (
    <div className="mt-10">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>
            {showResult
              ? "Your Result"
              : `Question ${step + 1} of ${total}`}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-[#f3c89a] to-[#c47a3a] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {showResult && rec ? (
        /* ── Result ── */
        <div className="animate-fade-in">
          <div className="rounded-3xl border border-[#c47a3a]/30 bg-[#fffaf5] p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a35f24]">
              We Recommend
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {rec.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-[#8a4f3d]">
              {rec.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {rec.description}
            </p>

            <ul className="mt-5 space-y-2">
              {rec.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#c47a3a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-lg font-semibold text-slate-900">
              {rec.price}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={rec.href}
                className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
              >
                {rec.ctaLabel}
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d]"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={restart}
              className="text-xs font-medium text-slate-500 underline underline-offset-2 transition hover:text-[#c47a3a]"
            >
              Retake Quiz
            </button>
            <div className="flex gap-2">
              {Object.keys(recommendations).map((key) => (
                <span
                  key={key}
                  className={`inline-block h-2 w-2 rounded-full ${
                    key === recKey ? "bg-[#c47a3a]" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : currentQ ? (
        /* ── Question ── */
        <div key={currentQ.id} className="animate-fade-in">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {currentQ.question}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {currentQ.answers.map((a) => {
              const isSelected = answers[currentQ.id] === a.value;
              return (
                <button
                  key={a.value}
                  type="button"
                  onClick={() => handleAnswer(currentQ.id, a.value)}
                  className={`rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-all ${
                    isSelected
                      ? "border-[#c47a3a] bg-[#fffaf5] text-[#8a4f3d] shadow-md"
                      : "border-slate-200 bg-white text-slate-700 shadow-sm hover:border-[#c47a3a]/40 hover:shadow-md"
                  }`}
                >
                  {a.label}
                </button>
              );
            })}
          </div>

          {step > 0 && (
            <button
              type="button"
              onClick={goBack}
              className="mt-5 text-xs font-medium text-slate-500 underline underline-offset-2 transition hover:text-[#c47a3a]"
            >
              ← Back
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
