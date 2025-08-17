import { Metadata } from "next"
import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"

export const metadata: Metadata = {
  title: "Build - AI-Powered Development Platform for the Built World",
  description: "Build is creating the future of the built world with AI-powered development automation. Accelerate your projects with intelligent agents that produce full development documents 90% faster than humans.",
  keywords: "AI development, construction automation, real estate development, built world, construction technology, development platform",
  openGraph: {
    title: "Build - AI-Powered Development Platform",
    description: "Accelerate your built world projects with AI-powered automation. 90% faster development documents with expert human-in-the-loop QA.",
    type: "website",
    url: "https://build.inc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build - AI-Powered Development Platform",
    description: "Accelerate your built world projects with AI-powered automation.",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <FeaturesSection />
    </div>
  )
}