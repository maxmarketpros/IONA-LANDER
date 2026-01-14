import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Inside Out Home Improvements provide?",
    answer: (
      <>
        Inside Out Home Improvements provides a comprehensive selection of remodeling and construction services. Our
        expertise includes kitchen and bathroom remodeling, basement finishing, and installations such as roofing,
        siding, gutters, windows, doors, and flooring. We also offer custom tile work and interior/exterior painting,
        alongside other specialized niche services. Please don't hesitate to ask if you have specific needs!
      </>
    ),
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Grand Blanc, Flint, Davison, Fenton, Burton, Swartz Creek, Holly, Linden, Goodrich, Clio, Flushing, Mount Morris, and surrounding Mid-Michigan communities.",
  },
  {
    question: "Are you a family-owned business?",
    answer:
      "Yes — Inside Out Home Improvements is a father and son, family-owned and operated company serving the community since 1999, with deep local roots and a strong reputation for trust and reliability.",
  },
  {
    question: "Do you handle both interior and exterior projects?",
    answer:
      "Absolutely, It says it right in the name! We provide comprehensive interior services (kitchens, bathrooms, basements, flooring, painting) and exterior services (roofing, siding, gutters, windows, doors).",
  },
  {
    question: "How do I request a quote?",
    answer: "You can request a free quote directly through the website’s contact form or by calling (844) 438-4644.",
  },
  {
    question: "What makes Inside Out Home Improvements different?",
    answer: (
      <>
        <p className="mb-3">We emphasize:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Family ownership and community roots</li>
          <li>A wide range of services under one roof</li>
          <li>A client-first approach with open communication</li>
          <li>Over two decades of experience in Mid-Michigan</li>
        </ul>
      </>
    ),
  },
  {
    question: "Can I see examples of your past work?",
    answer:
      "Yes — the website includes a project gallery showcasing completed remodeling and construction projects. Check out our Facebook and Instagram pages to follow along with all our past and current projects!",
  },
  {
    question: "Do you have customer reviews?",
    answer:
      "Yes — the testimonials page features feedback from homeowners who’ve worked with them, highlighting quality, professionalism, and reliability. Feel free to check out our Google Reviews as well!",
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <>
        <p className="mb-3">Inside Out Home Improvements offers several convenient payment options for your project. Accepted methods include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Major credit and debit cards</li>
          <li>Checks</li>
          <li>Electronic payments</li>
          <li>Financing options for qualified customers</li>
        </ul>
        <p className="mt-3">Please note: Electronic payments include a 3% service charge.</p>
      </>
    ),
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes — all estimates are completely free. A team member will visit your home, discuss your project goals, and provide a clear, detailed quote.",
  },
  {
    question: "Are your workers licensed and insured?",
    answer:
      "Yes — Inside Out Home Improvements is fully licensed and insured Michigan Residential Builders. All team members follow strict safety and quality standards.",
  },
  {
    question: "Do you clean up after the job is done?",
    answer:
      "Absolutely. The crew ensures your home is left clean, safe, and ready to enjoy. Debris removal is included with every project.",
  },
  {
    question: "Do you help with design or material selection?",
    answer:
      "Yes — the team can guide you through choosing materials, colors, layouts, and finishes to match your style and budget.",
  },
  {
    question: "Can you work with my existing materials?",
    answer:
      "In many cases, yes. If you already purchased materials, the team can evaluate them to ensure they meet project requirements.",
  },
  {
    question: "Can you handle both small repairs and large remodels?",
    answer:
      "Yes — Inside Out Home Improvements handles everything from minor repairs to full-scale remodeling projects. Whether it’s a small fix or a complete renovation, the team brings the same level of quality and professionalism to every job. Please note: There is a $2,000 minimum charge for all projects.",
  },
  {
    question: "What happens if weather delays my exterior project?",
    answer:
      "Safety comes first. If weather conditions prevent safe work, the project will be paused and resumed as soon as conditions improve. You’ll be kept informed every step of the way.",
  },
  {
    question: "Can I get progress updates during the project?",
    answer:
      "Yes — the team communicates regularly and can provide updates, photos, and walkthroughs as your project moves forward.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes — workmanship warranties are provided, and many materials come with manufacturer warranties as well.",
  },
  {
    question: "Is there a fee for change orders during a project?",
    answer:
      "Yes — if you request changes after a project has already begun, a $100 change order fee applies. This covers the additional time required to update plans, adjust materials, and coordinate scheduling changes.",
  },
  {
    question: "How do I receive my estimate?",
    answer:
      "All estimates are delivered via email. After your in-home consultation or project review, your written estimate will be sent directly to the email address you provide. Inside Out Home Improvements prepares all estimates and invoices using Intuit QuickBooks, ensuring clear, professional, and easy-to-read documentation.",
  },
  {
    question: "How soon can my project get started?",
    answer:
      "Once your formal estimate is accepted, we schedule an appointment to collect a down payment. This initial payment allows us to order materials and secure your spot on the schedule. After materials are ordered, we’ll provide your official project start date and keep you updated as everything moves forward.",
  },
  {
    question: "Do you price work over the phone?",
    answer:
      "No — we do not provide pricing over the phone. Every project is unique, and accurate pricing requires an in-person visit to evaluate the scope of work, materials, and site conditions. After the walkthrough, your formal estimate will be prepared and emailed to you.",
  },
  {
    question: "Do you work with subcontractors?",
    answer:
      "Most work is completed by our in-house team. If a subcontractor is needed for a specialized task, we only use trusted, vetted professionals who meet our standards.",
  },
  {
    question: "Will someone walk me through the project before you start?",
    answer:
      "Yes — before work begins, we review the scope, materials, timeline, and expectations so you know exactly what will happen.",
  },
  {
    question: "Do you pull permits for projects?",
    answer:
      "Yes — if your project requires permits, we handle the process to ensure everything meets local building codes. We have a lot of experience working with our local municipalities, so rest assured that your project is covered.",
  },
  {
    question: "What happens if unexpected issues come up during the project?",
    answer:
      "If we uncover hidden problems (like structural damage or outdated wiring), we’ll discuss the findings with you immediately and provide options before moving forward.",
  },
  {
    question: "Do you help source materials?",
    answer:
      "Yes — we can recommend materials, suppliers, and finishes that fit your style and budget. We also handle ordering once the project deposit is collected.",
  },
  {
    question: "How do I approve my estimate?",
    answer:
      "You can approve your estimate directly through the email you receive. Since we use Intuit QuickBooks, the approval process is clear, simple, and secure. If needed, you may also call the office to provide verbal acceptance, but we do prefer that all estimates are officially accepted via email for accurate record-keeping.",
  },
  {
    question: "Do I need to be home while the work is being done?",
    answer:
      "Not always. For many projects, you do not need to be home the entire time. We’ll let you know if your presence is required for specific phases.",
  },
  {
    question: "What should I do to prepare for my project?",
    answer:
      "We may ask you to clear the work area, move fragile items, or secure pets. Any prep steps will be discussed during scheduling so you know exactly what to expect.",
  },
  {
    question: "What if I want to add more work once the project starts?",
    answer:
      "Additional work can be added, but it will require a separate estimate or a change order. A $100 change order fee applies to any changes made after the project begins.",
  },
  {
    question: "Do you guarantee start dates?",
    answer:
      "Start dates depend on material availability, weather, and current scheduling. Once your deposit is collected and materials are ordered, we provide your official start date and keep you updated.",
  },
  {
    question: "Do you protect my home during the project?",
    answer:
      "Yes — we use drop cloths, plastic coverings, and other protective measures to keep your home clean and safe throughout the project.",
  },
  {
    question: "What happens if materials are delayed?",
    answer:
      "If a supplier delay occurs, we notify you immediately and adjust the schedule as needed. You’ll always be kept in the loop.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            IOHI Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-4 text-muted-foreground">Answers to common questions about working with us.</p>
        </div>

        <Accordion type="single" collapsible className="grid gap-4 md:grid-cols-2">
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
