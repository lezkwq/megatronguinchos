import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CtaBannerSection } from "@/components/CtaBannerSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { FloatingContactBar } from "@/components/FloatingContactBar";
import { COMPANY } from "@/data/megatron";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: COMPANY.name,
  description:
    "Serviço de reboque e transporte de veículos em Blumenau com atendimento 24 horas.",
  telephone: "+55-47-99176-2721",
  address: {
    "@type": "PostalAddress",
    streetAddress: "251, Salto Weissbach",
    addressLocality: "Blumenau",
    addressRegion: "SC",
    postalCode: "89032-142",
    addressCountry: "BR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "14",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Megatron Guinchos | Guincho 24 Horas em Blumenau SC" },
      {
        name: "description",
        content:
          "Precisa de guincho em Blumenau? Entre em contato com a Megatron Guinchos. Atendimento 24 horas para serviços de reboque e transporte. Ligue (47) 99176-2721.",
      },
      { property: "og:title", content: "Megatron Guinchos | Guincho 24 Horas em Blumenau SC" },
      {
        property: "og:description",
        content:
          "Precisa de guincho em Blumenau? Entre em contato com a Megatron Guinchos. Atendimento 24 horas para serviços de reboque e transporte. Ligue (47) 99176-2721.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CtaBannerSection />
        <ReviewsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingContactBar />
    </div>
  );
}
