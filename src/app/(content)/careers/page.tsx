import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { CareersHero } from "@/components/careers-hero"
import { CareersSection } from "@/components/careers-section"
import { JobBoard } from "@/components/job-board"
import { ImageGallery } from "@/components/image-gallery"

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
