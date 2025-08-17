"use client"

import { useContactStore } from "@/lib/contact-store"

export function PageHero() {
  const openContactSheet = useContactStore((state) => state.openContactSheet)
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l border-r border-gray-200">
          {/* Hero Content Section - Centered */}
          <div className="text-center p-8 md:p-12 border-b border-gray-200">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-[64px] md:text-[72px] lg:text-[80px] font-serif font-light leading-none">
                <span className="text-gray-900">Safe, Secure</span>
                <br />
                <span className="text-[#747474]">& Private</span>
              </h1>

              <p className="text-base text-[#747474] max-w-2xl mx-auto leading-relaxed">
                Build protects your knowledge and your data with enterprise-grade security and compliance.
              </p>

              <div className="inline-block">
                <button 
                  onClick={openContactSheet}
                  className="relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-4 py-2 text-base text-white backdrop-blur-3xl">
                    Visit Trust Center
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  