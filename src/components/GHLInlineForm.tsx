"use client";

import { useRef } from "react";
import Script from "next/script";

const FORM_SRC = "https://link.ymbs.pro/widget/form/Hz1XrvShy4h58mWWzy2n";

export default function GHLInlineForm() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const handleEmbedScriptReady = () => {
    // Ensure any postMessage/resize listeners run after script init.
    window.dispatchEvent(new Event("resize"));
    if (iframeRef.current) {
      iframeRef.current.style.minHeight = "760px";
    }
  };

  return (
    <>
      <div className="form-card">
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
      </div>
      <Script
        id="ghl-inline-form-embed"
        src="https://link.ymbs.pro/js/form_embed.js"
        strategy="afterInteractive"
        onReady={handleEmbedScriptReady}
      />
    </>
  );
}
