import type { Location } from "@/content/home";

type AmenitiesLocationsSectionProps = {
  amenities: string[];
  locations: Location[];
};

export default function AmenitiesLocationsSection({
  amenities,
  locations,
}: AmenitiesLocationsSectionProps) {
  return (
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
        <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">Locations</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Conveniently located in Land O&apos; Lakes on U.S. 41, about one mile north of State Road
          54, and in South Tampa on S MacDill Ave—easily accessible for you and your clients.
        </p>
        <div className="mt-4 space-y-3">
          {locations.map((location) => (
            <div
              key={location.name}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-sm sm:text-sm"
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
  );
}
