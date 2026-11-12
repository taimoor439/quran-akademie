"use client";

import { useEffect } from "react";
import {
  COOKIE_CONSENT_KEY,
  grantAnalyticsConsent,
} from "@/lib/analytics";

/**
 * Restores a stored cookie-banner choice on every visit: if the
 * visitor previously accepted, analytics consent is granted so
 * GA4 can measure the visit. Renders nothing.
 */
export default function AnalyticsConsent() {
  useEffect(() => {
    if (window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted") {
      grantAnalyticsConsent();
    }
  }, []);

  return null;
}
