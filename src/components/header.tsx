"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { X } from "lucide-react"
import Link from "next/link"
import { useContactStore } from "@/lib/contact-store"

export function Header() {
  const pathname = usePathname()
  const openContactSheet = useContactStore((state) => state.openContactSheet)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isTransparentHeader = pathname === "/" || pathname === "/careers"
  const headerBg = isTransparentHeader ? "bg-transparent" : "bg-white"
  const borderColor = isTransparentHeader ? "border-[#D9D9D966]" : "border-gray-200"
  const textColor = isTransparentHeader ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900"
  const logoSrc = isTransparentHeader
    ? "https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-logo.png"
    : "https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-logo-black.png"
  const buttonHover = isTransparentHeader ? "hover:bg-white/10" : "hover:bg-gray-100"
  const badgeTextColor = isTransparentHeader ? "text-white" : "text-black"

  const headerPosition = isTransparentHeader ? "absolute top-0" : "relative"

  return (
    <header className={`${headerPosition} left-0 right-0 z-40 ${headerBg} border-b ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src={logoSrc || "/placeholder.svg"} alt="Build" className="h-8 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className={`text-xs ${textColor} transition-colors`}>
              Offering
            </Link>
            <Link href="/security" className={`text-xs ${textColor} transition-colors`}>
              Security
            </Link>
            <div className="flex items-center">
              <Link href="/careers" className={`text-xs ${textColor} transition-colors`}>
                Careers
              </Link>
              <span
                className={`ml-1 inline-flex items-center justify-center w-4 h-4 text-[8px] font-medium ${badgeTextColor} bg-[#FF000030] rounded-full`}
              >
                4
              </span>
            </div>
            <Link href="/company" className={`text-xs ${textColor} transition-colors`}>
              Company
            </Link>
            <Link href="/news" className={`text-xs ${textColor} transition-colors`}>
              News
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className={`text-xs ${textColor} ${buttonHover} px-3 py-1.5 rounded-lg focus:outline-none`}>
              Log in
            </button>
            <button 
              onClick={openContactSheet}
              className="relative inline-flex h-8 overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-3 py-1 text-xs text-white backdrop-blur-3xl">
                Get Started
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={openContactSheet}
              className="relative inline-flex h-8 overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-3 py-1 text-xs text-white backdrop-blur-3xl">
                Get Started
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 ${buttonHover} rounded-lg focus:outline-none`}
              aria-label="Open menu"
            >
              {/* Three-line menu icon */}
              <div className="w-5 h-3 flex flex-col justify-between">
                <div className={`h-px w-full ${isTransparentHeader ? 'bg-white' : 'bg-gray-900'} transition-colors`}></div>
                <div className={`h-px w-full ${isTransparentHeader ? 'bg-white' : 'bg-gray-900'} transition-colors`}></div>
                <div className={`h-px w-full ${isTransparentHeader ? 'bg-white' : 'bg-gray-900'} transition-colors`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-50 md:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out data-[closed]:opacity-0" />
        
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel className="pointer-events-auto relative w-screen max-w-md transform transition duration-300 ease-in-out data-[closed]:translate-x-full sm:duration-700">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <img 
                      src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-logo-black.png" 
                      alt="Build" 
                      className="h-8 w-auto" 
                    />
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 px-6 py-6">
                    <nav className="space-y-6">
                      <Link 
                        href="#" 
                        className="block text-base text-gray-900 hover:text-gray-700 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Offering
                      </Link>
                      <Link 
                        href="/security" 
                        className="block text-base text-gray-900 hover:text-gray-700 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Security
                      </Link>
                      <div className="flex items-center">
                        <Link 
                          href="/careers" 
                          className="block text-base text-gray-900 hover:text-gray-700 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Careers
                        </Link>
                        <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-black bg-[#FF000030] rounded-full">
                          4
                        </span>
                      </div>
                      <Link 
                        href="/company" 
                        className="block text-base text-gray-900 hover:text-gray-700 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Company
                      </Link>
                      <Link 
                        href="/news" 
                        className="block text-base text-gray-900 hover:text-gray-700 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        News
                      </Link>
                    </nav>
                  </div>

                  {/* Footer Actions */}
                  <div className="border-t border-gray-200 p-6 space-y-4">
                    <button className="w-full relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-50 px-4 py-2 text-base text-gray-900 backdrop-blur-3xl">
                        Log in
                      </span>
                    </button>
                    <button 
                      onClick={() => {
                        setMobileMenuOpen(false)
                        openContactSheet()
                      }}
                      className="w-full relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-4 py-2 text-base text-white backdrop-blur-3xl">
                        Get Started
                      </span>
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  )
}
