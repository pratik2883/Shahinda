import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Check, X } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Free-checklist lead magnet popup.
 *
 * Behaviour:
 * - Opens by itself SHOW_DELAY_MS after the page loads (only if not suppressed).
 * - Closing it — the X, "No thanks, maybe later", Escape or the backdrop — hides it for
 *   DISMISS_HOURS. Completing the signup suppresses it for good.
 * - There is no backend yet: the signup opens a pre-filled email draft, exactly like the
 *   enquiry form in ContactForm.tsx. Swap `onSubmit` for an API call when one exists.
 */

const DISMISS_KEY = "ecomalyst:checklist-popup-dismissed-until";
const SIGNED_UP_KEY = "ecomalyst:checklist-popup-signed-up";
const SHOW_DELAY_MS = 6000;
const DISMISS_HOURS = 48;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readFlag(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeFlag(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage blocked (private mode) — the popup simply shows again on the next visit.
  }
}

export function ChecklistPopup() {
  const [open, setOpen] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (readFlag(SIGNED_UP_KEY)) return;
    const dismissedUntil = Number(readFlag(DISMISS_KEY));
    if (Number.isFinite(dismissedUntil) && dismissedUntil > Date.now()) return;

    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    writeFlag(DISMISS_KEY, String(Date.now() + DISMISS_HOURS * 60 * 60 * 1000));
    setOpen(false);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);

    const body = [
      "Please send me the free checklist: 10 things to check before you start selling online.",
      "",
      `Email: ${value}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Free checklist request",
    )}&body=${encodeURIComponent(body)}`;

    writeFlag(SIGNED_UP_KEY, new Date().toISOString());
    setSignedUp(true);
  }

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) dismiss();
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[#0e2b46]/55 duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
        <DialogPrimitive.Content
          ref={panelRef}
          onOpenAutoFocus={(event) => {
            // Don't steal the click; on touch devices focusing the field would open the keyboard.
            event.preventDefault();
            if (window.matchMedia("(hover: hover)").matches) emailRef.current?.focus();
            else panelRef.current?.focus();
          }}
          className="fixed left-1/2 top-1/2 z-50 max-h-[92vh] w-[min(26rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-[#faf9f5] shadow-soft outline-none duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 motion-reduce:animate-none"
        >
          <div className="flex items-center gap-4 bg-[#0e2b46] px-5 py-4 sm:px-7">
            <span className="rounded-full bg-[#35d399] px-3.5 py-2 text-[0.68rem] font-bold tracking-[0.16em] text-[#06301f] uppercase">
              Free checklist
            </span>
            <svg viewBox="0 0 48 26" className="ml-auto h-6 w-11 shrink-0" aria-hidden="true">
              <path
                d="M2 18H10l5 5 8-15h15"
                fill="none"
                stroke="#35d399"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                className="popup-chart-line"
              />
              <circle cx="38" cy="8" r="3" fill="#35d399" className="popup-chart-dot" />
            </svg>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="-mr-1 shrink-0 cursor-pointer rounded-full p-1 text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>

          <div className="px-5 pt-6 pb-7 sm:px-7">
            {signedUp ? (
              <div className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0e7a4d] text-white">
                  <Check className="h-6 w-6" />
                </span>
                <DialogPrimitive.Title asChild>
                  <h2 className="mt-5 text-[1.55rem] leading-tight text-[#0e2b46]">
                    Checklist on its way.
                  </h2>
                </DialogPrimitive.Title>
                <DialogPrimitive.Description asChild>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[#2c4257]">
                    Your email app should open with a pre-filled request. Send it and the checklist
                    will reach you by email.
                  </p>
                </DialogPrimitive.Description>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-block cursor-pointer text-sm text-[#0e7a4d] underline underline-offset-2"
                >
                  Email didn't open? Write to {site.email}
                </a>
                <button
                  type="button"
                  onClick={dismiss}
                  className="mt-6 w-full cursor-pointer rounded-xl bg-[#0e7a4d] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0b6a42]"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <DialogPrimitive.Title asChild>
                  <h2 className="text-[1.65rem] leading-[1.1] text-[#0e2b46]">
                    Thinking of selling online?
                  </h2>
                </DialogPrimitive.Title>
                <DialogPrimitive.Description asChild>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[#2c4257]">
                    Get our free checklist:{" "}
                    <strong className="font-bold text-[#0e2b46]">
                      10 things to check before you start selling online
                    </strong>
                    , plus occasional practical ecommerce tips.
                  </p>
                </DialogPrimitive.Description>

                <form onSubmit={onSubmit} className="mt-5" noValidate>
                  <label htmlFor="checklist-email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    ref={emailRef}
                    id="checklist-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="Your email address"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "checklist-email-error" : undefined}
                    className="w-full rounded-xl border-2 border-[#9fdcbb] bg-white px-4 py-3.5 text-base text-[#0e2b46] outline-none transition-colors placeholder:text-[#8b95a1] focus:border-[#0e7a4d] focus:ring-4 focus:ring-[#0e7a4d]/15"
                  />
                  {error && (
                    <p
                      id="checklist-email-error"
                      role="alert"
                      className="mt-2 text-sm text-[#b3261e]"
                    >
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="mt-3 w-full cursor-pointer rounded-xl bg-[#0e7a4d] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0b6a42] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e7a4d]"
                  >
                    Send me the checklist
                  </button>
                </form>

                <p className="mt-4 text-[0.8rem] leading-relaxed text-[#55606e]">
                  By signing up, you agree to receive emails from {site.brandName}. We use your
                  email only for this, never share it, and you can unsubscribe anytime.{" "}
                  <a href="/privacy-policy" className="text-[#0e7a4d] underline underline-offset-2">
                    Privacy policy
                  </a>
                </p>

                <button
                  type="button"
                  onClick={dismiss}
                  className="mx-auto mt-5 block cursor-pointer text-sm text-[#0e2b46] underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  No thanks, maybe later
                </button>
              </>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
