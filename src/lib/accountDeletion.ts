import { supabasePublic } from "./supabasePublic";

export const deletionReasons = [
  { id: "not_using", label: "I don’t use the app anymore" },
  { id: "too_hard", label: "It’s too hard or confusing" },
  { id: "not_enough_content", label: "Not enough content or features" },
  { id: "technical_problems", label: "Technical problems or bugs" },
  { id: "privacy", label: "Privacy concerns" },
  { id: "switching_app", label: "Switching to another app" },
  { id: "other", label: "Other" },
] as const;

export type DeletionReasonId = (typeof deletionReasons)[number]["id"];

export type DeletionErrorCode =
  | "invalid"
  | "rateLimit"
  | "unavailable"
  | "delivery"
  | "expired"
  | "locked"
  | "review_account_protected"
  | "network";

type DeletionResponse = {
  ok?: boolean;
  error?: string;
};

const functionUrl = `${supabasePublic.url}/functions/v1/web-delete-account`;

export async function requestAccountDeletion(
  body:
    | { step: "send_code"; email: string }
    | { step: "verify_code"; email: string; code: string }
    | {
        step: "confirm";
        email: string;
        code: string;
        reasons: DeletionReasonId[];
      },
): Promise<{ ok: true } | { ok: false; error: DeletionErrorCode }> {
  let response: Response;
  try {
    response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabasePublic.publishableKey,
        Authorization: `Bearer ${supabasePublic.anonKey}`,
      },
      body: JSON.stringify(body),
    });
  } catch {
    return { ok: false, error: "network" };
  }

  let payload: DeletionResponse = {};
  try {
    payload = (await response.json()) as DeletionResponse;
  } catch {
    payload = {};
  }

  if (response.ok && payload.ok) {
    return { ok: true };
  }

  const error = payload.error;
  if (
    error === "invalid" ||
    error === "rateLimit" ||
    error === "unavailable" ||
    error === "delivery" ||
    error === "expired" ||
    error === "locked" ||
    error === "review_account_protected"
  ) {
    return { ok: false, error };
  }

  return { ok: false, error: "unavailable" };
}

export function deletionErrorMessage(error: DeletionErrorCode): string {
  switch (error) {
    case "invalid":
      return "That code is incorrect. Check the email and try again.";
    case "expired":
      return "That code has expired. Send a new one and try again.";
    case "locked":
      return "Too many incorrect attempts. Send a new code and try again.";
    case "rateLimit":
      return "Please wait a minute before requesting another code.";
    case "delivery":
      return "We could not send the email just now. Try again in a moment.";
    case "review_account_protected":
      return "This account cannot be deleted from the website.";
    case "network":
      return "Check your connection and try again.";
    default:
      return "Something went wrong. Try again in a moment.";
  }
}
