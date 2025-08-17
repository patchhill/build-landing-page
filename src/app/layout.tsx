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
