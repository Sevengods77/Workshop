import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-primary-foreground text-sm font-semibold mb-6">
            Leading India's Energy Future
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Oil & Natural Gas Corporation
        </h1>

        <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Driving India's energy independence through world-class exploration, production, and sustainable innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
              Explore Dashboard
            </Button>
          </Link>
          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-primary-foreground">65+</div>
            <p className="text-sm text-primary-foreground/80 mt-2">Years of Excellence</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-primary-foreground">50+</div>
            <p className="text-sm text-primary-foreground/80 mt-2">Active Projects</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-primary-foreground">100k+</div>
            <p className="text-sm text-primary-foreground/80 mt-2">Employees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
