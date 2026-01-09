import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Shield, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

const trustBadges = [
  { icon: Calendar, label: "Since 1999" },
  { icon: Users, label: "Family-Owned" },
  { icon: Shield, label: "Free Estimates" },
  { icon: MessageCircle, label: "Clear Communication" },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/1.jpg"
          alt="Freshly renovated home exterior in Michigan"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl py-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Home Remodeling & Exterior Improvements in Burton, MI
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            Serving Grand Blanc, Flint, and surrounding Genesee County since 1999.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              <Link href="#contact">Get Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-white/5"
            >
              <Link href="tel:8444384644" aria-label="Call (844) 438-4644">
                <Phone className="mr-2 h-5 w-5" />
                (844) 438-4644
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-white/70">Response within 1 business day</p>

          <div className="mt-12 flex flex-wrap gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/90">
                <badge.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
