"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function AboutContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message. We will get back to you soon!")
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About ONGC</h1>
          <p className="text-xl opacity-90">Leading India's Energy Sector with Innovation and Excellence</p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Legacy</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 1956, Oil & Natural Gas Corporation Limited (ONGC) has evolved into India's leading
                integrated energy company. With over 65 years of operational excellence, we have contributed
                significantly to India's energy security and economic growth.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our journey spans from onshore oil exploration to world-class deepwater operations, positioning us as a
                pioneer in India's hydrocarbon sector. Today, ONGC operates across multiple continents with diverse
                portfolio of upstream and midstream operations.
              </p>
              <p className="text-lg text-muted-foreground">
                We employ over 100,000 professionals and continue to invest in cutting-edge technology and sustainable
                practices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">65+</div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100k+</div>
                  <p className="text-muted-foreground">Dedicated Workforce</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Active Projects Worldwide</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-muted-foreground">Countries of Operation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Sustainability Commitment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Stewardship",
                description:
                  "Implementing ISO 14001 certified environmental management systems, reducing carbon emissions, and investing in renewable energy.",
                points: ["Carbon Neutrality Goal", "Renewable Energy Integration", "Ecosystem Protection"],
              },
              {
                title: "Social Responsibility",
                description:
                  "Supporting local communities through education, healthcare, and employment initiatives while maintaining highest safety standards.",
                points: ["Community Development", "Education Programs", "Healthcare Services"],
              },
              {
                title: "Economic Growth",
                description:
                  "Contributing to India's economic development while maintaining sustainable business practices and corporate governance.",
                points: ["Value Creation", "Technology Innovation", "Stakeholder Value"],
              },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Headquarters</p>
                      <p className="text-muted-foreground">ONGC Bhavan, Safdarjung, New Delhi - 110016, India</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@ongc.co.in</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+91-22-XXXX-XXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                    LinkedIn
                  </a>
                  <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                    Twitter
                  </a>
                  <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 border border-border shadow-md">
              <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Leadership & Governance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Board of Directors",
                description: "Experienced leadership guiding strategic vision and corporate governance",
              },
              {
                title: "Executive Management",
                description: "Seasoned professionals driving operational excellence and innovation",
              },
              {
                title: "Transparency & Ethics",
                description: "Committed to highest standards of corporate responsibility",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border text-center">
                <h3 className="text-lg font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
