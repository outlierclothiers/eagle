import React from "react"
import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: 'swap',
});

const siteConfig = {
  name: "Kinetic GPR Pro",
  description: "AI-powered Ground Penetrating Radar analysis platform for rail ballast assessment and subsurface infrastructure intelligence. Automated multi-model framework delivering 86% accuracy and 70% faster analysis.",
  url: "https://gprkinetic.pro",
  ogImage: "https://gprkinetic.pro/opengraph.png",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI-Enhanced GPR for Rail Infrastructure`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "GPR",
    "Ground Penetrating Radar",
    "Rail Ballast",
    "Railroad Infrastructure",
    "AI Analysis",
    "Subsurface Detection",
    "Rail Maintenance",
    "Ballast Assessment",
    "Infrastructure Intelligence",
    "Geotechnical Analysis",
    "Machine Learning GPR",
    "Automated GPR Interpretation",
  ],
  authors: [{ name: "Kinetic GPR Pro" }],
  creator: "Kinetic GPR Pro",
  publisher: "Kinetic GPR Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | AI-Enhanced GPR for Rail Infrastructure`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Kinetic GPR Pro - AI-Powered Ground Penetrating Radar Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI-Enhanced GPR for Rail Infrastructure`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@kineticgpr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="msapplication-TileColor" content="#4B9CD3" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
