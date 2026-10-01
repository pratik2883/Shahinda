/**
 * Centralized site configuration — single source of truth for identity/contact values.
 *
 * Brand/domain (finalized by client): Ecomalyst — https://ecomalyst.in/
 * NOTE: Contact email, phone and LinkedIn are NOT finalized yet — the values below
 * are temporary. When the client provides the new SIM, domain email and LinkedIn,
 * update them HERE ONLY. Do NOT invent placeholder values.
 */

export const site = {
  /** Public-facing brand name (header wordmark, footer, SEO titles) */
  brandName: "Ecomalyst",
  /** Production site URL (canonical, Open Graph) — trailing slash */
  siteUrl: "https://ecomalyst.in/",
  /** Contact email (Contact section + Footer) — TEMPORARY until client finalizes domain email */
  email: "shahindak2@gmail.com",
  /** Display phone number (Contact section) — TEMPORARY until client provides new SIM */
  phone: "+91 95112 66312",
  /** tel: / wa.me digits, no "+" or spaces */
  phoneDigits: "919511266312",
  /** LinkedIn — currently a keyword-search URL, NOT a profile (client undecided) */
  linkedinUrl: "https://www.linkedin.com/search/results/people/?keywords=Shahinda%20Kazi",
  linkedinLabel: "Shahinda",
} as const;

/** Pre-filled WhatsApp deep link used by the floating widget and Final CTA button. */
export const waLink = `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(
  "Hi, I found your website and would like to discuss my ecommerce business.",
)}`;
