"use client"

import Image from "next/image"
import { FooterContent } from "./footer-content"
import { useContactStore } from "@/lib/contact-store"

export function CompanyHero() {
  const openContactSheet = useContactStore((state) => state.openContactSheet)
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l border-r border-gray-200">
          {/* Hero Content Section - Centered */}
          <div className="text-center p-8 md:p-12 border-b border-gray-200">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-[64px] md:text-[72px] lg:text-[80px] font-serif font-light leading-none">
                <span className="text-gray-900">Build is Creating</span>
                <br />
                <span className="text-[#747474]">The Future of the Built World</span>
              </h1>

              <p className="text-base text-[#747474] max-w-2xl mx-auto leading-relaxed">
                Development needs to be simpler, smarter, and faster.
              </p>

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
          </div>

          <div className="border-b border-gray-200">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
              <Image
                src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-hero.png"
                alt="Company team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="border-b border-gray-200">
            <div className="grid lg:grid-cols-2">
              {/* Left Column - Main Heading */}
              <div className="lg:border-r border-gray-200 p-8 md:p-12 flex items-start">
                <h2 className="text-[44px] font-serif text-gray-900 leading-tight">
                  Automating the Built World with Agentic AI
                </h2>
              </div>

              {/* Right Column - Company Details */}
              <div className="p-8 md:p-12 space-y-8">
                {/* Founded By & Located In */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-sans text-gray-500 uppercase tracking-wide mb-3">Founded By</h3>
                    <div className="space-y-2">
                      <p className="text-sm font-sans text-gray-900">James Stirrat-Ellis</p>
                      <p className="text-sm font-sans text-gray-900">Benjamin McClusky</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-sans text-gray-500 uppercase tracking-wide mb-3">Located In</h3>
                    <div className="space-y-2">
                      <p className="text-sm font-sans text-gray-900">New York, NY</p>
                      <p className="text-sm font-sans text-gray-900">San Francisco, CA</p>
                      <p className="text-sm font-sans text-gray-900">London, UK</p>
                    </div>
                  </div>
                </div>

                {/* Mission Statement */}
                <div>
                  <p className="text-sm font-sans text-gray-600 leading-relaxed">
                    At Build, our mission is to accelerate and amplify the world's most important built projects — we
                    aim to be every firm's most efficient partner, which means we take a very different approach to
                    technology. Delivering entire work outcomes throughout the development lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-[44px] font-serif text-gray-900 leading-tight">
                Built By Industry Experts, AI Researchers and World-Class Investors
              </h2>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <div className="grid grid-cols-3 grid-rows-2">
              {/* Top Row */}
              <div className="border-r border-b border-gray-200 p-8 md:p-12 flex items-center justify-center">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-index.png"
                  alt="Index Ventures"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="border-r border-b border-gray-200 p-8 md:p-12 flex items-center justify-center">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-blackstone.png"
                  alt="Blackstone"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="border-b border-gray-200 p-8 md:p-12 flex items-center justify-center">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-google.png"
                  alt="Google"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Bottom Row */}
              <div className="border-r border-gray-200 p-8 md:p-12 flex items-center justify-center">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-heatherwick.png"
                  alt="Heatherwick Studio"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="border-r border-gray-200 p-8 md:p-12 flex items-center justify-center">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-oai.png"
                  alt="OpenAI"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="p-8 md:p-12 flex items-center justify-center">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-palantir.png"
                  alt="Palantir"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Careers Call-to-Action Section */}
          <div className="border-b border-gray-200">
            <div className="grid lg:grid-cols-2">
              {/* Left Column - Careers Heading */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="relative w-3 h-3 mr-2">
                    <div className="absolute inset-0 bg-[#366D24] opacity-50 rounded-full" />
                    <div className="absolute inset-[2px] bg-[#366D24] rounded-full" />
                  </div>
                  <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">4 OPEN POSITIONS</span>
                </div>
                <h2 className="text-[44px] font-serif leading-tight">
                  <span className="text-gray-900">Join a World-Class Team</span>
                  <br />
                  <span className="text-[#747474]">Rethinking CRE</span>
                </h2>
              </div>

              {/* Right Column - Description and Button */}
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <p className="text-base font-sans text-gray-900 leading-relaxed">
                  We're seeking A-Players who have what it takes to build a category-defining company. If that's you,
                  let's build.
                </p>

                <div>
                  <button className="relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-4 py-2 text-base text-white backdrop-blur-3xl">
                      See Careers
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <div className="w-full h-[300px] md:h-[400px] relative">
              <Image
                src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-cta.png"
                alt="Build team working environment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Footer Content */}
          <FooterContent />
        </div>
      </div>
    </section>
  )
}
