import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { FloatingWhatsApp } from "@/components/site/WhatsAppButton";
import {
  Hero,
  About,
  Services,
  Impact,
  Toolkit,
  Experience,
  FinalCta,
  Contact,
  Footer,
} from "@/components/site/sections";

const title = "Shahinda Kazi — Ecommerce Consultant & Growth Specialist";
const description =
  "Ecommerce consultant with 11+ years of hands-on experience across marketplaces, D2C and quick commerce. Marketplace growth, performance marketing and ecommerce operations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
        <Toolkit />
        <Experience />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
