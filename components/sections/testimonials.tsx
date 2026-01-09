import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    initials: "M.K.",
    name: "Michelle K.",
    location: "Grand Blanc, MI",
    quote:
      "From the first estimate to the final walkthrough, the Inside Out team was professional and communicative. Our kitchen looks incredible!",
  },
  {
    initials: "R.T.",
    name: "Robert T.",
    location: "Burton, MI",
    quote:
      "They replaced our roof and siding last fall. The crew was respectful, cleaned up daily, and finished on schedule. Highly recommend.",
  },
  {
    initials: "S.L.",
    name: "Sarah L.",
    location: "Davison, MI",
    quote:
      "We were nervous about a basement remodel, but they walked us through every step. The result exceeded our expectations.",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What Homeowners Say</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real feedback from families we&apos;ve had the pleasure of working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.initials}
              className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
            <Link href="#">See More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
