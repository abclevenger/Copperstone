"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import { faqs, faqCategories } from "@/content/faqs";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="h-4 w-4 text-slate-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

export default function InteractiveFAQ() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim();
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        !term ||
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const toggle = (idx: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const expandAll = () => {
    setOpenItems(new Set(filtered.map((_, i) => i)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <div className="mt-8">
      {/* ── Search ── */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
          <SearchIcon />
        </div>
        <input
          type="search"
          placeholder="Search questions…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpenItems(new Set());
          }}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#c47a3a] focus:ring-1 focus:ring-[#c47a3a]"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600"
            aria-label="Clear search"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Category Pills ── */}
      <div className="mt-4 flex flex-wrap gap-2">
        {faqCategories.map((cat) => {
          const count =
            cat === "All"
              ? faqs.length
              : faqs.filter((f) => f.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenItems(new Set());
              }}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeCategory === cat
                  ? "bg-[#c47a3a] text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#c47a3a] hover:text-[#c47a3a]"
              }`}
            >
              {cat}{" "}
              <span
                className={`ml-1 ${
                  activeCategory === cat ? "text-white/70" : "text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Expand/Collapse ── */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          {filtered.length} {filtered.length === 1 ? "question" : "questions"}
          {search && ` matching "${search}"`}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="text-[0.68rem] font-medium text-slate-500 underline underline-offset-2 transition hover:text-[#c47a3a]"
          >
            Expand all
          </button>
          <span className="text-slate-300">|</span>
          <button
            type="button"
            onClick={collapseAll}
            className="text-[0.68rem] font-medium text-slate-500 underline underline-offset-2 transition hover:text-[#c47a3a]"
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* ── Accordion ── */}
      <div className="mt-3 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {filtered.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <p className="text-sm font-medium text-slate-600">
              No questions found
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Try a different search term or category
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-3 text-xs font-medium text-[#c47a3a] underline underline-offset-2"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filtered.map((faq, idx) => {
            const isOpen = openItems.has(idx);
            return (
              <div key={`${faq.category}-${faq.question}`}>
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="hidden shrink-0 rounded-full bg-[#f3c89a]/30 px-2 py-0.5 text-[0.6rem] font-semibold text-[#a35f24] sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="text-[0.9rem] font-semibold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600 sm:pl-18">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ── Still have questions? ── */}
      <div className="mt-8 rounded-2xl border border-[#c47a3a]/20 bg-[#fffaf5] p-5 text-center sm:p-6">
        <p className="text-sm font-semibold text-slate-900">
          Still have questions?
        </p>
        <p className="mt-1 text-xs text-slate-600">
          We&apos;re happy to help. Schedule a tour or reach out directly.
        </p>
        <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/#contact"
            onClick={() => trackCTAClick("faq_tour_cta")}
            className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
          >
            Schedule a Tour
          </Link>
          <a
            href="tel:+18132987363"
            onClick={() => trackCTAClick("faq_phone_cta")}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d]"
          >
            Call (813) 298-7363
          </a>
          <Link
            href="/workspace-finder"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d]"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
