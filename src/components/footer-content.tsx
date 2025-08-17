"use client"

import Image from "next/image"
import { useContactStore } from "@/lib/contact-store"

export function FooterContent() {
  const openContactSheet = useContactStore((state) => state.openContactSheet)
  return (
    <>
      {/* Footer Section */}
      <div className="grid lg:grid-cols-3">
        {/* Left Side - Logo, CTA and Button */}
        <div className="lg:col-span-2 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-logo-black.png"
              alt="Build logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <h3 className="text-[44px] font-serif text-gray-900 leading-tight mb-8">Ready to Build?</h3>
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

        {/* Right Side - Addresses and SOC Badge */}
        <div className="lg:col-span-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-sans text-gray-900 leading-relaxed">
                  2261 Market Street, STE 22610
                  <br />
                  San Francisco, CA 94114
                </p>
              </div>
              <div>
                <p className="text-sm font-sans text-gray-900 leading-relaxed">
                  140 Goswell Rd.,
                  <br />
                  London EC1V 7DY
                </p>
              </div>
            </div>

            <div className="ml-8">
              <Image
                src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-soc2.png"
                alt="SOC 2 Type II Certified"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="p-8 md:p-12 pb-5">
        <p className="text-sm font-sans text-gray-500">© 2025 Build Technologies, Inc.</p>
      </div>
    </>
  )
}
