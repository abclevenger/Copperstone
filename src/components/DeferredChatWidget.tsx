"use client";

import { useEffect } from "react";

export default function DeferredChatWidget() {
  useEffect(() => {
    const scriptId = "leadconnector-chat-widget";

    const loadWidget = () => {
      if (document.getElementById(scriptId)) return;

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://beta.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://beta.leadconnectorhq.com/chat-widget/loader.js",
      );
      script.setAttribute("data-widget-id", "69b2ed9e6053f690a3de824b");
      script.async = true;
      document.body.appendChild(script);
    };

    const onFirstInteraction = () => {
      loadWidget();
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };

    window.addEventListener("pointerdown", onFirstInteraction, { once: true });
    window.addEventListener("keydown", onFirstInteraction, { once: true });

    // Backstop: still load after a short delay.
    const timer = window.setTimeout(loadWidget, 5000);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  return null;
}
