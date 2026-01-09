import { FileSearch, Palette, Hammer, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Free Estimate & Scope",
    description: "We visit your home, discuss your vision, and provide a detailed, itemized estimate.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Materials Selection",
    description: "Work with our team to choose finishes, colors, and materials that fit your style and budget.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build Phase",
    description: "Our skilled crews execute the work with clean job sites and daily progress updates.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Final Walkthrough & Punch List",
    description: "We walk through every detail together and address any remaining items before completion.",
  },
]

const expectations = [
  "Clear, consistent communication throughout",
  "Transparent scheduling and timelines",
  "Respectful, professional crews",
  "Clean job sites at end of each day",
]

export function Process() {
  return (
    <section id="process" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Process</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A straightforward, stress-free approach from first call to final walkthrough.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center lg:items-center">
                  <div className="relative z-10 h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <span className="text-accent font-bold text-sm mb-2">Step {step.number}</span>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-muted rounded-2xl p-8 md:p-10">
          <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">What You Can Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {expectations.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
