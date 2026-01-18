import { Train, Users, Building, Wrench } from "lucide-react"

const markets = [
  {
    icon: Train,
    title: "Tier 2/3 Railroads",
    description: "Regional and short-line operators who need enterprise-grade inspection at an accessible price point.",
    tag: "Primary Target",
  },
  {
    icon: Users,
    title: "GPR Service Providers",
    description: "Consultants who want to 10x their analysis throughput and take on more projects without hiring more analysts.",
    tag: "Partner Opportunity",
  },
  {
    icon: Building,
    title: "Transit Agencies",
    description: "Municipal and regional transit systems with tight budgets and high safety requirements.",
    tag: "Growing Segment",
  },
  {
    icon: Wrench,
    title: "Maintenance Contractors",
    description: "Teams who need before/after analysis to verify work quality and justify maintenance investments.",
    tag: "Value-Add",
  },
]

export function MarketsSection() {
  return (
    <section id="markets" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground">Who This Is For</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-balance">
            Built for Operators Who Move Fast
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you have been priced out by the Big Four or stuck waiting weeks for reports,
            we are building this for you.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {markets.map((market) => (
            <div 
              key={market.title} 
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <market.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/20 text-accent">
                  {market.tag}
                </span>
              </div>
              <h3 className="text-xl font-mono font-bold text-foreground mb-2">{market.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{market.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
