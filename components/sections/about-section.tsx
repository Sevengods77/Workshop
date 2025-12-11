export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About ONGC</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">India's leading integrated energy company</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To achieve energy independence for India while maintaining global competitiveness through responsible
                  exploration and production of hydrocarbons.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a world-class energy company committed to sustainable development and technological excellence.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary">Global Initiatives</h3>
                <p className="text-muted-foreground">
                  ONGC operates across multiple continents with exploration and production assets, contributing to
                  global energy security while driving India's economic growth.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-3xl text-primary">🔍</div>
                <div>
                  <h4 className="font-bold mb-1">Exploration Excellence</h4>
                  <p className="text-sm text-muted-foreground">Advanced seismic technology and geological expertise</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-primary">⚙️</div>
                <div>
                  <h4 className="font-bold mb-1">Production Optimization</h4>
                  <p className="text-sm text-muted-foreground">Cutting-edge extraction and processing technologies</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-primary">🌱</div>
                <div>
                  <h4 className="font-bold mb-1">Sustainable Growth</h4>
                  <p className="text-sm text-muted-foreground">Renewable energy and environmental stewardship</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-primary">🌍</div>
                <div>
                  <h4 className="font-bold mb-1">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">Operations across Asia, Africa, and the Middle East</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
