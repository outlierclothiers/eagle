import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { TechShowcase } from "@/components/tech-showcase"
import { MarketsSection } from "@/components/markets-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <section id="problem">
        <ProblemSection />
      </section>
      <SolutionSection />
      <TechShowcase />
      <MarketsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
