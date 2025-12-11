"use client"

import { useState } from "react"
import { MapPin, Users, TrendingUp } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Arabian Sea Deepwater Project",
    description: "Advanced offshore exploration in deepwater blocks with cutting-edge drilling technology.",
    region: "Arabian Sea",
    category: "Offshore",
    status: "Active",
    employees: 1200,
    investment: "$850M",
    image: "bg-gradient-to-br from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Bay of Bengal Gas Field",
    description: "Major gas production and processing facility in the Bay of Bengal region.",
    region: "Bay of Bengal",
    category: "Gas Production",
    status: "Active",
    employees: 800,
    investment: "$620M",
    image: "bg-gradient-to-br from-teal-500 to-green-400",
  },
  {
    id: 3,
    title: "Western Onshore Oil Development",
    description: "Integrated onshore oil production with enhanced recovery techniques.",
    region: "Gujarat",
    category: "Oil Production",
    status: "Active",
    employees: 950,
    investment: "$480M",
    image: "bg-gradient-to-br from-orange-500 to-red-400",
  },
  {
    id: 4,
    title: "Solar Energy Park Initiative",
    description: "Large-scale renewable energy facility with 500MW solar capacity.",
    region: "Rajasthan",
    category: "Renewable Energy",
    status: "Development",
    employees: 350,
    investment: "$300M",
    image: "bg-gradient-to-br from-yellow-500 to-orange-400",
  },
  {
    id: 5,
    title: "Jharkhand Gas Processing Unit",
    description: "Modern LNG processing and liquefaction facility for export markets.",
    region: "Jharkhand",
    category: "Gas Processing",
    status: "Active",
    employees: 600,
    investment: "$520M",
    image: "bg-gradient-to-br from-purple-500 to-pink-400",
  },
  {
    id: 6,
    title: "Wind Energy Project",
    description: "Offshore wind farm with advanced turbine technology for clean energy.",
    region: "Karnataka",
    category: "Renewable Energy",
    status: "Planning",
    employees: 200,
    investment: "$280M",
    image: "bg-gradient-to-br from-sky-500 to-blue-400",
  },
]

const categories = ["All", "Offshore", "Oil Production", "Gas Production", "Renewable Energy", "Gas Processing"]

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">ONGC Projects & Operations</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Showcasing our major initiatives across oil, gas, and renewable energy sectors
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === cat
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card border border-border text-foreground hover:border-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
          >
            {/* Image */}
            <div className={`h-40 ${project.image}`}></div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : project.status === "Development"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-xs font-semibold text-primary">{project.category}</span>
              </div>

              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>{project.region}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users size={16} />
                  <span>{project.employees.toLocaleString()} Employees</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp size={16} />
                  <span>Investment: {project.investment}</span>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
