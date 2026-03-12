type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: GTagEvent): void {
  if (typeof window === "undefined") return;

  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
  };

  w.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackCTAClick(label: string): void {
  trackEvent({ action: "cta_click", category: "conversion", label });
}

export function trackPhoneTap(location: string): void {
  trackEvent({ action: "phone_tap", category: "conversion", label: location });
}

export function trackFormView(): void {
  trackEvent({ action: "form_view", category: "engagement", label: "tour_form" });
}

export function trackFormSubmit(): void {
  trackEvent({ action: "form_submit", category: "conversion", label: "tour_form" });
}

export function trackNavClick(label: string): void {
  trackEvent({ action: "nav_click", category: "navigation", label });
}
