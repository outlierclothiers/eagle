import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Brand Column */}
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image 
                src="/kinetic_logo.png"
                alt="Kinetic GPR Pro"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="font-mono text-lg font-bold text-foreground tracking-tight leading-none">
                  Kinetic<span className="text-primary">.</span>
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider uppercase">GPR Pro</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              AI-powered Ground Penetrating Radar analysis. 
              Launching May 2026.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:panda@juche.org" className="hover:text-foreground transition-colors">
                panda@juche.org
              </a>
            </div>
            <a 
              href="https://www.linkedin.com/company/111273399" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kinetic GPR Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
