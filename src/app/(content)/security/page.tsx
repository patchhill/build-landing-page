import { Metadata } from "next"
import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { SecurityFeatures } from "@/components/security-features"

export const metadata: Metadata = {
  title: "Security at Build - Secure by Design Platform",
  description: "Learn about Build's security-first approach. Our platform is built with zero-trust principles, end-to-end encryption, and rigorous access controls to safeguard your data.",
  keywords: "Build security, construction platform security, data protection, SOC2 compliance, GDPR compliance, secure development platform",
  openGraph: {
    title: "Security at Build - Secure by Design",
    description: "Build's security-first platform with zero-trust principles, end-to-end encryption, and rigorous access controls.",
    type: "website",
    url: "https://build.inc/security",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security at Build - Secure by Design",
    description: "Security-first platform with zero-trust principles and end-to-end encryption.",
  },
}

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