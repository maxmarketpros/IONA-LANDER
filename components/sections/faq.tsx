import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's included in a free estimate?",
    answer:
      "Our free estimate includes an on-site consultation where we assess your project, discuss your goals, and provide a detailed, itemized written quote with transparent pricing. No obligation and no pressure.",
  },
  {
    question: "How far out are you scheduling?",
    answer:
      "Our schedule varies by season and project type. Typically, we can begin work within 2-6 weeks of signing, but we'll give you a clear timeline during your estimate appointment.",
  },
  {
    question: "Do you help with material selection?",
    answer:
      "Absolutely. We guide you through material and finish options that fit your budget and style preferences, and can coordinate visits to showrooms and suppliers.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "When required, we handle the permitting process and ensure all work meets local building codes. We'll guide you through any documentation needed.",
  },
  {
    question: "How do payments work?",
    answer:
      "We typically structure payments in phases tied to project milestones. You'll receive a clear payment schedule upfront—no surprises or hidden fees.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Burton, Grand Blanc, Flint, Davison, Fenton, Swartz Creek, Holly, Linden, Goodrich, Clio, Flushing, Mount Morris, and surrounding Genesee County communities.",
  },
  {
    question: "How long do remodels usually take?",
    answer:
      "Timelines vary based on project scope. A bathroom refresh might take 1-2 weeks, while a full kitchen remodel can range from 4-8 weeks. We'll provide a realistic schedule during your estimate.",
  },
  {
    question: "Are your crews licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured. Our team members are experienced professionals who take pride in quality workmanship and respectful job site conduct.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">Answers to common questions about working with us.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
