import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { FloatingWhatsApp } from "@/components/site/WhatsAppButton";
import { ChecklistPopup } from "@/components/site/ChecklistPopup";
import {
  Hero,
  About,
  Services,
  Impact,
  Audience,
  Toolkit,
  WhyEcomalyst,
  FinalCta,
  Contact,
  Footer,
} from "@/components/site/sections";

const title = "Ecommerce Consultant & Growth Specialist | Ecomalyst";
const description =
  "Grow your ecommerce business with an experienced ecommerce consultant. Get expert help with D2C, marketplaces, PPC, performance marketing, catalog, pricing and operations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: site.siteUrl },
      { property: "og:site_name", content: site.brandName },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: site.siteUrl },
    ],
    links: [{ rel: "canonical", href: site.siteUrl }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Impact />
        <Audience />
        <Toolkit />
        <WhyEcomalyst />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ChecklistPopup />
    </div>
  );
}
