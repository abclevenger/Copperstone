"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const BOOKING_SRC =
  "https://link.ymbs.pro/widget/booking/y3A0R9McWwI4dg7IPauf";

export default function BookingWidget() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "400px 0px", threshold: 0.01 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScriptReady = () => {
    window.dispatchEvent(new Event("resize"));
    if (iframeRef.current) {
      iframeRef.current.style.minHeight = "700px";
    }
  };

  return (
    <>
      <div ref={sectionRef}>
        {isVisible ? (
          <iframe
            ref={iframeRef}
            src={BOOKING_SRC}
            id="y3A0R9McWwI4dg7IPauf_1773358285729"
            title="Training & class booking calendar"
            loading="lazy"
            scrolling="no"
            className="w-full min-h-[700px] rounded-2xl border-0 bg-transparent"
          />
        ) : (
          <div className="flex min-h-[700px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs text-slate-500">
            Loading booking calendar…
          </div>
        )}
      </div>
      {isVisible && (
        <Script
          id="ghl-booking-embed"
          src="https://link.ymbs.pro/js/form_embed.js"
          strategy="afterInteractive"
          onReady={handleScriptReady}
        />
      )}
    </>
  );
}
