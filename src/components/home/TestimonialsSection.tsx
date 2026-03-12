"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: "Land O' Lakes" | "South Tampa";
  stars: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Best prices and facilities we found. Always clean and kept in great condition. The staff is excellent and very responsive.",
    name: "Florida Water Testing",
    role: "Business",
    location: "Land O' Lakes",
    stars: 5,
  },
  {
    quote:
      "Interior is top notch, quality is superior. I have nothing but an A+ perspective on my tour and the facility.",
    name: "Tyrell Scott",
    role: "Client",
    location: "Land O' Lakes",
    stars: 5,
  },
  {
    quote:
      "The office space is beautiful and the staff is incredibly professional. Perfect for client meetings and daily operations.",
    name: "Sarah M.",
    role: "Attorney",
    location: "South Tampa",
    stars: 5,
  },
  {
    quote:
      "Moving from a home office to Copperstone was the best business decision I made this year. The professionalism is immediate.",
    name: "David K.",
    role: "Financial Advisor",
    location: "Land O' Lakes",
    stars: 5,
  },
  {
    quote:
      "We use their conference rooms every week. Always clean, tech-ready, and priced fairly. Highly recommend.",
    name: "Rachel T.",
    role: "Team Lead",
    location: "Land O' Lakes",
    stars: 5,
  },
  {
    quote:
      "The virtual office plan gave my startup instant credibility with a professional business address. Game changer.",
    name: "Marcus L.",
    role: "Startup Founder",
    location: "South Tampa",
    stars: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "Land O' Lakes" | "South Tampa">("all");

  const filtered =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.location === activeFilter);

  return (
    <section className="mt-16 lg:mt-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            What Our Clients Say
          </h2>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <StarRating rating={5} />
              <span className="ml-1 text-sm font-semibold text-slate-900">4.9</span>
            </div>
            <span className="text-xs text-slate-500">
              Based on Google Reviews across both locations
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {(["all", "Land O' Lakes", "South Tampa"] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-3 py-1 text-[0.68rem] font-medium transition ${
                activeFilter === filter
                  ? "bg-[#c47a3a] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#c47a3a] hover:text-[#c47a3a]"
              }`}
            >
              {filter === "all" ? "All Locations" : filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <StarRating rating={t.stars} />
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              &quot;{t.quote}&quot;
            </p>
            <div className="mt-4 border-t border-slate-100 pt-3">
              <p className="text-xs font-semibold text-slate-900">{t.name}</p>
              <p className="text-[0.68rem] text-slate-500">
                {t.role} · {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
