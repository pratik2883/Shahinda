/**
 * Centralized site configuration — single source of truth for identity/contact values.
 *
 * Brand/domain (finalized by client): Ecomalyst — https://ecomalyst.in/
 * Contact values are maintained here so the site has one source of truth.
 */

export const site = {
  /** Public-facing brand name (header wordmark, footer, SEO titles) */
  brandName: "Ecomalyst",
  /** Production site URL (canonical, Open Graph) — trailing slash */
  siteUrl: "https://ecomalyst.in/",
  /** Contact email (Contact section, Footer, and Privacy Policy) */
  email: "shahinda@ecomalyst.com",
  /** Display phone number (Contact section) — TEMPORARY until client provides new SIM */
  phone: "+91 95112 66312",
  /** tel: / wa.me digits, no "+" or spaces */
  phoneDigits: "919511266312",
} as const;

/** Pre-filled WhatsApp deep link used by the floating widget and Final CTA button. */
export const waLink = `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(
  "Hi, I found your website and would like to discuss my ecommerce business.",
)}`;
