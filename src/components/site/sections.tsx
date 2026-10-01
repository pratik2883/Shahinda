import {
  ArrowRight,
  Store,
  Zap,
  Target,
  Headphones,
  Boxes,
  Globe,
  FileSearch,
  Mail,
  Phone,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink } from "./WhatsAppButton";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

const EMAIL = site.email;
const PHONE = site.phone;
const LINKEDIN = site.linkedinUrl;

const Shell = ({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className={className}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
  </section>
);

function SectionHead({
  eyebrow,
  title,
  aside,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  aside?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
      <div>
        <p className={`eyebrow ${dark ? "!text-lime" : ""}`}>{eyebrow}</p>
        <h2
          className={`mt-5 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl ${dark ? "text-primary-foreground" : "text-foreground"}`}
        >
          {title}
        </h2>
      </div>
      {aside && (
        <p
          className={`max-w-md text-base leading-relaxed lg:justify-self-end ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          {aside}
        </p>
      )}
    </Reveal>
  );
}

function Cta({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "lime" | "ghostDark";
  external?: boolean;
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    lime: "bg-lime text-primary hover:opacity-90",
    ghost: "text-foreground underline-offset-8 hover:underline",
    ghostDark:
      "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium transition ${styles}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export function Hero() {
  const bars = [28, 36, 34, 48, 55, 62, 74, 92];
  return (
    <Shell id="top" className="pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="eyebrow">Independent Ecommerce Consultant</p>
          <h1 className="mt-6 text-[2.5rem] leading-[1] text-foreground sm:text-6xl lg:text-[4.4rem]">
            I help ecommerce brands <span className="text-gold">scale revenue</span> and build
            high-performing support operations.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Scaling online revenue through marketplace strategy, performance marketing &amp;
            customer experience.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Cta href="#contact">Book a Consultation</Cta>
            <Cta href="#impact" variant="ghost">
              See the Impact
            </Cta>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-md">
          <div className="growth-panel relative aspect-[4/5] rotate-[-4deg] overflow-hidden bg-ink p-8 text-ink-foreground sm:p-10">
            <p className="eyebrow !text-lime">Growth, compounded</p>
            <p className="mt-6 font-display text-6xl font-semibold tracking-tight text-lime sm:text-7xl">
              +275%
            </p>
            <p className="mt-2 text-sm text-ink-foreground/70">Revenue Growth</p>
            <div className="absolute inset-x-8 bottom-8 h-1/2 sm:inset-x-10 sm:bottom-10">
              <div
                className="absolute inset-0 flex flex-col justify-between opacity-15"
                aria-hidden="true"
              >
                {[0, 1, 2, 3].map((line) => (
                  <span key={line} className="h-px w-full bg-lime" />
                ))}
              </div>
              <svg
                aria-hidden="true"
                viewBox="0 0 400 180"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible text-lime"
              >
                <path
                  d="M0 158 C48 151 70 164 112 134 C156 102 179 122 220 91 C264 57 296 75 334 38 C354 20 378 25 400 9 L400 180 L0 180 Z"
                  className="fill-lime/8"
                />
                <path
                  d="M0 158 C48 151 70 164 112 134 C156 102 179 122 220 91 C264 57 296 75 334 38 C354 20 378 25 400 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="chart-line-draw"
                  pathLength="1"
                />
                <circle cx="400" cy="9" r="5" fill="currentColor" className="chart-end-dot" />
              </svg>
            </div>
            <div
              className="absolute inset-x-8 bottom-8 flex h-1/2 items-end gap-2 opacity-25 sm:inset-x-10 sm:bottom-10"
              aria-hidden="true"
            >
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%`, animationDelay: `${350 + i * 90}ms` }}
                  className={`chart-bar-rise flex-1 origin-bottom ${i === bars.length - 1 ? "bg-lime" : "bg-ink-foreground/25"}`}
                />
              ))}
            </div>
          </div>
          <span className="absolute -left-4 top-10 bg-background px-4 py-2 text-xs font-medium tracking-wide text-foreground shadow-soft sm:-left-10">
            Marketplace-first
          </span>
          <span className="absolute -right-2 bottom-16 bg-lime px-4 py-2 text-xs font-medium tracking-wide text-primary sm:-right-8">
            Built for the next stage
          </span>
        </Reveal>
      </div>
    </Shell>
  );
}

