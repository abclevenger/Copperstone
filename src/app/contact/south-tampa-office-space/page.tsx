import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Office Space in South Tampa, FL – Copperstone Executive Suites",
  description:
    "Executive suites, coworking, virtual offices, and meeting space in South Tampa, FL. Located at 1001 S MacDill Ave, near Hyde Park, Palma Ceia, and Downtown Tampa. Call (813) 906-8444.",
  alternates: { canonical: "https://copperstone.info/contact/south-tampa-office-space" },
  openGraph: {
    title: "Office Space in South Tampa, FL | Copperstone Executive Suites",
    description:
      "Professional office and meeting space at 1001 S MacDill Ave, Tampa, FL 33629. Serving South Tampa, Hyde Park, Palma Ceia, and Downtown Tampa.",
    url: "https://copperstone.info/contact/south-tampa-office-space",
    images: [{ url: "/south-tampa-office-exterior.jpg", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Copperstone Executive Suites – South Tampa",
  url: "https://copperstone.info/contact/south-tampa-office-space",
  image: "https://copperstone.info/south-tampa-office-exterior.jpg",
  description:
    "Executive suites, coworking memberships, virtual offices, and meeting space in South Tampa, FL. Conveniently located on S MacDill Ave near Hyde Park and Downtown Tampa.",
  telephone: "+18139068444",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1001 S MacDill Ave",
    addressLocality: "Tampa",
    addressRegion: "FL",
    postalCode: "33629",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.9337,
    longitude: -82.4967,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=1001+S+MacDill+Ave+Tampa+FL+33629",
  areaServed: ["South Tampa", "Hyde Park", "Palma Ceia", "Downtown Tampa", "Davis Islands", "Westshore", "Hillsborough County"],
};

export default function SouthTampaContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
        South Tampa, FL
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Office Space in South Tampa, Florida
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        Copperstone Executive Suites offers private executive offices, coworking memberships,
        virtual office services, and professional meeting space in South Tampa — conveniently
        located on S MacDill Ave near Hyde Park, Palma Ceia, Westshore, and Downtown Tampa.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">

        {/* Contact card */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-sm leading-relaxed text-slate-700">
            <h2 className="text-base font-semibold text-slate-900">Location &amp; Contact</h2>
            <address className="mt-3 not-italic space-y-1">
              <p className="font-medium text-slate-900">Copperstone Executive Suites</p>
              <p>1001 S MacDill Ave</p>
              <p>Tampa, FL 33629</p>
            </address>
            <p className="mt-3">
              <span className="font-medium text-slate-900">Phone: </span>
              <a href="tel:+18139068444" className="font-semibold text-[#c47a3a] underline underline-offset-2">
                (813) 906-8444
              </a>
            </p>
            <p className="mt-2">
              <span className="font-medium text-slate-900">Hours: </span>
              Monday – Friday, 8 am – 5 pm
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="tel:+18139068444"
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
              src="/south-tampa-office-exterior.jpg"
              alt="Copperstone Executive Suites office building in South Tampa, FL"
              width={800}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.966885218928!2d-82.49667452333108!3d27.93366041547121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3045feeb555%3A0xd88f8b9254938e99!2sCopperstone%20Executive%20Suites!5e0!3m2!1sen!2sus!4v1773342285611!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "280px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Copperstone Executive Suites South Tampa map"
            />
          </div>
        </div>
      </div>

      {/* Local context */}
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900">
          Professional Workspace in the Heart of South Tampa
        </h2>
        <p className="mt-3">
          Our South Tampa location on S MacDill Ave places your business in one of Tampa&apos;s most
          sought-after commercial corridors — minutes from Hyde Park, Palma Ceia, Davis Islands,
          Westshore, and Downtown Tampa. The building offers easy access from the Selmon Expressway
          and I-275, with on-site parking available.
        </p>
        <p className="mt-3">
          Copperstone Executive Suites South Tampa is the ideal solution for professionals,
          consultants, and growing businesses that need a prestigious South Tampa address without the
          overhead of a traditional office lease. Our flexible terms mean you can start with what
          you need today and scale as your business grows.
        </p>
        <p className="mt-3">
          Included amenities: high-speed internet, utilities, coffee service, shared reception,
          parking, and access to conference and meeting rooms at discounted rates for office tenants.
        </p>
      </section>
    </main>
  );
}
