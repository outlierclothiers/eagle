import { Cpu, Layers, Zap, CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Cpu,
    title: "Hybrid AI Framework",
    description: "Combines deep learning (CNNs, CRNN) with machine learning (XGBoost, Random Forests) for comprehensive geohazard detection.",
  },
  {
    icon: Layers,
    title: "Hardware Agnostic",
    description: "Works with data from multiple GPR manufacturers. No proprietary lock-in. Your data, your choice.",
  },
  {
    icon: Zap,
    title: "70% Faster Interpretation",
    description: "What takes expert analysts days takes our platform hours. Scale your inspection capacity without scaling headcount.",
  },
]

const comparisonData = {
  manual: [
    { text: "Subjective analysis variability", bad: true },
    { text: "Time-consuming process", bad: true },
    { text: "Risk of overlooking subtle anomalies", bad: true },
  ],
  ai: [
    { text: "Eliminates subjectivity", good: true },
    { text: "Reduces interpretation time by 70%", good: true },
    { text: "Enhances detection of anomalies", good: true },
  ],
}

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Our Solution</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground text-balance">
              The Future of <span className="text-primary">Subsurface Intelligence</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We are building an AI-powered GPR analysis platform that automates the 
              interpretation bottleneck. High-speed rail inspection at a fraction of the cost.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-mono font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Comparison */}
          <div className="space-y-6">
            {/* Comparison Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Manual Interpretation */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <h4 className="font-mono font-bold text-foreground">Manual Interpretation</h4>
                </div>
                <ul className="space-y-3">
                  {comparisonData.manual.map((item) => (
                    <li key={item.text} className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Solution */}
              <div className="bg-card border-2 border-accent rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <h4 className="font-mono font-bold text-foreground">AI Solution</h4>
                </div>
                <ul className="space-y-3">
                  {comparisonData.ai.map((item) => (
                    <li key={item.text} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-mono font-bold text-foreground mb-4">Validated Performance</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-[#f97316]/10">
                  <div className="text-2xl font-mono font-bold text-[#f97316]">83.4%</div>
                  <div className="text-xs text-muted-foreground mt-1">CRNN Precision</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/10">
                  <div className="text-2xl font-mono font-bold text-accent">86%</div>
                  <div className="text-xs text-muted-foreground mt-1">XGBoost Accuracy</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <div className="text-2xl font-mono font-bold text-primary">88.6%</div>
                  <div className="text-xs text-muted-foreground mt-1">YOLO mAP</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Validated on 4,700 km GPR data with 12,000 ground-truth points
              </p>
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
