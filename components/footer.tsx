export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">ONGC</h3>
            <p className="text-sm opacity-90">
              Leading India's energy transformation through exploration, production, and renewable initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/" className="hover:opacity-100">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:opacity-100">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:opacity-100">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:opacity-100">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  Oil Exploration
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Gas Production
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Renewable Energy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Research
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm opacity-90">Email: info@ongc.co.in</p>
            <p className="text-sm opacity-90">Phone: +91-22-XXXX-XXXX</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:opacity-80">
                LinkedIn
              </a>
              <a href="#" className="hover:opacity-80">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm opacity-75">
          <p>&copy; 2025 Oil & Natural Gas Corporation Limited. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:opacity-100">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
