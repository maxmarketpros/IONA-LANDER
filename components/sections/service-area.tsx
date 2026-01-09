import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const cities = [
  "Burton",
  "Grand Blanc",
  "Flint",
  "Davison",
  "Fenton",
  "Swartz Creek",
  "Holly",
  "Linden",
  "Goodrich",
  "Clio",
  "Flushing",
  "Mount Morris",
]

export function ServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Proudly Serving Burton & Surrounding Communities
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Quality home improvements throughout Genesee County and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              {cities.map((city) => (
                <Badge
                  key={city}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 text-foreground hover:bg-primary/5 transition-colors"
                >
                  <MapPin className="h-3 w-3 mr-1.5 text-primary" />
                  {city}
                </Badge>
              ))}
            </div>

            <div className="bg-muted rounded-xl p-6 border border-border/50">
              <h3 className="font-semibold text-foreground mb-3">Our Location</h3>
              <address className="not-italic text-muted-foreground space-y-1">
                <p>Inside Out Home Improvements</p>
                <p>3312 S Center Rd Ste A</p>
                <p>Burton, MI 48519</p>
              </address>
            </div>
          </div>

          <div className="relative h-80 lg:h-96 bg-muted rounded-xl overflow-hidden border border-border/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <p className="font-semibold text-foreground">Serving Genesee County</p>
                <p className="text-sm text-muted-foreground mt-1">Burton, MI & Surrounding Areas</p>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <path
                  d="M100,150 Q150,100 200,120 T300,100 T350,150 T300,200 T200,180 T100,200 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
                <circle cx="200" cy="150" r="8" fill="currentColor" className="text-primary" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
