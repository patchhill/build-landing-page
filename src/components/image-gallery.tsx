"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FooterContent } from "./footer-content"

const galleryImages = [
  {
    src: "/celebrating-team.png",
    alt: "Team celebration",
  },
  {
    src: "/tandem-skydiving-adventure.png",
    alt: "Skydiving adventure",
  },
  {
    src: "/colleagues-retreat-fun.png",
    alt: "Company retreat",
  },
  {
    src: "/placeholder-e3i4f.png",
    alt: "Team building",
  },
  {
    src: "/happy-office-party.png",
    alt: "Office celebration",
  },
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Mobile: show 1 image, Desktop: show 3 images
  const mobileVisibleImages = [galleryImages[currentIndex]]
  const desktopVisibleImages = [
    galleryImages[currentIndex],
    galleryImages[(currentIndex + 1) % galleryImages.length],
    galleryImages[(currentIndex + 2) % galleryImages.length],
  ]

  const hasMoreImages = galleryImages.length > 1

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200">
          <div className="p-8 md:p-12 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Mobile: Single image layout */}
              <div className="flex gap-4 flex-1 lg:hidden">
                {mobileVisibleImages.map((image, index) => (
                  <div key={`mobile-${currentIndex}-${index}`} className="flex-1">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-64 object-cover grayscale"
                    />
                  </div>
                ))}
              </div>

              {/* Desktop: Three image layout */}
              <div className="hidden lg:flex gap-4 flex-1">
                {desktopVisibleImages.map((image, index) => (
                  <div key={`desktop-${currentIndex}-${index}`} className="flex-1">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-64 md:h-80 object-cover grayscale"
                    />
                  </div>
                ))}
              </div>

              {hasMoreImages && (
                <div className="flex gap-2 justify-center lg:ml-8 lg:justify-start">
                  <button
                    onClick={prevImage}
                    className="relative inline-flex h-12 w-12 overflow-hidden rounded-full p-[1px] focus:outline-none"
                    aria-label="Previous image"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0F0F0E] text-white backdrop-blur-3xl">
                      <ChevronLeft className="w-5 h-5" />
                    </span>
                  </button>
                  <button
                    onClick={nextImage}
                    className="relative inline-flex h-12 w-12 overflow-hidden rounded-full p-[1px] focus:outline-none"
                    aria-label="Next image"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0F0F0E] text-white backdrop-blur-3xl">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <FooterContent />
        </div>
      </div>
    </section>
  )
}
