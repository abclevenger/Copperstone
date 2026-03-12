"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "copperstone_cookie_consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:bottom-6 lg:left-auto lg:right-6 lg:inset-x-auto"
    >
      <p className="text-sm font-semibold text-slate-900">We value your privacy</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-600">
        We use cookies and analytics to improve your experience and measure site performance.
        Read our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-[#c47a3a]">
          Privacy Policy
        </Link>{" "}
        for details.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-[#c47a3a] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#a35f24]"
        >
          Accept All
        </button>
        <button
          type="button"
          onClick={decline}
          className="rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
