import AmenitiesLocationsSection from "@/components/home/AmenitiesLocationsSection";
import BuyerFitSection from "@/components/home/BuyerFitSection";
import ChambersSection from "@/components/home/ChambersSection";
import ContactSection from "@/components/home/ContactSection";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import InvestmentSection from "@/components/home/InvestmentSection";
import LazyRender from "@/components/home/LazyRender";
import OfferingsSection from "@/components/home/OfferingsSection";
import PricingSection from "@/components/home/PricingSection";
import SiteFooter from "@/components/home/SiteFooter";
import StakesSection from "@/components/home/StakesSection";
import StepsSection from "@/components/home/StepsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import {
  amenities,
  localBusinessSchema,
  locations,
  offerings,
  PHONE_LAND_O_LAKES,
  PHONE_SOUTH_TAMPA,
  steps,
} from "@/content/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <HeroSection
          phoneLandOLakes={PHONE_LAND_O_LAKES}
          phoneSouthTampa={PHONE_SOUTH_TAMPA}
        />
        <StakesSection />
        <StepsSection steps={steps} />
        <OfferingsSection offerings={offerings} />
        <PricingSection />
        <InvestmentSection />
        <BuyerFitSection />
        <LazyRender rootMargin="450px 0px" minHeightClassName="min-h-[400px]">
          <TestimonialsSection />
        </LazyRender>
        <AmenitiesLocationsSection amenities={amenities} locations={locations} />
        <LazyRender rootMargin="450px 0px" minHeightClassName="min-h-[520px]">
          <GallerySection />
        </LazyRender>
        <ContactSection
          phoneLandOLakes={PHONE_LAND_O_LAKES}
          phoneSouthTampa={PHONE_SOUTH_TAMPA}
        />
        <ChambersSection />
      </main>
      <SiteFooter />
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
