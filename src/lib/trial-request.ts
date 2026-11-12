/**
 * Shared trial-request persistence for the hero form (home page) and the
 * /free-trial page. Both save to the same localStorage key so the two forms
 * can never diverge.
 *
 * Demo only: requests are stored in the browser. At launch this will be
 * replaced by a real submission to email/CRM.
 */
export const TRIAL_REQUESTS_KEY = "qa_trial_requests";

export function saveTrialRequest(data: Record<string, string>): void {
  try {
    const stored = JSON.parse(
      window.localStorage.getItem(TRIAL_REQUESTS_KEY) || "[]"
    ) as unknown[];
    stored.push({ ...data, submittedAt: new Date().toISOString() });
    window.localStorage.setItem(TRIAL_REQUESTS_KEY, JSON.stringify(stored));
  } catch {
    // localStorage unavailable — caller still shows the success state.
  }
}
