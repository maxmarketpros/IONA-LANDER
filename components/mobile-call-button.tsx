"use client"

import { Phone } from "lucide-react"
import Link from "next/link"

export function MobileCallButton() {
  return (
    <Link
      href="tel:8444384644"
      className="fixed bottom-6 right-6 z-50 md:hidden h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
      aria-label="Call (844) 438-4644"
    >
      <Phone className="h-6 w-6" />
    </Link>
  )
}
