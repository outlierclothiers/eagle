"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitting(true)
      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name: '', company: '', role: '' }),
        })
        if (response.ok) {
          setSubmitted(true)
        }
      } catch (error) {
        console.error('Submission error:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

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
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Launching May 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-foreground leading-tight text-balance">
              AI-Enhanced GPR for{" "}
              <span className="text-primary">Rail Ballast</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Automated, Hybrid Multi-Model Framework for Geotechnical Innovation. 
              Stop waiting weeks for ballast reports. Get results in hours, not weeks.
            </p>

            {/* Key Metrics Row */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                <span className="text-3xl font-mono font-bold text-[#f97316]">86%</span>
                <span className="text-sm text-muted-foreground">Accuracy</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                <span className="text-3xl font-mono font-bold text-primary">83.4%</span>
                <span className="text-sm text-muted-foreground">Precision</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                <span className="text-3xl font-mono font-bold text-accent">70%</span>
                <span className="text-sm text-muted-foreground">Faster Analysis</span>
              </div>
            </div>

            {/* Waitlist Signup */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit" size="lg" className="group whitespace-nowrap" disabled={isSubmitting}>
                  {isSubmitting ? 'Joining...' : 'Get Early Access'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-accent/20 border border-accent/30 max-w-md">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">You are on the list. We will be in touch.</span>
              </div>
            )}

            <p className="text-sm text-muted-foreground">
              Join 50+ rail operators and GPR service providers on the waitlist.
            </p>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image 
                src="/images/hero-ballast.jpeg"
                alt="AI-Enhanced GPR Interpretation for Rail Ballast Investigation - 3D visualization showing automated multi-model analysis"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Subtle gradient overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
