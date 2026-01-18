"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Comprehensive Detection Capabilities",
    subtitle: "Rail Ballast Application",
    description:
      "Automated detection of ballast fouling, voids and compaction issues, and moisture assessment. AI-assisted interpretation with human-in-the-loop validation delivers automated reporting and real-time anomaly flagging.",
    image: "/images/detection-capabilities.jpeg",
  },
  {
    id: 2,
    title: "Performance Metrics & Validation",
    subtitle: "Validated Excellence",
    description:
      "Our AI models demonstrate superior performance validated on high-quality, ground-truthed datasets (4,700 km GPR, 12,000 points). 83.4% CRNN precision for subgrade defects, 86% XGBoost accuracy for ballast fouling, and 88.6% YOLO mAP for general GPR defect detection.",
    image: "/images/performance-metrics.jpeg",
  },
  {
    id: 3,
    title: "Implementation Roadmap",
    subtitle: "Four-Phase Strategy",
    description:
      "A proven path to deployment: Data Acquisition & Model Training (Weeks 1-4), Model Validation & Performance Tuning (Weeks 2-6), Integration & Deployment (Month 3+), and Continuous Improvement (Ongoing). Target: 85%+ anomaly detection accuracy, 95% analysis consistency, 70% interpretation time reduction.",
    image: "/images/implementation-roadmap.jpeg",
  },
  {
    id: 4,
    title: "The Challenge & Solution",
    subtitle: "Executive Summary",
    description:
      "Manual interpretation suffers from subjective analysis, time-consuming processes, and risk of overlooking subtle anomalies. Our Hybrid AI Framework combines deep learning and machine learning to deliver 83.4% CRNN precision and 86% XGBoost accuracy with consistency and speed.",
    image: "/images/executive-summary.jpeg",
  },
];

export function TechShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section id="technology" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Technical Foundation
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Research-Backed Intelligence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform is built on peer-reviewed research and validated through extensive field trials.
            Explore the science behind our AI-driven approach.
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-card rounded-2xl border border-border overflow-hidden">
            {/* Main Image */}
            <div className="relative aspect-video">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-contain bg-[#f5f5f5]"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="View fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>

              {/* Slide Counter */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                <span className="text-sm font-mono text-foreground">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* Slide Info */}
            <div className="p-6 md:p-8 border-t border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <p className="text-primary font-mono text-xs tracking-wider uppercase mb-2">
                    {slide.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() =>
                      document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Request Full Technical Brief
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentSlide
                    ? "border-primary opacity-100 scale-105"
                    : "border-border opacity-50 hover:opacity-75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <Image
                  src={s.image || "/placeholder.svg"}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "83.4%", label: "CRNN Precision" },
            { value: "86%", label: "XGBoost Accuracy" },
            { value: "88.6%", label: "YOLO mAP@0.5" },
            { value: "70%", label: "Time Reduction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-6xl aspect-video">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold text-foreground mb-1">{slide.title}</h3>
            <p className="text-muted-foreground text-sm">
              {currentSlide + 1} of {slides.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
