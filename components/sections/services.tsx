import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    image: "/6.jpg",
    title: "Kitchen Renovations",
    description:
      "Transform your kitchen into a functional, beautiful space that enhances your daily comfort and adds lasting value to your home.",
  },
  {
    image: "/5.jpg",
    title: "Bathroom Remodels",
    description:
      "Create a spa-like retreat with modern fixtures, elegant tile work, and thoughtful layouts that maximize both form and function.",
  },
  {
    image: "/7.jpg",
    title: "Basement Finishing",
    description:
      "Unlock your basement's potential with custom finishing that adds valuable living space for entertainment, work, or relaxation.",
  },
  {
    image: "/4.jpg",
    title: "Roofing",
    description:
      "Quality roofing solutions that protect your investment and boost your home's curb appeal with durable, weather-resistant materials.",
  },
  {
    image: "/2.jpg",
    title: "Siding & Exteriors",
    description:
      "Shield your home from the elements while upgrading its appearance with premium siding and seamless gutter systems.",
  },
  {
    image: "/3.jpg",
    title: "Doors & Windows",
    description:
      "Improve energy efficiency and security with modern doors and windows that complement your home's style.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive home improvement solutions to enhance comfort, curb appeal, and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <CardContent className="pt-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
