import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { SocialProof } from "@/components/sections/social-proof"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { ServiceArea } from "@/components/sections/service-area"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { MobileCallButton } from "@/components/mobile-call-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SocialProof />
      <Services />
      <Process />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCallButton />
    </main>
  )
}
