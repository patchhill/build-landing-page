import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { SecurityFeatures } from "@/components/security-features"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <Header />

      <PageHero />
      <SecurityFeatures />
    </div>
  )
}