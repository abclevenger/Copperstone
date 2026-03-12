import Image from "next/image";

export default function ChambersSection() {
  return (
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
          sizes="(max-width: 768px) 96px, 112px"
          className="h-24 w-24 object-contain md:h-28 md:w-28"
        />
        <Image
          src="/greater-pasco-chamber.jpg"
          alt="The Greater Pasco Chamber of Commerce"
          width={400}
          height={200}
          sizes="(max-width: 768px) 144px, 176px"
          className="h-12 w-auto max-w-[9rem] object-contain md:h-14 md:max-w-[11rem]"
        />
      </div>
    </section>
  );
}
