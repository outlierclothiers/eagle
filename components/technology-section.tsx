import { Brain, Cpu, Database, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const techFeatures = [
  {
    icon: Cpu,
    title: "Dual-Frequency GPR",
    description: "400 MHz for deep penetration, 2.0 GHz air-coupled for high-resolution ballast analysis"
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "CNN and RNN models trained on thousands of miles of validated GPR data"
  },
  {
    icon: Database,
    title: "RTK GNSS Positioning",
    description: "Centimeter-accurate positioning for precise GIS integration and asset mapping"
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Real-time data processing with quantitative condition indices and priority rankings"
  },
]

const specs = [
  { label: "Low Freq Antenna", value: "400 MHz", note: "Deep penetration" },
  { label: "High Freq Antenna", value: "2.0 GHz", note: "Air-coupled" },
  { label: "Scan Speed", value: "60+ km/h", note: "Hi-rail operation" },
  { label: "Position Accuracy", value: "±2 cm", note: "RTK GNSS" },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Our Technology</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground text-balance">
              Hardware + AI = <span className="text-primary">Intelligence</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our proprietary GPR systems combine cutting-edge hardware with advanced machine learning 
              to deliver actionable insights 3-5x faster than manual interpretation methods.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {techFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="group">
              Technical Documentation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Specs Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm font-mono text-muted-foreground">SYSTEM SPECIFICATIONS</span>
              </div>

              <div className="space-y-6">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                    <div>
                      <div className="text-sm text-muted-foreground">{spec.label}</div>
                      <div className="text-xs text-muted-foreground/70">{spec.note}</div>
                    </div>
                    <div className="text-2xl font-mono font-bold text-foreground">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium text-foreground">AI Model Accuracy</div>
                    <div className="text-xs text-muted-foreground">Validated on 15,000+ track miles</div>
                  </div>
                  <div className="ml-auto text-2xl font-mono font-bold text-primary">98%</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
