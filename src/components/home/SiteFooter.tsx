import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 pt-6 text-[0.72rem] text-slate-500 lg:mt-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Copperstone Executive Suites. All rights reserved.</p>
          <span className="hidden text-slate-400 sm:inline">|</span>
          <Link href="/faqs" className="hover:text-amber-700">
            FAQs
          </Link>
          <span className="hidden text-slate-400 sm:inline">|</span>
          <Link href="/privacy-policy" className="hover:text-amber-700">
            Privacy Policy
          </Link>
          <span className="hidden text-slate-400 sm:inline">|</span>
          <Link href="/terms-of-service" className="hover:text-amber-700">
            Terms of Service
          </Link>
          <span className="hidden text-slate-400 sm:inline">|</span>
          <Link href="/accessibility" className="hover:text-amber-700">
            Accessibility
          </Link>
          <span className="hidden text-slate-400 sm:inline">|</span>
          <Link href="/a2p-policies" className="hover:text-amber-700">
            A2P Messaging Policy
          </Link>
        </div>
        <div className="flex items-center justify-start gap-2 text-xs text-slate-500">
          <span>Website created by</span>
          <a
            href="https://ymbs.pro"
            className="inline-flex items-center gap-1 font-semibold hover:text-amber-600"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/ymbs-logo-light.png"
              alt="Yellow Mountain Business Solutions"
              width={140}
              height={40}
              sizes="140px"
              className="h-6 w-auto md:h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
