"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PHONE_LAND_O_LAKES = "(813) 298-7363";
const PHONE_SOUTH_TAMPA = "(813) 906-8444";
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/office-space-for-rent", label: "Office Space" },
  { href: "/meeting-space", label: "Meeting Space" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const PhoneIcon = () => (
  <svg className="h-3 w-3 shrink-0 text-[#c47a3a]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

export default function SiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Top info bar */}
      <div className="border-b border-slate-100 bg-[#f7f6f3]">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-2 lg:justify-end lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[13px] text-slate-600 lg:justify-end">
            <a
              href={`tel:${PHONE_LAND_O_LAKES}`}
              className="flex items-center gap-1.5 transition hover:text-[#c47a3a]"
            >
              <PhoneIcon />
              <span className="font-medium text-slate-700">Land O&apos; Lakes:</span>
              <span className="font-semibold text-[#c47a3a]">{PHONE_LAND_O_LAKES}</span>
            </a>
            <a
              href={`tel:${PHONE_SOUTH_TAMPA}`}
              className="flex items-center gap-1.5 transition hover:text-[#c47a3a]"
            >
              <PhoneIcon />
              <span className="font-medium text-slate-700">South Tampa:</span>
              <span className="font-semibold text-[#c47a3a]">{PHONE_SOUTH_TAMPA}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo trans.svg"
            alt="Copperstone Executive Suites"
            width={180}
            height={48}
            className="h-10 w-auto md:h-11"
            priority
            sizes="(max-width: 768px) 160px, 180px"
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-wide text-slate-900">
              Copperstone Executive Suites
            </span>
            <span className="text-xs text-slate-500">Office &amp; Meeting Space</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-medium text-slate-700 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#c47a3a]">
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-4 py-2 text-[13px] font-semibold text-white shadow-md shadow-[#a35f24]/40 transition hover:from-[#edba85] hover:to-[#a35f24]"
          >
            Schedule a Tour
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          {isMobileNavOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMobileNavOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-1.5 transition hover:bg-slate-50 hover:text-[#c47a3a]"
                onClick={() => setIsMobileNavOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-1 inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#a35f24]/40 transition hover:from-[#edba85] hover:to-[#a35f24]"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Schedule a Tour
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
