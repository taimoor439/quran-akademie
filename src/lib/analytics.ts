/**
 * Google Analytics (GA4) consent helpers.
 *
 * The site loads gtag.js with consent mode defaulting to denied
 * (see layout.tsx), so no analytics cookies are set before the
 * visitor accepts. These helpers flip analytics_storage once the
 * visitor chooses in the cookie banner, or restore the stored
 * choice on later visits. All calls are safe before gtag.js has
 * finished loading: the inline gtag stub in <head> queues them
 * in window.dataLayer.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-F7GBZNEEV0";

export const COOKIE_CONSENT_KEY = "qa_cookie_consent";

export function grantAnalyticsConsent(): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }
}

export function denyAnalyticsConsent(): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }
}
