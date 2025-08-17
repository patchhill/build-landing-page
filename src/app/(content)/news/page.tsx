import { Metadata } from "next"
import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { NewsHero } from "@/components/news-hero"
import { NewsContent } from "@/components/news-content"
import { NewsItems } from "@/components/news-items"
import { FooterContent } from "@/components/footer-content"

export const metadata: Metadata = {
  title: "News & Press - Build's Latest Updates and Partnerships",
  description: "Stay updated with Build's latest news, press releases, and strategic partnerships. Discover how we're revolutionizing the built world with AI-powered development automation.",
  keywords: "Build news, construction technology news, AI development updates, built world partnerships, press releases",
  openGraph: {
    title: "News & Press - Build Updates",
    description: "Latest news and partnerships from Build, revolutionizing the built world with AI-powered automation.",
    type: "website",
    url: "https://build.inc/news",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Press - Build Updates",
    description: "Latest news and partnerships from Build.",
  },
}

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