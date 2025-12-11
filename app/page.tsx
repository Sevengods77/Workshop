import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SustainabilitySection } from "@/components/sections/sustainability-section"
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <AboutSection />
        <SustainabilitySection />
        <ProjectsPreviewSection />
      </div>
      <Footer />
    </main>
  )
}
