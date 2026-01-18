import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TechnologySection } from "@/components/technology-section"
import { IndustriesSection } from "@/components/industries-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
