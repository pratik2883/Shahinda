import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/sections";

const title = "Privacy Policy | Ecomalyst";
const description =
  "Privacy Policy for Ecomalyst covering enquiry information, cookies, analytics, advertising and communications.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ecomalyst.in/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://ecomalyst.in/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://ecomalyst.in/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

const sections: {
  heading: string;
  body?: React.ReactNode;
  list?: string[];
  after?: React.ReactNode;
}[] = [
  {
    heading: "1. Information I Collect",
    body: (
      <>
        <p className="font-medium text-foreground">Information you provide directly:</p>
        <p className="mt-1">When you fill out the contact/enquiry form on this Site, I collect:</p>
      </>
    ),
    list: [
      "Name",
      "Email address",
      "Phone number",
      "Business/company name (if provided)",
      "Website or store URL (if provided)",
      "Details about the service you're inquiring about",
      "Any message content you submit",
    ],
  },
  {
    heading: "",
    body: (
      <>
        <p className="font-medium text-foreground">Information collected automatically:</p>
        <p className="mt-1">
          When you visit this Site, certain information may be collected automatically through
          cookies and similar technologies, including:
        </p>
      </>
    ),
    list: [
      "IP address and approximate location",
      "Browser type and device information",
      "Pages visited and time spent on the Site",
      "Referring website or source (including ad clicks)",
    ],
  },
  {
    heading: "2. How I Use Your Information",
    body: <p>I use the information collected to:</p>,
    list: [
      "Respond to your enquiries and provide consulting services",
      "Understand how visitors use the Site and improve its content",
      "Measure the performance of advertising campaigns (e.g., Google Ads, Meta Ads)",
      "Communicate with you via email, phone, or WhatsApp regarding your enquiry",
    ],
  },
  {
    heading: "3. Advertising & Third-Party Tools",
    body: (
      <>
        <p>
          This Site may use third-party advertising and analytics tools, including but not limited
          to:
        </p>
      </>
    ),
    list: [
      "Google Ads / Google Analytics — to measure website traffic and ad performance",
      "Meta (Facebook/Instagram) Ads Pixel — to measure ad performance and show relevant ads to visitors",
    ],
    after: (
      <p className="mt-4">
        These services may use cookies or similar technologies to collect information about your
        visits to this and other websites, in order to provide advertisements about goods and
        services of interest to you. You can control or disable cookies through your browser
        settings.
      </p>
    ),
  },
  {
    heading: "4. WhatsApp Communication",
    body: (
      <p>
        If you choose to contact me via WhatsApp, standard WhatsApp/Meta privacy terms apply to that
        communication in addition to this policy.
      </p>
    ),
  },
  {
    heading: "5. Data Sharing",
    body: (
      <>
        <p>I do not sell your personal information. Information may be shared only with:</p>
      </>
    ),
    list: [
      "Service providers who help operate this Site (e.g., hosting, analytics, ad platforms)",
      "Legal authorities, if required by law",
    ],
  },
  {
    heading: "6. Data Retention",
    body: (
      <p>
        I retain enquiry information only as long as necessary to respond to your request or
        maintain a business relationship, unless a longer retention period is required by law.
      </p>
    ),
  },
  {
    heading: "7. Your Rights",
    body: <p>You may request to:</p>,
    list: [
      "Access the personal information I hold about you",
      "Correct inaccurate information",
      "Request deletion of your information",
    ],
    after: <p className="mt-4">To exercise these rights, contact me using the details below.</p>,
  },
  {
    heading: "8. Cookies",
    body: (
      <p>
        This Site may use cookies to improve your browsing experience and support advertising
        measurement. You can disable cookies through your browser settings, though this may affect
        Site functionality.
      </p>
    ),
  },
  {
    heading: "9. Changes to This Policy",
    body: (
      <p>
        I may update this Privacy Policy from time to time. Changes will be posted on this page with
        an updated &quot;Last updated&quot; date.
      </p>
    ),
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <h1 className="text-4xl leading-[1.05] text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="eyebrow mt-4">Last updated: September 29, 2026</p>

        <div className="mt-10 space-y-10 border-t border-border pt-10 text-base leading-relaxed text-muted-foreground">
          <p>
            This Privacy Policy describes how Shahinda Kazi (&quot;I&quot;, &quot;me&quot;,
            &quot;my&quot;) collects, uses, and protects information when you visit this website
            (the &quot;Site&quot;) or contact me through it.
          </p>

          {sections.map((s, i) => (
            <section key={i}>
              {s.heading && <h2 className="text-2xl text-foreground sm:text-3xl">{s.heading}</h2>}
              <div className={s.heading ? "mt-4 space-y-2" : "space-y-2"}>{s.body}</div>
              {s.list && (
                <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-gold">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              {s.after}
            </section>
          ))}

          <section>
            <h2 className="text-2xl text-foreground sm:text-3xl">10. Contact</h2>
            <div className="mt-4 space-y-1">
              <p>If you have questions about this Privacy Policy, contact:</p>
              <p className="pt-2 font-medium text-foreground">Shahinda Kazi</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:shahindak2@gmail.com"
                  className="text-foreground underline-offset-4 hover:text-gold hover:underline"
                >
                  shahindak2@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+918976890885"
                  className="text-foreground underline-offset-4 hover:text-gold hover:underline"
                >
                  +91 89768 90885
                </a>
              </p>
              <p>Location: India</p>
            </div>
          </section>
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
