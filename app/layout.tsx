import type React from "react"
import type { Metadata } from "next"
import { Inter, Libre_Franklin } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PrimeBBQGear - BBQ Grill Reviews",
  description: "Expert barbecue grill reviews and buying guides",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libreFranklin.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
