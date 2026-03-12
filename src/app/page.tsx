import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const PHONE_LAND_O_LAKES = "(813) 298-7363";
const PHONE_SOUTH_TAMPA = "(813) 906-8444";

const steps = [
  { step: "1", title: "Schedule Your Tour", body: "See the space, meet the team, and explore options tailored to how you work." },
  { step: "2", title: "Choose Your Space", body: "From executive offices to coworking and virtual options, pick what fits your business today." },
  { step: "3", title: "Grow Your Business", body: "Focus on clients and revenue while we handle the workspace, utilities, and amenities." },
];

const offerings = [
  {
    title: "Executive Suites",
    description:
      "Private, lockable offices in a professional environment, ideal for growing companies and solo professionals who need a permanent home base.",
    highlights: ["Furnished offices available", "24/7 secure access", "Reception and lobby presence"],
  },
  {
    title: "Coworking",
    description:
      "Flexible workspace with fast Wi‑Fi and a community of professionals—perfect when coffee shops are too noisy and home is too distracting.",
    highlights: ["Open workspace membership", "Business club access", "Networking opportunities"],
  },
  {
    title: "Virtual Offices",
    description:
      "Project a professional image with a business address and mail handling, even if you are not in the office every day.",
    highlights: ["Professional business address", "Mail and package handling", "Optional meeting room access"],
  },
  {
    title: "Meeting & Event Space",
    description:
      "Host client meetings, trainings, and events in conference and meeting rooms sized for your needs.",
    highlights: ["Conference rooms", "Meeting rooms", "Event venue options"],
  },
];

const amenities = [
  "High-speed internet",
  "Great, convenient locations",
  "Free-flowing coffee",
  "Community events",
  "Utilities included",
];

