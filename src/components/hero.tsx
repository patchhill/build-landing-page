"use client"

import Image from "next/image"
import { LogoList } from "./logo-list"
import { SparklesCore } from "./sparkles-core"
import { useContactStore } from "@/lib/contact-store"

export function Hero() {
  const openContactSheet = useContactStore((state) => state.openContactSheet)
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-32 md:pt-48">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-hero-bg-bw.png"
          alt="Build hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 space-y-4 flex-1 flex flex-col justify-center">
        {/* Notification Banner */}
        <div className="inline-block md:-mb-1">
          <div className="relative inline-flex items-center bg-[#0F0F0E] backdrop-blur-sm opacity-80 rounded-full px-4 py-2 border border-[#3B3938] overflow-hidden">
            <div className="absolute inset-0">
              <SparklesCore
                id="promotion-sparkles"
                background="transparent"
                minSize={0.4}
                maxSize={1.4}
                particleDensity={120}
                className="w-full h-full"
                particleColor="#e5e5e5"
                speed={1}
              />
            </div>
            <span className="relative z-10 text-xs text-white/90">Build Introduces Agentic AI to CRE</span>
            <svg
              className="relative z-10 w-3 h-3 ml-2 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>

        <h1 className="text-[64px] md:text-[72px] lg:text-[80px] font-serif font-light leading-tight">
          AI for the Built World
        </h1>

        <p className="text-base text-white/90 max-w-2xl mx-auto leading-relaxed -mt-2 md:-mt-6">
          Build is an automation company for the Built World, accelerating the world's most important projects from
          concept to construction.
        </p>

        {/* Wrapped button in div to prevent full width stretching */}
        <div className="inline-block">
          <button 
            onClick={openContactSheet}
            className="relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-4 py-2 text-base text-white backdrop-blur-3xl">
              Get Started
            </span>
          </button>
        </div>
      </div>

      {/* Logo Section */}
      <div className="relative z-10 pb-8 md:pb-16 w-full max-w-6xl mx-auto px-6 mt-32 md:mt-48">
        <LogoList />
      </div>
    </section>
  )
}
