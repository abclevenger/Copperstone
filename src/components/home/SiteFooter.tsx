import Image from "next/image";
import Link from "next/link";

const PHONE_LAND_O_LAKES = "(813) 298-7363";
const PHONE_SOUTH_TAMPA = "(813) 906-8444";

const quickLinks = [
  { href: "/office-space-for-rent", label: "Office Space" },
  { href: "/meeting-space", label: "Meeting Space" },
  { href: "/business-solutions", label: "Business Solutions" },
  { href: "/training", label: "Training & Classes" },
  { href: "/executive-suites", label: "Executive Suites" },
  { href: "/waitlist", label: "Join the Waitlist" },
  { href: "/workspace-finder", label: "Workspace Finder" },
  { href: "/cost-calculator", label: "Cost Calculator" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/a2p-policies", label: "A2P Messaging" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 lg:mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo trans.svg"
              alt="Copperstone Executive Suites"
              width={160}
              height={44}
              className="h-10 w-auto"
            />
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-600">
              Professional executive suites, coworking, virtual offices, and meeting space in
              Land O&apos; Lakes and South Tampa.
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-5 py-2 text-xs font-semibold text-white shadow-md shadow-[#a35f24]/40 transition hover:from-[#edba85] hover:to-[#a35f24]"
            >
              Schedule a Tour
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-900">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-600 transition hover:text-[#c47a3a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-900">
              Locations
            </p>
            <div className="mt-3 space-y-4">
              <address className="not-italic">
                <p className="text-xs font-semibold text-slate-800">Land O&apos; Lakes</p>
                <p className="mt-1 text-xs text-slate-600">
                  3632 Land O&apos; Lakes Blvd #105
                  <br />
                  Land O Lakes, FL 34639
                </p>
                <a
                  href={`tel:${PHONE_LAND_O_LAKES}`}
                  className="mt-1 block text-xs font-semibold text-[#c47a3a] hover:underline"
                >
                  {PHONE_LAND_O_LAKES}
                </a>
              </address>
              <address className="not-italic">
                <p className="text-xs font-semibold text-slate-800">South Tampa</p>
                <p className="mt-1 text-xs text-slate-600">
                  1001 S MacDill Ave
                  <br />
                  Tampa, FL 33629
                </p>
                <a
                  href={`tel:${PHONE_SOUTH_TAMPA}`}
                  className="mt-1 block text-xs font-semibold text-[#c47a3a] hover:underline"
                >
                  {PHONE_SOUTH_TAMPA}
                </a>
              </address>
            </div>
          </div>

          {/* Hours & Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-900">
              Hours
            </p>
            <p className="mt-3 text-xs text-slate-600">
              Monday – Friday: 8:00 AM – 5:00 PM
              <br />
              Saturday – Sunday: By Appointment
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-900">
              Legal
            </p>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-600 transition hover:text-[#c47a3a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
          <p className="text-[0.68rem] text-slate-500">
            © {new Date().getFullYear()} Copperstone Executive Suites. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
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
      </div>
    </footer>
  );
}
