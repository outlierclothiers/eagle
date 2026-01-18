import { Button } from "@/components/ui/button"
import { ArrowRight, Scan, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234B9CD3' fillOpacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">AI-Powered Subsurface Intelligence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-foreground leading-tight text-balance">
              See What Lies{" "}
              <span className="text-primary">Beneath</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Advanced Ground Penetrating Radar services for rail infrastructure, 
              utility detection, and subsurface asset mapping. Prevent failures before they happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Request Assessment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl lg:text-3xl font-mono font-bold text-foreground">15k+</div>
                <div className="text-sm text-muted-foreground">Track Miles Scanned</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-mono font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-mono font-bold text-foreground">3-5x</div>
                <div className="text-sm text-muted-foreground">Faster Analysis</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Radar Animation Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/20 animate-pulse" />
                <div className="absolute w-3/4 h-3/4 rounded-full border border-primary/30" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-primary/40" />
                <div className="absolute w-1/4 h-1/4 rounded-full bg-primary/20" />
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute top-8 right-0 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Scan className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Real-time Scanning</div>
                    <div className="text-xs text-muted-foreground">60+ km/h hi-rail speed</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 left-0 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Safety First</div>
                    <div className="text-xs text-muted-foreground">Non-destructive testing</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-8 -translate-y-1/2 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">AI Analysis</div>
                    <div className="text-xs text-muted-foreground">Automated reporting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
