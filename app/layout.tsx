import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inside Out Home Improvements | Remodeling & Exterior Services in Burton, MI",
  description:
    "Family-owned home remodeling and exterior improvements serving Burton, Grand Blanc, Flint, and Genesee County since 1999. Kitchen, bath, roofing, siding, and more.",
  generator: "v0.app",
  keywords: [
    "home remodeling",
    "kitchen remodel",
    "bathroom remodel",
    "roofing",
    "siding",
    "Burton MI",
    "Genesee County",
    "contractor",
  ],
  openGraph: {
    title: "Inside Out Home Improvements | Remodeling & Exterior Services",
    description: "Family-owned home remodeling serving Burton, MI and Genesee County since 1999.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Inside Out Home Improvements",
              description: "Family-owned home remodeling and exterior improvements serving Genesee County since 1999.",
              telephone: "(844) 438-4644",
              email: "contactsupport@get-iohi.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3312 S Center Rd Ste A",
                addressLocality: "Burton",
                addressRegion: "MI",
                postalCode: "48519",
                addressCountry: "US",
              },
              areaServed: [
                "Burton, MI",
                "Grand Blanc, MI",
                "Flint, MI",
                "Davison, MI",
                "Fenton, MI",
                "Swartz Creek, MI",
                "Holly, MI",
                "Linden, MI",
                "Goodrich, MI",
                "Clio, MI",
                "Flushing, MI",
                "Mount Morris, MI",
              ],
              foundingDate: "1999",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
