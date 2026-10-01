# LANDING PAGE AUDIT — Read-Only Inspection Report

**Date:** 2026-09-30 · **Mode:** Inspection only — ZERO code changes made.
**Scope:** Entire landing page (`/`), all site components, assets, SEO, form, WhatsApp.

---

## A. CURRENT PAGE SECTION MAP (actual order, from `src/routes/index.tsx`)

The page is composed in `Index()` in this exact order:

| # | Section | id | Component / File | Purpose |
|---|---------|-----|------------------|---------|
| 01 | Header | — | `Header` → [src/components/site/Header.tsx](src/components/site/Header.tsx) | Sticky nav + mobile menu |
| 02 | Hero | `#top` | `Hero` → [src/components/site/sections.tsx](src/components/site/sections.tsx) | Intro headline + growth chart visual |
| 03 | About | `#about` | `About` → sections.tsx | 11+ years positioning, dark band |
| 04 | Services | `#services` | `Services` → sections.tsx | 7 service cards + CTA tile (data-driven) |
| 05 | Impact | `#impact` | `Impact` → sections.tsx | Metrics grid (7 metrics, data-driven) |
| 06 | Toolkit | (none) | `Toolkit` → sections.tsx | 15 capability chips (data-driven) |
| 07 | Experience | `#experience` | `Experience` → sections.tsx | Career timeline, 7 roles (data-driven) |
| 08 | Final CTA | (none) | `FinalCta` → sections.tsx | Conversion band, dark |
| 09 | Contact | `#contact` | `Contact` → sections.tsx | Contact details list + `<ContactForm />` |
| 10 | Footer | — | `Footer` → sections.tsx | Name, tagline, links |
| 11 | Floating WhatsApp | — | `FloatingWhatsApp` → [src/components/site/WhatsAppButton.tsx](src/components/site/WhatsAppButton.tsx) | Fixed bottom-right overlay (not in document flow) |

> ⚠️ NOTE: The client's assumed map ("Marketplace Experience", "Experience Snapshot", etc.)
> does NOT match reality. There is no separate "Marketplace Experience" section; Toolkit and
> Experience are distinct sections; there is exactly ONE CTA section (FinalCta) plus Contact.
> Changes must be mapped against THIS structure.

---

## B. SECTION-BY-SECTION CONTENT AUDIT

### 01. Header — `Header.tsx`
- **Heading:** Wordmark link `#top` → text "Shahinda Kazi" (not a real `<h*>`; plain `<a>`)
- **Nav links (hardcoded array `links`):** About `#about` · Services `#services` · Impact `#impact` · Contact `#contact`
- **CTA:** "Book a Consultation" → `#contact` (desktop pill + mobile full-width, mobile adds "→")
- **Visual:** none; lucide icons `Menu`/`X` for mobile toggle, `ArrowRight` on CTA
- **Behavior:** `useState(open)`; sticky top-0 z-40, `bg-background/85 backdrop-blur-md`; nav hidden below `md`, hamburger below `md`
- **Hardcoded** — contains the client's name "Shahinda Kazi" ⚠️ (relevant to request #6)

### 02. Hero — `sections.tsx → Hero()`
- **Eyebrow:** "Independent Ecommerce Consultant"
- **H1:** "I help ecommerce brands scale revenue and build high-performing support operations." (with "scale revenue" in `text-gold`)
- **Body:** "Scaling online revenue through marketplace strategy, performance marketing & customer experience."
- **CTAs:** "Book a Consultation" → `#contact` (primary); "See the Impact" → `#impact` (ghost)
- **Visual:** CSS/SVG "growth-panel" card — rotated `aspect-[4/5]` dark card:
  - Eyebrow "Growth, compounded", big lime **+275%** "Revenue Growth"
  - SVG curve (`chart-line-draw` animation) + rising bars (`bars = [28,36,34,48,55,62,74,92]`, hardcoded)
  - Floating tags: "Marketplace-first" (left) and "Built for the next stage" (lime, right)
- **Icons:** none besides `ArrowRight` in CTAs
- **Responsive:** 2-col grid `lg:grid-cols-[1.15fr_0.85fr]`, stacks below lg; font scales `text-[2.5rem] sm:text-6xl lg:text-[4.4rem]`
- **Hardcoded**

