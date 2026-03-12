import Image from "next/image";

const galleryImages = [
  {
    src: "/Office-Space-in-Land-O-Lakes-FL.avif",
    alt: "Office space lobby at Copperstone Executive Suites in Land O' Lakes",
  },
  {
    src: "/conference-room-land-o-lakes.avif",
    alt: "Conference room at Copperstone Executive Suites in Land O' Lakes",
  },
  {
    src: "/Event-Venue-Land-O-Lakes.avif",
    alt: "Event venue setup at Copperstone Executive Suites in Land O' Lakes",
  },
  {
    src: "/south-tampa-office-exterior.avif",
    alt: "Exterior of Copperstone Executive Suites South Tampa office",
  },
  {
    src: "/Conference-Rooms-Land-O-Lakes.avif",
    alt: "Conference room at Copperstone Executive Suites in Land O' Lakes",
  },
  {
    src: "/Contact-Copperstone-Executive-Suites-Land-O-Lakes.avif",
    alt: "Copperstone Executive Suites Land O' Lakes exterior",
  },
];

export default function GallerySection() {
  return (
    <section className="mt-16 lg:mt-20">
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">See the Space</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
        A look inside our offices, conference rooms, and event spaces in Land O&apos; Lakes and South
        Tampa.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={350}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

