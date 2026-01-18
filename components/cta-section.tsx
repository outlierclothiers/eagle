"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Gift, Zap, Users, Star } from "lucide-react"

const benefits = [
  {
    icon: Gift,
    title: "Founding Member Pricing",
    description: "Lock in 40% off for life when you join before launch",
  },
  {
    icon: Zap,
    title: "Priority Access",
    description: "Be first to test the platform during beta",
  },
  {
    icon: Users,
    title: "Shape the Product",
    description: "Direct input into features and roadmap",
  },
  {
    icon: Star,
    title: "White-Glove Onboarding",
    description: "Personal setup assistance for early adopters",
  },
]

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.email && formData.name) {
      setSubmitted(true)
      // Here you would integrate with your email service
    }
  }

  return (
    <section id="waitlist" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Benefits */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-accent">Limited Early Access</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-balance">
                  Join the <span className="text-primary">Waitlist</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are launching in May 2026. Get on the list now for exclusive benefits
                  and be among the first to transform your GPR workflow.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Already 50+ rail operators and service providers on the waitlist.
                  Spots for founding member pricing are limited.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-mono font-bold text-foreground mb-6">
                    Reserve Your Spot
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Smith"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Work Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@railroad.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Acme Railroad Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                        Your Role
                      </label>
                      <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select your role...</option>
                        <option value="railroad-ops">Railroad Operations</option>
                        <option value="maintenance">Maintenance / Engineering</option>
                        <option value="gpr-consultant">GPR Consultant / Service Provider</option>
                        <option value="transit">Transit Agency</option>
                        <option value="contractor">Maintenance Contractor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full group" size="lg">
                      Join the Waitlist
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      No spam. Just updates on our launch and early access opportunities.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-mono font-bold text-foreground">You are In!</h3>
                  <p className="text-muted-foreground">
                    Thanks for joining. We will keep you updated on our progress and let you know
                    when early access is available.
                  </p>
                  <div className="pt-4 border-t border-border mt-6">
                    <p className="text-sm text-muted-foreground">
                      Questions? Reach out at{" "}
                      <a href="mailto:hello@kineticgpr.com" className="text-primary hover:underline">
                        hello@kineticgpr.com
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