### 03. About — `sections.tsx → About()`
- **Eyebrow:** "01 / About"
- **H2:** "Growth is more than a number. It's a system." (lime span on second sentence)
- **Body p1:** "I'm a results-driven ecommerce and business development leader with **11+ years** across customer support operations, marketplaces, D2C websites and **quick commerce** platforms." ⚠️ (QC occurrence + the 11+ number)
- **Body p2:** "I bring the commercial and operational pieces together — from dispatch and logistics to performance marketing, inventory strategy and customer support teams across calls, email and chat."
- **CTA:** "Let's talk about your next stage" → `#contact` (lime variant)
- **Visual:** dark `bg-ink` full-width band; no images
- **Responsive:** `lg:grid-cols-[1.2fr_1fr]`; heading `text-4xl sm:text-5xl lg:text-6xl`
- **Hardcoded**

### 04. Services — `sections.tsx → Services()` + `services[]` array
- **Eyebrow:** "02 / What I do" · **H2:** "Practical expertise. Measurable momentum."
- **Aside:** "Focused support for brands ready to turn scattered activity into a clear, profitable growth engine."
- **7 cards (data-driven from `services[]`):**
  1. `Store` — **Marketplace Management** — "Build stronger marketplace presence across **Amazon, Flipkart, Ajio, Myntra** and beyond." ⚠️ (marketplace names)
  2. `Zap` — **Quick Commerce Strategy** — "Win the last mile with thoughtful assortment, availability and platform strategy." ⚠️ (QC — request #4 target)
  3. `Target` — Performance Marketing & PPC — "Turn ad spend into profitable growth across **Amazon Ads**, PLA, Google and Meta."
  4. `Headphones` — Support Operations — "Set up customer-first support systems, workflows and high-performing teams."
  5. `Boxes` — Inventory & Pricing Strategy — "Balance availability, margin and velocity with sharper planning and pricing."
  6. `Globe` — D2C Website & GTM — "Shape a clearer go-to-market plan and a digital storefront built to convert."
  7. `FileSearch` — Catalog & PDP Optimization — "Make every product page easier to find, understand and choose."
- **8th tile:** dark CTA tile "Not sure where to start?" / "Let's find it together" → `#contact`
- **Icons:** lucide (above); numbered `01…07` via `String(i+1).padStart`
- **Grid:** borderless-tile look, `sm:grid-cols-2 lg:grid-cols-4`
- **Card 2 title "Quick Commerce Strategy" is ALSO the exact string used as a Contact-form option** ⚠️ (but they are separate literals — removing one doesn't touch the other)

### 05. Impact — `sections.tsx → Impact()` + `metrics[]` array + `MetricChart()`
- **Eyebrow:** "03 / The impact" · **H2:** "Proof that clarity compounds."
- **Aside:** "Outcomes from turning strategy into action — and action into a stronger business."
- **7 metrics (data-driven):**
  1. **275%** — Revenue growth (featured: dark card, `text-7xl/8xl lime`, spans 2 cols/2 rows)
  2. **₹35L → ₹2.5Cr** — D2C annual revenue
  3. **5X** — ROAS
  4. **-18% → 1%** — Profitability improvement
  5. **40–55%** — Website traffic growth
  6. **25%** — Repeat purchase rate
  7. **TOP 3** — **Amazon** seller in stationery category
- **Visuals:** `MetricChart` cycles 3 decorative CSS/SVG chart styles (bar / dot-grid / line) by `index % 3`; hover lifts chart (CSS `.group:hover .metric-chart`)
- **Grid:** `sm:grid-cols-2 lg:grid-cols-4`, gap-px hairlines
- **No "9+" anywhere in this section** — largest numbers are 275% / 5X

### 06. Toolkit — `sections.tsx → Toolkit()` + `tools[]` array
- **Eyebrow:** "04 / Toolkit" · **H2:** "The capabilities behind the work."
- **15 chips (data-driven):** Customer Support Management · Marketplace Management · **Quick Commerce** ⚠️ · **Amazon Ads** · **Flipkart PLA** · Performance Marketing · PPC Campaigns · Inventory Planning · Pricing Strategy · Vendor Management · Catalog Optimization · SEO / SEM · P&L Management · Data Analysis · GTM Strategy
- **Behavior:** chip hover fills with primary color
- **No id anchor** — not in nav
- **QC chip here is a separate literal** from Services and the form ⚠️

### 07. Experience — `sections.tsx → Experience()` + `roles[]` array
- **Eyebrow:** "Experience" (no number) · **H2:** "**11+ years** across ecommerce, marketplaces, D2C and growth." ⚠️ (the 11+ number)
- **7 roles (data-driven):**
  1. Business Development Manager — Viaterra Gears — 2026 — Present (gold "now" dot)
  2. Sr. Ecommerce Manager — Priority Bags — 2025 — 2026
  3. Ecommerce Manager — Scott Sports — 2017 — 2025
  4. Online Manager — Doodle Collection — 2016 — 2017
  5. Sr. Category Executive — Big Bazaar Direct — 2015 — 2016
  6. Ecommerce Executive — Mitashi Edutainment — 2013 — 2015
  7. Backend Executive — Mitashi Edutainment — 2010 — 2013
- **Responsive:** `grid-cols-[1fr_auto]` mobile → `sm:grid-cols-[1.3fr_1fr_auto]` (company column hidden on mobile, inlined in year cell)
- **⚠️ Date inconsistency:** first role says "2026 — Present" but current date is Sep 2026 while role 2 ends 2026 — verify with client later (noted, not changed)

### 08. Final CTA — `sections.tsx → FinalCta()`
- **H2:** "Ready to turn ecommerce activity into growth?" (lime "growth?")
- **Body:** "Let's identify where your marketplace, D2C, marketing or operations can perform better."
- **CTAs:** "Book a Consultation" → `#contact` (lime); "**WhatsApp Shahinda**" ⚠️ → `waLink` external (ghostDark)
- **Dark band** `bg-ink py-24 lg:py-36` — hardcoded; contains the name ⚠️

### 09. Contact — `sections.tsx → Contact()` + [ContactForm.tsx](src/components/site/ContactForm.tsx)
- **H2:** "Have a growth question?" · **Sub (display font, gold):** "Let's make it clearer."
- **Body:** "Tell me where you are today and what you're aiming for next."
- **Contact list (`items[]`, hardcoded):**
  - `Mail` **Email** → `shahindak2@gmail.com` (mailto) ⚠️
  - `Phone` **Phone** → "+91 89768 90885" (tel:+918976890885) ⚠️
  - `Linkedin` **LinkedIn** → "Shahinda Kazi" → `https://www.linkedin.com/search/results/people/?keywords=Shahinda%20Kazi` ⚠️ (a SEARCH URL, not a profile)
  - `MapPin` **Location** → "India" (plain text)
- **Form:** see §D below
- **Responsive:** `lg:grid-cols-[1fr_1.2fr]`

### 10. Footer — `sections.tsx → Footer()`
- **Name:** "Shahinda Kazi" (display font) ⚠️
- **Tagline:** "Ecommerce Consultant & Growth Specialist"
- **Micro-tagline:** "Marketplace • D2C • **Quick Commerce** • Ecommerce Growth" ⚠️
- **Links:** Email (mailto) · Phone (`tel:+918976890885`) · LinkedIn (same search URL, external)
- **Layout:** stacks on mobile, `md:flex-row md:items-end md:justify-between`

### 11. Floating WhatsApp — `WhatsAppButton.tsx`
- Fixed bottom-right pill, WhatsApp-green `#25D366`, icon + "Chat on WhatsApp" (text hidden below `sm`)
- See §E for details.

---

## C. CONTENT SEARCH RESULTS (all requested terms)

Legend: 🟢 visible on page · 🔍 SEO/meta · 📋 form · 📄 non-rendered (README/docs)

### "Quick Commerce" (case-insensitive, incl. "quick commerce") — 8 code occurrences, 7 rendered/meta
| # | Where | Exact text | File | Visible | SEO | Form |
|---|-------|-----------|------|---------|-----|------|
| 1 | About body | "...marketplaces, D2C websites and quick commerce platforms." | sections.tsx:201 | 🟢 | — | — |
| 2 | Services card 2 title | "Quick Commerce Strategy" | sections.tsx:227 | 🟢 | — | — |
| 3 | Toolkit chip | "Quick Commerce" | sections.tsx:409 | 🟢 | — | — |
| 4 | Footer tagline | "Marketplace • D2C • Quick Commerce • Ecommerce Growth" | sections.tsx:574 | 🟢 | — | — |
| 5 | Form select option | "Quick Commerce Strategy" | ContactForm.tsx:80 | 🟢 | — | 📋 |
| 6 | Page meta description | "...marketplaces, D2C and quick commerce. Marketplace growth..." | src/routes/index.tsx:18 | — | 🔍 | — |
| 7 | Root meta description | "Ecommerce consulting across marketplaces, D2C and quick commerce — revenue..." | src/routes/__root.tsx:80 | — | 🔍 | — |
| 8 | README | "...marketplaces, D2C and quick commerce." | README.md:3 | 📄 | — | — |

### "Ecommerce" — pervasive; every section heading/body, both meta descriptions, page titles, README. Too numerous to list; no surprises — all in sections.tsx / index.tsx / __root.tsx / README.

### "Marketplace" — About body, Services card 1 + aside, Hero tag "Marketplace-first", Toolkit chips ×2, Experience H2, FinalCta body, Footer tagline, both meta descriptions.

### "D2C" — About body, Services card 6 ("D2C Website & GTM"), Impact metric 2 label, Toolkit (GTM Strategy implied), Experience H2, FinalCta body, Footer tagline, both meta descriptions.

### "Amazon" — 4 occurrences: Services card 1 body ("Amazon, Flipkart, Ajio, Myntra and beyond."), Services card 3 body ("Amazon Ads, PLA, Google and Meta"), Impact metric 7 ("Amazon seller in stationery category"), Toolkit chip ("Amazon Ads"). All sections.tsx. All 🟢.

### "Flipkart" — 2: Services card 1 body, Toolkit chip "Flipkart PLA". sections.tsx. 🟢

### "Ajio" — 1: Services card 1 body. 🟢
### "Myntra" — 1: Services card 1 body. 🟢
### "Zepto" — **0 occurrences anywhere.**
### "Blinkit" — **0 occurrences anywhere.**
### "Instamart" — **0 occurrences anywhere.**
### "BigBasket" — **0 occurrences anywhere.** (Only "Big Bazaar Direct" as an employer in Experience — different brand.)

### "9+" — **0 occurrences in any rendered content or meta.** (Regex hits were only hash strings in lockfiles.)
### "11+" — 4 occurrences:
| Where | Exact text | File | Visible | SEO |
|-------|-----------|------|---------|-----|
| About body p1 | "...leader with 11+ years across..." | sections.tsx:200 | 🟢 | — |
| Experience H2 | "11+ years across ecommerce, marketplaces, D2C and growth." | sections.tsx:466 | 🟢 | — |
| Page meta description | "...with 11+ years of hands-on experience..." | src/routes/index.tsx:18 | — | 🔍 |
| README | "Ecommerce consultant with 11+ years..." | README.md:3 | 📄 | — |

> ✅ KEY FINDING: The site ALREADY says "11+" everywhere. There is no "9+" on the page. The client's "11+ instead of 9+" request appears **already satisfied** in the current build.

### "Shahinda" — 10 occurrences (name removal impact — request #6):
| Where | Text | File |
|-------|------|------|
| Header wordmark | "Shahinda Kazi" | Header.tsx:21 |
| Root page title (SEO) | "Shahinda Kazi — Ecommerce Consultant & Growth Specialist" | __root.tsx:76 |
| Root author meta (SEO) | "Shahinda Kazi" | __root.tsx:82 |
| Route title const (SEO) | same title | index.tsx:16 |
| FinalCta CTA | "WhatsApp Shahinda" | sections.tsx:509 |
| Contact list LinkedIn row | "Shahinda Kazi" | sections.tsx:521 |
| Footer name | "Shahinda Kazi" | sections.tsx:569 |
| WhatsApp constants | EMAIL `shahindak2@gmail.com` / LINKEDIN search URL | sections.tsx:19–21 |
| WA prefill message | "Hi Shahinda, I found your website..." | WhatsAppButton.tsx:3 |
| README title | "# Shahinda Kazi — Portfolio & Consultancy" | README.md:1 |

### "LinkedIn" — 3 rendered: FinalCta (none — actually 0 there), Contact list row ("LinkedIn" label + value "Shahinda Kazi", href = LinkedIn **search results URL**), Footer link (same search URL). ⚠️ Not a real profile link.

### "Email" — Contact list label + `shahindak2@gmail.com`; Footer "Email" link (same mailto). ⚠️ personal Gmail.

### "WhatsApp" — FinalCta button ("WhatsApp Shahinda"), FloatingWhatsApp ("Chat on WhatsApp", aria-label "Chat on WhatsApp").

### Phone number "+91 89768 90885" / `918976890885` / `+918976890885` — 4 places:
1. `sections.tsx:20` — `PHONE` constant (display in Contact list)
2. `sections.tsx` Contact `tel:+918976890885` href
3. `sections.tsx` Footer `tel:+918976890885` href
4. `WhatsAppButton.tsx:1` — `WA_NUMBER = "918976890885"` (drives waLink, used by FloatingWhatsApp AND FinalCta button)

---

## D. FORM AUDIT — `ContactForm.tsx`

| Aspect | Current implementation |
|--------|------------------------|
| Fields | Name* (text) · Email* (email) · Phone (tel, optional, placeholder "+91") · Business / Company (text) · Website / Store URL (text, full-width) · "What do you need help with"* (select) · Message (textarea, rows 4, optional) |
| Required | Name, Email, Need(select). Optional: Phone, Company, Website, Message. (Native `required` attributes) |
| Select options (7) | Marketplace Management · **Quick Commerce Strategy** ⚠️ · Performance Marketing & PPC · Support Operations · Inventory & Pricing Strategy · D2C Website & GTM · Catalog & PDP Optimization. Default: disabled "Select an area" (`defaultValue=""`, required). NOTE: options do NOT include "Other" |
| Submit button | "Send an enquiry →" (text-sm, primary bg, full-width mobile / auto desktop) |
| Validation | **Native HTML5 browser validation only.** No zod/RHF despite deps being installed. No custom error messages or error UI |
| Submission mechanism | **None.** `onSubmit` does `e.preventDefault(); setSent(true);` — data goes **nowhere**. No fetch, no server action, no API, no webhook, no email integration |
| Success state | Full-panel replacement: green-check circle card — "Thank you. Your enquiry has been received." + "I'll be in touch shortly to understand your ecommerce goals and challenges." |
| Error state | Browser-native only (e.g., invalid email bubble). No inline error styling |
| Contains "Quick Commerce"? | **YES** — select option "Quick Commerce Strategy" (ContactForm.tsx:80) ⚠️ (request #7 target) |
| Styling | Underline-only fields (`border-b`), gold asterisks, eyebrow labels. Not using shadcn ui/form components |
| Risk note | Removing the QC option is trivial (single `<option>`). But note the option list mirrors `services[]` titles (except QC name matches card title exactly); if Services card 2 is also removed, keeping the form option in sync is a consistency question for the client |

---

## E. WHATSAPP AUDIT — `WhatsAppButton.tsx`

| Aspect | Current implementation |
|--------|------------------------|
| Number | `WA_NUMBER = "918976890885"` (= +91 89768 90885) — **single source**, module-level constant |
| Where stored | Top of `WhatsAppButton.tsx`; exported as `waLink` and imported by `sections.tsx` (FinalCta) — the floating widget and FinalCta button share the same link |
| URL | `https://wa.me/918976890885?text=<encoded>` |
| Prefill | "Hi Shahinda, I found your website and would like to discuss my ecommerce business." (encodeURIComponent) — ⚠️ contains the name |
| Desktop | Fixed pill bottom-right (`sm:bottom-8 sm:right-8`), icon + visible label "Chat on WhatsApp", hover scale 1.03 |
| Mobile | Same pill, icon only (label `hidden sm:inline`), `bottom-5 right-5`, z-50 (above header z-40) |
| Icon | Inline SVG WhatsApp glyph (`WhatsAppIcon`), no external icon lib |
| Opens | New tab (`target="_blank" rel="noopener noreferrer"`) on all devices — wa.me then OS handles app handoff |
| Not changed | Per instructions — number untouched |

---

## F. SEO AUDIT (current state — not modified)

| Item | Current |
|------|---------|
| Title | "Shahinda Kazi — Ecommerce Consultant & Growth Specialist" (set in BOTH `__root.tsx` head AND `index.tsx` head — route overrides root) |
| Meta description | Route-level: "Ecommerce consultant with 11+ years of hands-on experience across marketplaces, D2C and quick commerce. Marketplace growth, performance marketing and ecommerce operations." Root-level variant exists too (quick commerce phrased differently) |
| OG | `og:title`, `og:description`, `og:type=website` (route) + `og:type` (root). **NO `og:image`** — despite `twitter:card=summary_large_image` which expects one ⚠️ |
| Twitter | `twitter:card=summary_large_image` (both levels), no twitter:title/image |
| Canonical URL | **MISSING** ⚠️ |
| Structured data / JSON-LD | **NONE** |
| robots.txt | `public/robots.txt` — allows Googlebot, Bingbot, Twitterbot, facebookexternalhit, `*`. No sitemap, no disallows |
| Sitemap | **MISSING** |
| Favicon | `/favicon.svg` (primary) + `/favicon.ico` (alternate) |
| Fonts | Google Fonts link: Bricolage Grotesque (400–700) + Manrope (400–600), with preconnects, `display=swap` |
| Heading hierarchy | Exactly **one h1** (Hero) ✅ · h2 per section (About, Services, Impact, Toolkit, Experience, FinalCta, Contact) · h3 only for service cards + form success message ✅ · Header wordmark is an `<a>`, not a heading ✅ |
| Image alt | No `<img>` tags exist; all decorative SVGs/CSS have `aria-hidden="true"` ✅ |
| author meta | "Shahinda Kazi" ⚠️ (name removal impact) |

---

## G. RESPONSIVE AUDIT

| Breakpoint usage | Where |
|------------------|-------|
| `sm:` (640) | Section padding, Hero chart insets, service grid 2-col, Experience 3-col row, WhatsApp label visible |
| `md:` (768) | Header nav vs hamburger switch, Footer row layout |
| `lg:` (1024) | All section grids go multi-column (Hero 2-col, About 2-col, Services 4-col, Impact 4-col, Toolkit/Experience/Contact 2-col), larger type tiers, taller section padding |
| Fixed overlays | Header sticky z-40; WhatsApp z-50 — **no overlap handling between them** (WhatsApp pill can sit over Footer content on small screens; currently acceptable) |
| Mobile menu | Conditional render (not animated drawer); closes on link click; includes its own "Book a Consultation →" CTA |
| Type scaling | Every section uses 3-tier fluid-ish headings (text-4xl → sm:text-5xl → lg:text-6xl/7xl) |
| Reduced motion | `prefers-reduced-motion` disables ALL chart/reveal animations (styles.css) ✅ |
| Touch targets | Nav links/CTAs ≥ 40px; WhatsApp pill adequately sized |
| No tablet-specific layout issues observed from code; visual verification pending (no changes made) |

---

## H. TECHNICAL / COMPONENT STRUCTURE

| Aspect | Detail |
|--------|--------|
| Framework | TanStack Start (SSR) + TanStack Router (file-based, single route `/`), React 19, TypeScript strict |
| Build/deploy | Vite 8 + Nitro → **Cloudflare module worker** preset (auto worker name `pratik2883-shahinda`) |
| Entry | `src/routes/index.tsx` (page) composed of `Header` + 8 section components + `Footer` + `FloatingWhatsApp`; root shell `__root.tsx` (QueryClientProvider, head, 404/error components) |
| Styling | Tailwind CSS 4 (`@theme inline` in `src/styles.css`), CSS-first tokens, no tailwind.config |
| Fonts | `--font-display: Bricolage Grotesque` (headings), `--font-sans: Manrope` (body) — loaded via Google Fonts in `__root.tsx` |
| Color tokens (light only, no dark theme values) | `--background` warm paper, `--primary` deep green, `--gold` olive-gold, `--lime` bright lime, `--ink` dark green band color, `--ink-foreground`, full shadcn token set |
| Custom utilities | `eyebrow` (small caps label), `rule-top`; custom keyframes `chart-line-draw`, `chart-bar-rise`, `chart-dot-in`, `chart-end-pulse`; `.reveal-shown` animation triggers |
| Reveal system | `Reveal.tsx` — IntersectionObserver (threshold 0.12), fade+rise 700ms, optional `delay`; also gates chart animations via `.reveal-shown` class |
| Section scaffolding | `Shell` (max-w-7xl wrapper with id), `SectionHead` (eyebrow/h2/aside grid), `Cta` (4 variants: primary/lime/ghost/ghostDark) — all local to sections.tsx |
| Reusable UI lib | 50 shadcn/ui components in `src/components/ui/` — **almost entirely UNUSED by the landing page** (only pattern-level; page uses custom markup). Candidates for cleanup later |
| Data-driven parts | `services[]` (7), `metrics[]` (7), `tools[]` (15), `roles[]` (7), Header `links[]` (4), Contact `items[]` (4) — all in-file const arrays. Everything else hardcoded JSX |
| Assets | `public/favicon.svg` (S monogram on dark-green — the only "logo"), `public/favicon.ico`, `public/robots.txt`, `src/assets/shahinda-portrait.jpg` (**UNUSED — zero references in code**) |
| Server | `src/server.ts` SSR error wrapper (wired via vite.config `server: { entry: "server" }`); `src/lib/error-capture.ts`, `error-page.ts` |
| AGENTS.md constraint | Connected to Lovable — do not rewrite pushed git history |

---

## I. ALL QUICK COMMERCE OCCURRENCES (summary for request #4/#7)

Rendered page (4): About body · Services card 2 · Toolkit chip · Footer tagline
Form (1): select option "Quick Commerce Strategy"
SEO/meta (2): route meta description · root meta description
Docs (1): README.md

**Zero** occurrences of Zepto/Blinkit/Instamart/BigBasket anywhere.
Related-but-not-QC strings that may ALSO need client review when removing QC: Impact has no QC metric ✅; Services card 2 is the only QC *service*; Toolkit chip is standalone.

## J. ALL 9+ / 11+ OCCURRENCES

- "9+": **none, anywhere** (rendered, meta, or docs).
- "11+": About body (sections.tsx:200) · Experience H2 (sections.tsx:466) · route meta description (index.tsx:18) · README.md:3.
- ✅ The "9+ → 11+" client request is already fulfilled in the current codebase.

---

## K. CLIENT CHANGE IMPACT MAP

> Images 1–5 and 7 were not provided in this thread; mapping below gives the most likely
> candidate sections per request type and the full blast radius once the image is identified.

### Request 1 — "Image 1: Remove this section"
→ CURRENT SECTION: TBD on image review. Removal candidates by section type: Toolkit (no nav anchor, low coupling), Experience, or a CTA band.
→ FILE: sections.tsx (single file holds Hero→Footer) — deleting any exported section also requires editing `src/routes/index.tsx` import + JSX.
→ CONTENT AFFECTED: that section's data array + JSX.
→ OTHER PLACES: `index.tsx` (import list + `<Section />` render); Header nav if the removed section has a nav anchor (Impact/Services/About/Contact do; Toolkit/Experience/FinalCta do not); any `#anchor` CTAs pointing at it (Hero "See the Impact" → `#impact`); section numbering eyebrows ("01 / About"…"04 / Toolkit" — renumber or de-number after removals).
→ RISKS: LOW-MED. All sections are independent blocks; no cross-imports between sections except shared Shell/SectionHead/Cta/Reveal.

### Request 2 — "Image 2: Replace section with supplied slide"
→ CURRENT SECTION: TBD on image review.
→ FILE: sections.tsx (replace one exported component's internals) + possibly new asset in `src/assets/` or `public/`.
→ CONTENT AFFECTED: full section JSX.
→ OTHER PLACES: index.tsx only if section name/export changes; assets import.
→ RISKS: MED — must preserve `Reveal` wrapper if chart animations are kept; keep responsive tiers.

### Request 3 — "Image 3: whole slide as new section design/content direction"
→ CURRENT SECTION: TBD; likely a NEW component or a rebuild of an existing one.
→ FILE: new section component in sections.tsx or new file; register in index.tsx.
→ RISKS: MED — new assets, possible new layout patterns; keep eyebrow/heading conventions for consistency.

### Request 4 — "Remove Quick Commerce" (page-wide)
→ CURRENT SECTION: 4 rendered spots + 2 meta + 1 doc:
  1. Services card 2 (`services[1]` — "Quick Commerce Strategy") → removing shrinks grid to 6 cards + CTA tile (grid math: lg:grid-cols-4 still fine: 6+1=7 tiles)
  2. Toolkit chip "Quick Commerce" (`tools[2]`)
  3. About body phrase "…marketplaces, D2C websites and quick commerce platforms."
  4. Footer tagline "Marketplace • D2C • Quick Commerce • Ecommerce Growth"
  5. Route meta description (index.tsx:18) — SEO copy rewrite
  6. Root meta description (__root.tsx:80) — SEO copy rewrite
  7. README.md (optional, non-rendered)
→ FILES: sections.tsx, index.tsx, __root.tsx, README.md
→ RISKS: LOW. All 5 rendered occurrences are independent literals. Watch: (a) section eyebrow numbering unaffected; (b) Services grid tile count changes; (c) meta descriptions must stay coherent ("marketplaces, D2C and quick commerce" is currently the positioning line).

### Request 5 — "Image 5: Remove this section" — same mechanics as Request 1.

### Request 6 — "Client does not want personal name public; new phone/SIM + domain email later; LinkedIn undecided"
→ CURRENT SECTIONS: name/identity appears in **10 places** (see §"Shahinda" table):
  Header wordmark · SEO title ×2 (root + route) · author meta · FinalCta "WhatsApp Shahinda" · Contact LinkedIn row value · Footer name · WhatsApp prefill message · README
→ CONTACT-SPECIFIC: Email `shahindak2@gmail.com` (Contact + Footer), Phone `+91 89768 90885` (Contact display + 2 tel: links incl. Footer), LinkedIn href = **LinkedIn search URL, not a profile** (Contact + Footer)
→ FILES: Header.tsx, sections.tsx, index.tsx, __root.tsx, WhatsAppButton.tsx, README.md
→ DEPENDENCIES/RISKS: **MED-HIGH — this is the most entangled request.**
  - Phone/email/LinkedIn are duplicated constants (PHONE/EMAIL/LINKEDIN in sections.tsx; WA_NUMBER in WhatsAppButton.tsx) — a future swap must hit both files, and `waLink` is shared by FloatingWhatsApp AND FinalCta.
  - Removing the name from the SEO title changes the page title; header wordmark needs a replacement brand mark; WhatsApp prefill text is name-bearing.
  - LinkedIn search URL is fragile (not a real profile) — flagged for client decision.
  - Recommend: when changes begin, centralize identity (EMAIL/PHONE/WA/LINKEDIN/BRAND_NAME) into one config module (e.g., `src/lib/site.ts`) FIRST, then swap values once the client provides new SIM/domain. (Not done now — audit only.)

### Request 7 — "Remove Quick Commerce from the form"
→ CURRENT SECTION: Contact → form select
→ FILE: ContactForm.tsx:80 — delete `<option>Quick Commerce Strategy</option>` (single line)
→ OTHER PLACES: consistency with Services card 2 (request #4) — decide whether the *service* disappears or only the *form option*; no "Other" fallback option exists, so removing it narrows enquiry choices.
→ RISKS: LOW. No logic reads option values; form isn't wired to any backend.

### Prior request — "11+ instead of 9+"
→ STATUS: **Already implemented.** "9+" appears nowhere; "11+" is in About, Experience H2, and meta description. No action needed; confirm with client.

---

## L. RECOMMENDED IMPLEMENTATION ORDER (for later, when client says go)

1. **Centralize identity/config first** — extract NAME, EMAIL, PHONE, WA_NUMBER, LINKEDIN, and possibly services/tools arrays into `src/lib/site.ts`. Makes requests 4, 6, 7 one-file edits instead of five.
2. **Structural removals (Images 1 & 5)** — delete/rebuild sections, update `index.tsx` composition, re-check Header nav anchors + eyebrow numbering, run build.
3. **Slide replacements (Images 2 & 3)** — add assets, rebuild section markup, verify Reveal/animations + responsive tiers.
4. **Quick Commerce sweep (requests 4 & 7 together)** — services array, tools array, About copy, Footer tagline, both meta descriptions, form option; keep Services grid tile math sane.
5. **Identity swap (request 6, phase 1)** — de-name the public page (placeholder brand/title now), leave placeholders for new phone/email; disable or genericize LinkedIn + WhatsApp prefill until client supplies details.
6. **Identity swap (phase 2, when client provides)** — new SIM number (one constant), domain email (one constant), decide LinkedIn.
7. **SEO pass last** — rewrite title/description without name + without QC, add canonical + og:image + JSON-LD, regenerate favicon if brand mark changes.
8. After every step: `npx tsc --noEmit` + `npm run lint` + `npm run build`, then visual smoke test.

---

**AUDIT COMPLETE — no files modified, no code changed. Awaiting next instruction.**
*(Note: this AUDIT.md file itself is the only new file created, as documentation.)*
