import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Train, Waves, MapPin, Building2, Pipette, Construction } from "lucide-react"

const services = [
  {
    icon: Train,
    title: "Rail Ballast Assessment",
    description: "Detect fouled ballast, deteriorating subgrade, and water pockets that compromise track safety. Our 2.0 GHz air-coupled antennas enable high-speed scanning at 60+ km/h.",
    features: ["Fouling Index Calculation", "Subgrade Mapping", "Water Pocket Detection", "Maintenance Prioritization"]
  },
  {
    icon: Waves,
    title: "Subsurface Anomaly Detection",
    description: "Identify voids, sinkholes, and structural failures before they surface. Critical for infrastructure integrity assessment and preventive maintenance planning.",
    features: ["Void Detection", "Sinkhole Mapping", "Structural Analysis", "Risk Assessment"]
  },
  {
    icon: MapPin,
    title: "Utility Locating",
    description: "Precise detection and mapping of buried utilities including pipes, cables, and conduits. Prevent costly utility strikes and project delays.",
    features: ["Underground Mapping", "Cable Detection", "Pipe Location", "GIS Integration"]
  },
  {
    icon: Building2,
    title: "Bridge & Structure Inspection",
    description: "Non-destructive evaluation of concrete decks, pavements, and structural elements. Detect rebar corrosion, delamination, and internal defects.",
    features: ["Deck Evaluation", "Rebar Mapping", "Delamination Detection", "Condition Reporting"]
  },
  {
    icon: Pipette,
    title: "Environmental Assessment",
    description: "Map contaminated soils, underground storage tanks, and environmental anomalies for remediation planning and compliance reporting.",
    features: ["Contamination Mapping", "UST Detection", "Plume Tracking", "Compliance Support"]
  },
  {
    icon: Construction,
    title: "Construction Support",
    description: "Pre-construction surveys and quality control for new infrastructure projects. Verify compaction, layer thickness, and material properties.",
    features: ["Layer Verification", "Compaction Testing", "Quality Assurance", "As-Built Validation"]
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-balance">
            Comprehensive GPR Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From rail infrastructure to utility mapping, we deliver actionable subsurface intelligence 
            that prevents failures and optimizes maintenance investments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-mono text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