export function About() {
  return (
    <Shell id="about" className="bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="eyebrow !text-lime">01 / About</p>
          <h2 className="mt-5 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
            Growth is more than a number. <span className="text-lime">It's a system.</span>
          </h2>
        </Reveal>
        <Reveal
          delay={120}
          className="space-y-6 text-lg leading-relaxed text-ink-foreground/75 lg:pt-12"
        >
          <p>
            I'm a results-driven ecommerce and digital marketing leader with 11+ years of experience
            building and scaling D2C brands.
          </p>
          <p>
            I focus on the growth engine behind a brand — performance marketing, marketplace
            strategy, and inventory &amp; pricing decisions that turn traffic into revenue. From
            launching a D2C storefront to scaling it profitably, I bring the strategic and marketing
            pieces together to build sustainable, measurable growth.
          </p>
          <div className="pt-4">
            <Cta href="#contact" variant="lime">
              Let's talk about your next stage
            </Cta>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

const services = [
  {
    icon: Store,
    t: "Marketplace Management",
    d: "Build stronger marketplace presence across Amazon, Flipkart, Ajio, Myntra and beyond.",
  },
  {
    icon: Target,
    t: "Performance Marketing & PPC",
    d: "Turn ad spend into profitable growth across Amazon Ads, PLA, Google and Meta.",
  },
  {
    icon: Headphones,
    t: "Support Operations",
    d: "Set up customer-first support systems, workflows and high-performing teams.",
  },
  {
    icon: Boxes,
    t: "Inventory & Pricing Strategy",
    d: "Balance availability, margin and velocity with sharper planning and pricing.",
  },
  {
    icon: Globe,
    t: "D2C Website & GTM",
    d: "Shape a clearer go-to-market plan and a digital storefront built to convert.",
  },
  {
    icon: FileSearch,
    t: "Catalog & PDP Optimization",
    d: "Make every product page easier to find, understand and choose.",
  },
];

export function Services() {
  return (
    <Shell id="services" className="py-24 lg:py-32">
      <SectionHead
        eyebrow="02 / What I do"
        title={<>Practical expertise. Measurable momentum.</>}
        aside="Focused support for brands ready to turn scattered activity into a clear, profitable growth engine."
      />
      <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal
            key={s.t}
            delay={i * 50}
            className="group border-b border-r border-border p-8 transition-colors hover:bg-card"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="mt-14 text-xl leading-tight text-foreground">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </Reveal>
        ))}
        <a
          href="#contact"
          className="group flex flex-col justify-between border-b border-r border-border bg-primary p-8 text-primary-foreground sm:col-span-2"
        >
          <span className="eyebrow !text-lime">Not sure where to start?</span>
          <span className="mt-14 flex items-center gap-2 font-display text-xl">
            Let's find it together
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </Shell>
  );
}

const metrics = [
  { v: "275%", l: "Revenue growth scaled on a major marketplace portfolio" },
  { v: "₹35L → ₹2.5Cr", l: "D2C annual revenue scaled with a focused growth plan" },
  { v: "5X", l: "ROAS achieved across performance marketing campaigns" },
  { v: "-18% → 1%", l: "Profitability improved through pricing & marketing optimization" },
  { v: "40–55%", l: "Website traffic increased through paid + SEO campaigns" },
  { v: "25%", l: "Repeat purchase rate generated through CX & loyalty" },
  { v: "TOP 3", l: "Seller in category on a major marketplace" },
];

