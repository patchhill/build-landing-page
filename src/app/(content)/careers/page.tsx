import { Metadata } from "next"
import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { CareersHero } from "@/components/careers-hero"
import { CareersSection } from "@/components/careers-section"
import { JobBoard } from "@/components/job-board"
import { ImageGallery } from "@/components/image-gallery"

export const metadata: Metadata = {
  title: "Careers at Build - Join a World-Class Team Rethinking CRE",
  description: "Join Build's world-class team and help redefine the future of the built world. We're seeking A-Players who have what it takes to build a category-defining company.",
  keywords: "Build careers, construction jobs, AI development jobs, real estate technology careers, built world opportunities",
  openGraph: {
    title: "Careers at Build - Join Our Team",
    description: "Join a world-class team rethinking commercial real estate with AI-powered development automation.",
    type: "website",
    url: "https://build.inc/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Build - Join Our Team",
    description: "Join a world-class team rethinking commercial real estate.",
  },
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <div className="relative">
        <Header />
        <CareersHero />
      </div>
      <CareersSection />
      <JobBoard />
      <ImageGallery />
    </div>
  )
}
