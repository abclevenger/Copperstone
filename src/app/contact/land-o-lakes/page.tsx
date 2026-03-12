import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Office Space in Land O' Lakes, FL – Copperstone Executive Suites",
  description:
    "Executive suites, coworking, virtual offices, and meeting space in Land O' Lakes, FL. Located at 3632 Land O' Lakes Blvd #105, minutes from Wesley Chapel, Zephyrhills, and Lutz. Call (813) 298-7363.",
  alternates: { canonical: "https://copperstone.info/contact/land-o-lakes" },
  openGraph: {
    title: "Office Space in Land O' Lakes, FL | Copperstone Executive Suites",
    description:
      "Professional office and meeting space at 3632 Land O' Lakes Blvd #105, Land O Lakes, FL 34639. Serving Land O' Lakes, Wesley Chapel, Lutz, and Zephyrhills.",
    url: "https://copperstone.info/contact/land-o-lakes",
    images: [{ url: "/Executive-Offices-for-Rent-Land-O-Lakes.jpg", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Copperstone Executive Suites – Land O' Lakes",
  url: "https://copperstone.info/contact/land-o-lakes",
  image: "https://copperstone.info/Executive-Offices-for-Rent-Land-O-Lakes.jpg",
  description:
    "Executive suites, coworking memberships, virtual offices, and meeting space in Land O' Lakes, FL. Serving Pasco County and the greater North Tampa Bay area.",
  telephone: "+18132987363",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3632 Land O' Lakes Blvd #105",
    addressLocality: "Land O Lakes",
    addressRegion: "FL",
    postalCode: "34639",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.2105,
    longitude: -82.4660,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=3632+Land+O+Lakes+Blvd+%23105+Land+O+Lakes+FL+34639",
  areaServed: ["Land O' Lakes", "Wesley Chapel", "Lutz", "Zephyrhills", "Odessa", "New Port Richey", "Pasco County"],
};

export default function LandOLakesContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }, { label: "Land O' Lakes" }]} />

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
        Land O&apos; Lakes, FL
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Office Space in Land O&apos; Lakes, Florida
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        Copperstone Executive Suites provides private executive offices, coworking memberships,
        virtual office services, and professional meeting space in Land O&apos; Lakes — serving
        businesses across Pasco County, Wesley Chapel, Lutz, Odessa, and the greater North Tampa
        Bay area.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">

        {/* Contact card */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-sm leading-relaxed text-slate-700">
            <h2 className="text-base font-semibold text-slate-900">Location &amp; Contact</h2>
            <address className="mt-3 not-italic space-y-1">
              <p className="font-medium text-slate-900">Copperstone Executive Suites</p>
              <p>3632 Land O&apos; Lakes Blvd #105</p>
              <p>Land O Lakes, FL 34639</p>
            </address>
            <p className="mt-3">
              <span className="font-medium text-slate-900">Phone: </span>
              <a href="tel:+18132987363" className="font-semibold text-[#c47a3a] underline underline-offset-2">
                (813) 298-7363
              </a>
            </p>
            <p className="mt-2">
              <span className="font-medium text-slate-900">Hours: </span>
              Monday – Friday, 8 am – 5 pm
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="tel:+18132987363"
                className="rounded-full bg-linear-to-b from-[#c8853e] to-[#a0621e] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:brightness-105 transition"
              >
                Call Now
              </a>
              <Link
                href="/#contact"
                className="rounded-full border border-[#c47a3a] px-5 py-2 text-xs font-semibold text-[#c47a3a] hover:bg-[#c47a3a]/5 transition"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>

          {/* Services at this location */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-sm text-slate-700">
            <h2 className="text-base font-semibold text-slate-900">Services at This Location</h2>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Executive Suites", href: "/executive-suites" },
                { label: "Coworking & Business Club", href: "/office-space-for-rent" },
                { label: "Virtual Office", href: "/office-space-for-rent" },
                { label: "Meeting & Conference Rooms", href: "/meeting-space" },
                { label: "Event Space", href: "/meeting-space" },
              ].map((s) => (
                <li key={s.label} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c47a3a]" />
                  <Link href={s.href} className="text-[#c47a3a] underline underline-offset-2 hover:text-[#a0621e]">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Photo + map */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <Image
              src="/Executive-Offices-for-Rent-Land-O-Lakes.jpg"
              alt="Copperstone Executive Suites office building in Land O' Lakes, FL"
              width={800}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8963826056515!2d-82.46603890909688!3d28.210460540986652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2bb9310bd3bab%3A0xcbc2539ff554e1dd!2sCopperstone%20Executive%20Suites!5e0!3m2!1sen!2sus!4v1773342316933!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "280px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Copperstone Executive Suites Land O' Lakes map"
            />
          </div>
        </div>
      </div>

      {/* Local context */}
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900">
          Professional Workspace Serving North Pasco &amp; North Hillsborough County
        </h2>
        <p className="mt-3">
          Our Land O&apos; Lakes location sits on U.S. 41, approximately one mile north of State
          Road 54 — making it easily accessible from Wesley Chapel, Lutz, Odessa, Zephyrhills, New
          Port Richey, and throughout Pasco County. Ample parking is available on site.
        </p>
        <p className="mt-3">
          Whether you need a private office with reception presence, a flexible coworking
          membership, a professional business address, or a conference room for your next client
          meeting, Copperstone Executive Suites in Land O&apos; Lakes has the space and support to
          help your business grow.
        </p>
        <p className="mt-3">
          Amenities include high-speed internet, coffee service, utilities, parking, shared lobby
          and reception, and discounted meeting room rates for office tenants.
        </p>
      </section>
    </main>
  );
}
