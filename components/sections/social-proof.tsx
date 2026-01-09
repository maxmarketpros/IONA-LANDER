import { Calendar, Building2, FileText, ClipboardCheck, Star } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    label: "Serving the area since 1999",
    description: "Over two decades of trusted service",
  },
  {
    icon: Building2,
    label: "Residential + Light Commercial",
    description: "Projects of all sizes welcome",
  },
  {
    icon: FileText,
    label: "Detailed, Itemized Estimates",
    description: "No hidden fees or surprises",
  },
  {
    icon: ClipboardCheck,
    label: "Start-to-Finish Management",
    description: "One team handles it all",
  },
]

export function SocialProof() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Trusted by homeowners across Genesee County
          </p>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">5-star experiences</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <stat.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground">{stat.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
