export function SustainabilitySection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Sustainability Efforts</h2>
          <p className="text-xl text-muted-foreground">Committed to responsible energy production</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Carbon Neutrality",
              description:
                "Working towards net-zero emissions through renewable energy integration and operational efficiency.",
              icon: "💨",
            },
            {
              title: "Environmental Protection",
              description:
                "Implementing stringent environmental management systems and regular ecological assessments.",
              icon: "🌿",
            },
            {
              title: "Community Welfare",
              description: "Supporting local communities through education, healthcare, and employment initiatives.",
              icon: "👥",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <p className="text-lg opacity-90">
            ONGC is actively investing in renewable energy projects, including solar and wind power installations. We're
            committed to achieving sustainable growth while maintaining the highest standards of safety and
            environmental responsibility.
          </p>
        </div>
      </div>
    </section>
  )
}
