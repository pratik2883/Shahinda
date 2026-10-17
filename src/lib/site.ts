/**
 * Centralized site configuration — single source of truth for identity/contact values.
 *
 * Brand/domain (finalized by client): Ecomalyst — https://www.ecomalyst.com/
 * Contact values are maintained here so the site has one source of truth.
 */

export const site = {
  /** Public-facing brand name (header wordmark, footer, SEO titles) */
  brandName: "Ecomalyst",
  /** Production site URL (canonical, Open Graph) — trailing slash */
  siteUrl: "https://www.ecomalyst.com/",
  /** Contact email (Contact section, Footer, and Privacy Policy) */
  email: "shahinda@ecomalyst.com",
  /** Display phone number (Contact section, Footer, Privacy Policy) */
  phone: "+91 80078 77804",
  /** tel: / wa.me digits, no "+" or spaces */
  phoneDigits: "918007877804",
  /** Social Media links */
  instagram: "https://www.instagram.com/shahin_ecomalyst/",
  facebook: "https://www.facebook.com/profile.php?id=61595078981378",
} as const;

/** Pre-filled WhatsApp deep link used by the floating widget and Final CTA button. */
export const waLink = `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(
  "Hi, I found your website and would like to discuss my ecommerce business.",
)}`;
