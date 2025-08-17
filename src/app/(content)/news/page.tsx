import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { NewsHero } from "@/components/news-hero"
import { NewsContent } from "@/components/news-content"
import { NewsItems } from "@/components/news-items"
import { FooterContent } from "@/components/footer-content"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <Header />
      <NewsHero />
      <NewsContent />
      <NewsItems />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l border-r border-gray-200">
            <div className="border-t border-gray-200">
              <FooterContent />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}