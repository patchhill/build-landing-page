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

  const visibleImages = [
    galleryImages[currentIndex],
    galleryImages[(currentIndex + 1) % galleryImages.length],
    galleryImages[(currentIndex + 2) % galleryImages.length],
  ]

  const hasMoreImages = galleryImages.length > 3

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200">
          <div className="p-8 md:p-12 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 flex-1">
                {visibleImages.map((image, index) => (
                  <div key={`${currentIndex}-${index}`} className="flex-1">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-64 md:h-80 object-cover grayscale"
                    />
                  </div>
                ))}
              </div>

              {hasMoreImages && (
                <div className="flex gap-2 ml-8">
                  <button
                    onClick={prevImage}
                    className="relative inline-flex h-12 w-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    aria-label="Previous image"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0F0F0E] text-white backdrop-blur-3xl">
                      <ChevronLeft className="w-5 h-5" />
                    </span>
                  </button>
                  <button
                    onClick={nextImage}
                    className="relative inline-flex h-12 w-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
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
