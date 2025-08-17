import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { CompanyHero } from "@/components/company-hero"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <Header />
      <CompanyHero />
    </div>
  )
}
