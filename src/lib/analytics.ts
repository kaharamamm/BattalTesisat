export type AnalyticsEvent =
  | "whatsapp_click"
  | "phone_click"
  | "directions_click";

export type AnalyticsPlacement =
  | "hero"
  | "navbar"
  | "floating"
  | "mobile_bar"
  | "footer"
  | "final_cta"
  | "contact"
  | "reviews";

type EventPayload = {
  placement?: AnalyticsPlacement;
  [key: string]: string | undefined;
};

/**
 * Safe analytics stub. No-ops until Google Analytics is configured.
 * Replace the body with gtag/GA4 when ready — do not add fake measurement IDs.
 */
export function trackEvent(
  event: AnalyticsEvent,
  payload: EventPayload = {},
): void {
  if (typeof window === "undefined") return;

  try {
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };

    if (typeof w.gtag === "function") {
      w.gtag("event", event, payload);
      return;
    }

    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event, ...payload });
    }
  } catch {
    // Fail silently — analytics must never break UX
  }
}
