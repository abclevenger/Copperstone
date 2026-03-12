"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const FORM_SRC = "https://link.ymbs.pro/widget/form/Hz1XrvShy4h58mWWzy2n";

export default function GHLInlineForm() {
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

  const handleEmbedScriptReady = () => {
    // Ensure any postMessage/resize listeners run after script init.
    window.dispatchEvent(new Event("resize"));
    if (iframeRef.current) {
      iframeRef.current.style.minHeight = "760px";
    }
  };

  return (
    <>
      <div ref={sectionRef} className="form-card">
        {isVisible ? (
          <iframe
            ref={iframeRef}
            src={FORM_SRC}
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
            title="Form 0"
            loading="lazy"
            className="w-full min-h-[760px] rounded-2xl border-0 bg-transparent"
          />
        ) : (
          <div className="flex min-h-[760px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs text-slate-500">
            Loading tour form...
          </div>
        )}
      </div>
      {isVisible && (
        <Script
          id="ghl-inline-form-embed"
          src="https://link.ymbs.pro/js/form_embed.js"
          strategy="afterInteractive"
          onReady={handleEmbedScriptReady}
        />
      )}
    </>
  );
}
