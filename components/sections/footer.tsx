import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#service-area", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold">Inside Out</span>
              <span className="block text-sm text-white/70">Home Improvements</span>
            </Link>
            <p className="mt-4 text-white/70 max-w-sm leading-relaxed">
              Family-owned home remodeling and exterior improvements serving Burton, MI and Genesee County since 1999.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-4">
              <Link
                href="tel:8444384644"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                (844) 438-4644
              </Link>
              <Link
                href="mailto:contactsupport@get-iohi.com"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                contactsupport@get-iohi.com
              </Link>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <address className="not-italic">
                  3312 S Center Rd Ste A<br />
                  Burton, MI 48519
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">© {currentYear} Inside Out Home Improvements. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
