import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Manual Analysis Bottleneck",
    description: "GPR data acquisition takes hours. Manual interpretation takes days or weeks. This bottleneck limits how much track you can actually inspect.",
  },
  {
    icon: DollarSign,
    title: "Expert Analysts Are Expensive",
    description: "Skilled geophysicists command $800-1,500/day. Their scarcity limits your inspection capacity and drives up costs.",
  },
  {
    icon: AlertTriangle,
    title: "Reactive, Not Predictive",
    description: "By the time you get reports back, conditions have changed. You are fixing problems, not preventing them.",
  },
  {
    icon: Users,
    title: "Big Four Lock-In",
    description: "The dominant players bundle expensive hardware with labor-intensive services. They have no incentive to automate.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <span className="text-sm font-medium text-destructive">The Industry Problem</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-balance">
            GPR Has a Bottleneck Problem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The railroad industry spends $23B+ annually on maintenance. GPR is critical for ballast assessment.
            But the analysis process has not evolved in decades.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div 
              key={problem.title} 
              className="flex gap-4 p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
