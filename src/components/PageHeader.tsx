// Template-enhanced component
// Generated: 2025-08-19T23:04:44.862Z
// Section: page-header
// Category: page-header
// Template ID: page-header-l001

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"

export default function PageHeaderTitleOnly() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted/10 via-background to-muted/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-12 sm:py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Resources
          </h1>
          <p className="mt-4 text-lg text-muted">
            Explore our blog, documentation, and other helpful resources.
          </p>
        </div>
      </div>
    </section>
  )
}