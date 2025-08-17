import { Metadata } from "next"
import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { CompanyHero } from "@/components/company-hero"

export const metadata: Metadata = {
  title: "About Build - Automating the Built World with Agentic AI",
  description: "Learn about Build's mission to accelerate and amplify the world's most important built projects. Founded by industry experts and backed by world-class investors.",
  keywords: "Build company, construction AI, real estate automation, development technology, built world innovation",
  openGraph: {
    title: "About Build - Automating the Built World",
    description: "Build is accelerating the world's most important built projects with AI-powered automation and expert human oversight.",
    type: "website",
    url: "https://build.inc/company",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Build - Automating the Built World",
    description: "Learn about Build's mission to accelerate built world projects with AI.",
  },
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <Header />
      <CompanyHero />
    </div>
  )
}