function MetricChart({ index }: { index: number }) {
  if (index % 3 === 1) {
    return (
      <div
        className="metric-chart absolute inset-x-6 bottom-5 flex h-20 items-end gap-1.5 opacity-20"
        aria-hidden="true"
      >
        {[28, 48, 42, 64, 76, 68, 94].map((height, barIndex) => (
          <span
            key={height + barIndex}
            style={{ height: `${height}%`, animationDelay: `${barIndex * 80}ms` }}
            className="chart-bar-rise flex-1 origin-bottom bg-gold"
          />
        ))}
      </div>
    );
  }

  if (index % 3 === 2) {
    return (
      <div
        className="metric-chart absolute inset-x-5 bottom-5 grid h-20 grid-cols-10 gap-2 opacity-20"
        aria-hidden="true"
      >
        {Array.from({ length: 40 }, (_, dotIndex) => (
          <span
            key={dotIndex}
            style={{ animationDelay: `${dotIndex * 22}ms` }}
            className={`chart-dot aspect-square self-end rounded-full ${dotIndex > 24 - (dotIndex % 10) ? "bg-gold" : "bg-muted-foreground"}`}
          />
        ))}
      </div>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 100"
      preserveAspectRatio="none"
      className="metric-chart absolute inset-x-5 bottom-4 h-24 w-[calc(100%-2.5rem)] text-gold opacity-25"
    >
      <path
        d="M0 88 L46 77 L82 82 L123 59 L160 65 L203 35 L244 43 L284 17 L320 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="chart-line-draw"
        pathLength="1"
      />
      <path
        d="M0 88 L46 77 L82 82 L123 59 L160 65 L203 35 L244 43 L284 17 L320 7 L320 100 L0 100 Z"
        className="fill-gold/15"
      />
    </svg>
  );
}

export function Impact() {
  return (
    <Shell id="impact" className="border-t border-border py-24 lg:py-32">
      <SectionHead
        eyebrow="03 / The impact"
        title="Proof that clarity compounds."
        aside="Outcomes from turning strategy into action — and action into a stronger business."
      />
      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal
            key={m.l}
            delay={i * 50}
            className={`group relative flex min-h-52 overflow-hidden p-8 transition-colors duration-500 ${
              i === 0 ? "bg-ink text-ink-foreground sm:col-span-2 lg:row-span-2" : "bg-background"
            }`}
          >
            <MetricChart index={i} />
            {/* gradient overlay so description text is readable over decorative charts */}
            <div
              className={`pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-2/3 ${
                i === 0
                  ? "bg-gradient-to-t from-ink via-ink/90 to-transparent"
                  : "bg-gradient-to-t from-background via-background/90 to-transparent"
              }`}
              aria-hidden="true"
            />
            <div className="relative z-10 flex min-h-full flex-1 flex-col justify-between">
              <p
                className={`font-display font-semibold tracking-tight ${
                  i === 0
                    ? "text-7xl text-lime lg:text-8xl"
                    : "text-3xl text-foreground lg:text-4xl"
                }`}
              >
                {m.v}
              </p>
              <p
                className={`mt-6 text-sm font-medium leading-snug ${
                  i === 0
                    ? "text-ink-foreground/85"
                    : "text-foreground/75"
                }`}
              >
                {m.l}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

const tools = [
  "Customer Support Management",
  "Marketplace Management",
  "Amazon Ads",
  "Flipkart PLA",
  "Performance Marketing",
  "PPC Campaigns",
  "Inventory Planning",
  "Pricing Strategy",
  "Vendor Management",
  "Catalog Optimization",
  "SEO / SEM",
  "P&L Management",
  "Data Analysis",
  "GTM Strategy",
];

export function Toolkit() {
  return (
    <Shell className="border-t border-border py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="eyebrow">04 / Toolkit</p>
          <h2 className="mt-5 text-4xl leading-[1.05] text-foreground sm:text-5xl">
            The capabilities behind the work.
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap content-start gap-2.5">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </Shell>
  );
}

export function FinalCta() {
  return (
    <Shell className="bg-ink py-24 text-ink-foreground lg:py-36">
      <Reveal className="max-w-4xl">
        <h2 className="text-4xl leading-[1.02] sm:text-6xl lg:text-7xl">
          Ready to turn ecommerce activity into <span className="text-lime">growth?</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-ink-foreground/70">
          Let's identify where your marketplace, D2C, marketing or operations can perform better.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Cta href="#contact" variant="lime">
            Book a Consultation
          </Cta>
          <Cta href={waLink} variant="ghostDark" external>
            WhatsApp
          </Cta>
        </div>
      </Reveal>
    </Shell>
  );
}

export function Contact() {
  const items = [
    { icon: Mail, l: "Email", v: EMAIL, h: `mailto:${EMAIL}` },
    { icon: Phone, l: "Phone", v: PHONE, h: "tel:+919511266312" },
    { icon: Linkedin, l: "LinkedIn", v: site.linkedinLabel, h: LINKEDIN },
    { icon: MapPin, l: "Location", v: "India" },
  ];
  return (
    <Shell id="contact" className="py-24 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <h2 className="text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
            Have a growth question?
          </h2>
          <p className="mt-4 font-display text-2xl text-gold">Let's make it clearer.</p>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Tell me where you are today and what you're aiming for next.
          </p>
          <ul className="mt-12 border-t border-border">
            {items.map((i) => (
              <li key={i.l} className="flex items-center gap-4 border-b border-border py-4">
                <i.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                <span className="eyebrow w-24">{i.l}</span>
                {i.h ? (
                  <a
                    href={i.h}
                    target={i.h.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-gold"
                  >
                    {i.v}
                  </a>
                ) : (
                  <span className="text-sm text-foreground">{i.v}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </Shell>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-foreground">{site.brandName}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ecommerce Consultant &amp; Growth Specialist
          </p>
          <p className="mt-4 text-xs tracking-wide text-muted-foreground">
            Marketplace • D2C • Ecommerce Growth
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-foreground">
          <a href={`mailto:${EMAIL}`} className="hover:text-gold">
            Email
          </a>
          <a href="tel:+919511266312" className="hover:text-gold">
            Phone
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            LinkedIn
          </a>
          <a href="/privacy-policy" className="hover:text-gold">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
