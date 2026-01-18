import { Train, Zap, Building, Truck, HardHat, Trees } from "lucide-react"

const industries = [
  {
    icon: Train,
    name: "Railroads",
    description: "Class I, regional, and short line railroads rely on our ballast assessment technology",
    clients: ["CN Rail", "CP Rail", "Regional Lines"]
  },
  {
    icon: Zap,
    name: "Utilities",
    description: "Electric, gas, and telecom providers use our utility locating services",
    clients: ["Power Companies", "Gas Utilities", "Telecoms"]
  },
  {
    icon: Building,
    name: "Municipalities",
    description: "Cities and counties leverage our services for infrastructure asset management",
    clients: ["Public Works", "DOTs", "Transit Agencies"]
  },
  {
    icon: HardHat,
    name: "Engineering Firms",
    description: "Geotechnical and civil engineering firms partner with us for subsurface data",
    clients: ["Geotechnical", "Civil Engineering", "Consultants"]
  },
  {
    icon: Truck,
    name: "Transportation",
    description: "Highway departments and airport authorities trust our pavement evaluation",
    clients: ["DOTs", "Airports", "Port Authorities"]
  },
  {
    icon: Trees,
    name: "Environmental",
    description: "Environmental consultants rely on our contamination mapping capabilities",
    clients: ["Remediation", "Assessment", "Compliance"]
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground">Industries We Serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-balance">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From Class I railroads to municipal public works departments, 
            organizations trust Kinetic for critical infrastructure intelligence.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div 
              key={industry.name} 
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-mono font-semibold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.clients.map((client) => (
                      <span 
                        key={client} 
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
