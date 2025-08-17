import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ContactSheet } from "@/components/contact-sheet"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Build - AI for the Built World",
  description:
    "Build is an automation company for the Built World, accelerating the world's most important projects from concept to construction.",
  openGraph: {
    title: "Build - AI for the Built World",
    description: "Build is an automation company for the Built World, accelerating the world's most important projects from concept to construction.",
    url: "https://build.inc",
    siteName: "Build",
    images: [
      {
        url: "/build-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Build - AI for the Built World",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build - AI for the Built World",
    description: "Build is an automation company for the Built World, accelerating the world's most important projects from concept to construction.",
    images: ["/build-og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <ContactSheet />
      </body>
    </html>
  )
}
