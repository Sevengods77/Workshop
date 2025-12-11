import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectsPreviewSection() {
  const projects = [
    {
      title: "Offshore Deep Water Project",
      description: "Advanced exploration in deep-sea oil fields with state-of-the-art drilling equipment.",
      region: "Arabian Sea",
    },
    {
      title: "Solar Energy Initiative",
      description: "Large-scale solar power generation facility contributing to renewable energy goals.",
      region: "Gujarat",
    },
    {
      title: "Gas Processing Unit",
      description: "Modern gas processing and liquefaction facility for enhanced production capacity.",
      region: "Jharkhand",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Showcasing our major operations and initiatives</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.region}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <button className="text-primary font-semibold hover:opacity-80 transition-opacity">Learn More →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