const locations = [
  {
    name: "Land O' Lakes Office",
    addressLine1: "Copperstone Executive Suites",
    addressLine2: "3632 Land O' Lakes Blvd #105",
    cityStateZip: "Land O Lakes, FL 34639",
    phone: PHONE_LAND_O_LAKES,
  },
  {
    name: "South Tampa Office",
    addressLine1: "Copperstone Executive Suites",
    addressLine2: "1001 S MacDill Ave",
    cityStateZip: "Tampa, FL 33629",
    phone: PHONE_SOUTH_TAMPA,
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Copperstone Executive Suites",
  url: "https://copperstone.info",
  logo: "https://copperstone.info/copperstone-logo.png",
  image: "https://copperstone.info/Executive-Offices-for-Rent-Land-O-Lakes.jpg",
  description:
    "Professional executive suites, coworking, virtual offices, and meeting space in Land O' Lakes and South Tampa, Florida.",
  priceRange: "$$",
  telephone: "+18132987363",
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
    latitude: 28.2025,
    longitude: -82.4635,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=3632+Land+O+Lakes+Blvd+%23105+Land+O+Lakes+FL",
  sameAs: ["https://www.facebook.com/copperstoneexecutivesuites"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-[#f3c89a] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
              Land O&apos; Lakes &amp; South Tampa
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Professional office and meeting space to{" "}
              <span className="text-[#c47a3a]">
                grow your business.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Home offices and noisy coffee shops make it hard to stay focused and look professional.
              At Copperstone Executive Suites, you&apos;ll have the space, tools, and support to work
              efficiently and present a polished image to clients.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#c47a3a] bg-linear-to-b from-[#f3c89a] to-[#c47a3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a35f24]/50 transition hover:from-[#edba85] hover:to-[#a35f24]"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/office-space-for-rent"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#c47a3a] hover:text-[#8a4f3d] hover:shadow-md"
              >
                Explore office options
              </Link>
            </div>
            <p className="mt-2 text-[0.7rem] text-slate-500">
              We&apos;ll follow up within one business day to confirm tour times and answer questions.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              High-speed internet · Utilities included · Free-flowing coffee · Community events
            </p>
            <div className="mt-8 grid gap-4 text-xs text-slate-600 sm:grid-cols-2 sm:text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">
                  &quot;Best prices and facilities we found.&quot;
                </p>
                <p className="mt-2 text-slate-600">
                  &quot;Always clean and kept in great condition. The staff is excellent.&quot;
                </p>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Florida Water Testing
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">
                  &quot;Interior is top notch, quality is superior.&quot;
                </p>
                <p className="mt-2 text-slate-600">
                  &quot;I have nothing but an A+ perspective on my tour and the facility.&quot;
                </p>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Tyrell Scott
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_55%)] opacity-70" />
            <div className="relative z-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl backdrop-blur">
              <h2 className="text-sm font-semibold tracking-tight text-slate-900">
                Work efficiently. Look professional. Increase your revenue.
              </h2>
              <p className="mt-2 text-xs text-slate-600">
                Choose from executive suites, coworking, virtual offices, and meeting space—all with a
                professional atmosphere and friendly on-site team.
              </p>
              <dl className="mt-6 space-y-3 text-xs text-slate-700">
                <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] items-start gap-2">
                  <dt className="font-medium text-slate-800">Executive Suites</dt>
                  <dd className="text-left text-slate-500">
                    Private, lockable offices with lobby reception and professional presence.
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] items-start gap-2">
                  <dt className="font-medium text-slate-800">Coworking &amp; Business Club</dt>
                  <dd className="text-left text-slate-500">
                    Flexible workspace memberships with shared-amenity access for members.
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] items-start gap-2">
                  <dt className="font-medium text-slate-800">Virtual Offices</dt>
                  <dd className="text-left text-slate-500">
                    Professional address, mail handling, and on-demand meeting rooms.
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] items-start gap-2">
                  <dt className="font-medium text-slate-800">Meeting &amp; Event Space</dt>
                  <dd className="text-left text-slate-500">
                    Conference, meeting, and event spaces sized for your next gathering.
                  </dd>
                </div>
              </dl>
              <div className="mt-6 rounded-2xl border border-amber-300/40 bg-amber-50 px-4 py-3 text-xs text-amber-900">
                <p className="font-semibold text-amber-800">
                  Ready to visit Copperstone?
                </p>
                <div className="mt-1 grid gap-2 text-[0.78rem] sm:grid-cols-2">
                  <div>
                    <span className="block font-semibold">Land O&apos; Lakes</span>
                    <a
                      href={`tel:${PHONE_LAND_O_LAKES}`}
                      className="block font-semibold underline underline-offset-2"
                    >
                      {PHONE_LAND_O_LAKES}
                    </a>
                  </div>
                  <div>
                    <span className="block font-semibold">South Tampa</span>
                    <a
                      href={`tel:${PHONE_SOUTH_TAMPA}`}
                      className="block font-semibold underline underline-offset-2"
                    >
                      {PHONE_SOUTH_TAMPA}
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-[0.74rem]">
                  Or use the form below and our team will reach out to confirm your tour time.
                </p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
              <Image
                src="/office-space-land-o-lakes.jpg"
                alt="Copperstone Executive Suites Land O' Lakes office exterior"
                width={900}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mt-16 border-y border-slate-200 py-10 lg:mt-20 lg:py-12 bg-slate-50/70">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
                3 Simple Steps to Success
              </h2>
              <p className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Move from distractions and uncertainty to a professional office you&apos;re proud to show clients.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                We&apos;ll help you find the right mix of office and meeting space so you can work more
                efficiently and grow your business faster.
              </p>
            </div>
            <ol className="space-y-4">
              {steps.map(({ step, title, body }) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c47a3a] text-xs font-semibold text-white shadow shadow-[#a35f24]/40">
                    {step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Offerings */}
        <section id="offerings" className="mt-16 lg:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
                Office & Meeting Space
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Space options that grow with you.
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you&apos;re launching a private practice, scaling a firm, or upgrading from a home
                office, Copperstone has a solution that fits where your business is headed.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {offerings.map((offering) => (
              <article
                key={offering.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-300/70 hover:shadow-md"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {offering.description}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    {offering.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Amenities & Locations */}
        <section className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
              Included Amenities
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Everything you need to focus on your business.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {amenities.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
              Locations
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Conveniently located in Land O&apos; Lakes on U.S. 41, about one mile north of State Road
              54, and in South Tampa on S MacDill Ave—easily accessible for you and your clients.
            </p>
            <div className="mt-4 space-y-3">
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700 sm:text-sm shadow-sm"
                >
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {location.name}
                  </p>
                  <p className="mt-2">{location.addressLine1}</p>
                  <p>{location.addressLine2}</p>
                  <p>{location.cityStateZip}</p>
                  <p className="mt-2 text-amber-700">
                    <a href={`tel:${location.phone}`} className="font-semibold underline underline-offset-2">
                      {location.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="mt-16 lg:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
            See the Space
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            A look inside our offices, conference rooms, and event spaces in Land O&apos; Lakes and South Tampa.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src="/Office-Space-in-Land-O-Lakes-FL.jpg"
                alt="Office space lobby at Copperstone Executive Suites in Land O' Lakes"
                width={500}
                height={350}
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src="/conference-room-land-o-lakes.jpg"
                alt="Conference room at Copperstone Executive Suites in Land O' Lakes"
                width={500}
                height={350}
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src="/Event-Venue-Land-O-Lakes.jpg"
                alt="Event venue setup at Copperstone Executive Suites in Land O' Lakes"
                width={500}
                height={350}
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src="/south-tampa-office-exterior.jpg"
                alt="Exterior of Copperstone Executive Suites South Tampa office"
                width={500}
                height={350}
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src="/Conference-Rooms-Land-O-Lakes.jpg"
                alt="Conference room at Copperstone Executive Suites in Land O' Lakes"
                width={500}
                height={350}
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src="/Contact-Copperstone-Executive-Suites-Land-O-Lakes.jpg"
                alt="Copperstone Executive Suites Land O' Lakes exterior"
                width={500}
                height={350}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </section>

        {/* Contact / Schedule Tour */}
        <section id="contact" className="mt-16 lg:mt-20">
          {/* Section header */}
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Schedule a Tour
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Take the first step toward a more productive workday.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Share a few details and we&apos;ll reach out to confirm your tour time and help you
              explore the right office or meeting space for your needs.
            </p>
            <div className="mt-3 flex flex-col items-center gap-1 text-xs text-slate-600 sm:flex-row sm:justify-center sm:gap-6">
              <p>
                <span className="font-semibold text-slate-900">Land O&apos; Lakes:</span>{" "}
                <a href={`tel:${PHONE_LAND_O_LAKES}`} className="font-semibold text-[#a0621e] underline underline-offset-2">
                  {PHONE_LAND_O_LAKES}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">South Tampa:</span>{" "}
                <a href={`tel:${PHONE_SOUTH_TAMPA}`} className="font-semibold text-[#a0621e] underline underline-offset-2">
                  {PHONE_SOUTH_TAMPA}
                </a>
              </p>
            </div>
          </div>

          {/* Inline form card */}
          <div className="mx-auto w-full max-w-2xl">
            <div
              className="overflow-hidden rounded-3xl bg-[#f7f7f5] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
              <iframe
                src="https://link.ymbs.pro/widget/form/Hz1XrvShy4h58mWWzy2n"
                id="inline-Hz1XrvShy4h58mWWzy2n"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="978"
                data-layout-iframe-id="inline-Hz1XrvShy4h58mWWzy2n"
                data-form-id="Hz1XrvShy4h58mWWzy2n"
                title="Schedule a Tour"
                loading="lazy"
                style={{
                  width: "100%",
                  minHeight: "978px",
                  border: "none",
                  borderRadius: "16px",
                  display: "block",
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </section>
        <Script
          src="https://link.ymbs.pro/js/form_embed.js"
          strategy="afterInteractive"
        />

        {/* Chambers */}
        <section className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Proud member of
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Image
              src="/north-tampa-bay-chamber.webp"
              alt="North Tampa Bay Chamber"
              width={400}
              height={400}
              className="h-24 w-24 object-contain md:h-28 md:w-28"
            />
            <Image
              src="/greater-pasco-chamber.jpg"
              alt="The Greater Pasco Chamber of Commerce"
              width={400}
              height={200}
              className="h-12 w-auto max-w-[9rem] object-contain md:h-14 md:max-w-[11rem]"
            />
          </div>
        </section>

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
                  className="h-6 w-auto md:h-8"
                />
              </a>
            </div>
          </div>
        </footer>
      </main>
      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between gap-3 rounded-full border border-[#c47a3a] bg-white/95 px-4 py-2 text-[0.7rem] shadow-lg shadow-[#a35f24]/30 lg:hidden">
        <a
          href="#contact"
          className="flex-1 rounded-full bg-[#c47a3a] px-3 py-1.5 text-center font-semibold text-white"
        >
          Schedule a Tour
        </a>
        <a
          href={`tel:${PHONE_LAND_O_LAKES}`}
          className="whitespace-nowrap font-medium text-[#8a4f3d] underline underline-offset-2"
        >
          Call Land O&apos; Lakes
        </a>
      </div>
    </div>
  );
}
