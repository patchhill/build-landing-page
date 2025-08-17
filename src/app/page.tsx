import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"

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