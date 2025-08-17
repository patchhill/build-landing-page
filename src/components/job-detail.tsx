"use client"

import { useContactStore } from "@/lib/contact-store"
import { FooterContent } from "./footer-content"

interface JobDetailProps {
  job: {
    title: string
    category: string
    location: string
    type: string
    salary: string
    description: string
    responsibilities: string[]
    requirements: string[]
  }
}

export function JobDetail({ job }: JobDetailProps) {
  const openContactSheet = useContactStore((state) => state.openContactSheet)

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l border-r border-gray-200">
          {/* Job Hero Section */}
          <div className="text-center p-8 md:p-12 border-b border-gray-200">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {job.category}
                </span>
              </div>
              <h1 className="text-[64px] md:text-[72px] lg:text-[80px] font-serif font-light leading-none text-gray-900">
                {job.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.type}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  {job.salary}
                </div>
              </div>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="border-b border-gray-200">
            <div className="grid lg:grid-cols-2">
              {/* Left Column - About the Role */}
              <div className="lg:border-r border-gray-200 p-8 md:p-12">
                <h2 className="text-[44px] font-serif text-gray-900 leading-tight mb-6">About the Role</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Right Column - Apply Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">Ready to Join Build?</h3>
                  <p className="text-base text-gray-600 mb-8">
                    Apply now to be part of a team that's revolutionizing the built world.
                  </p>
                  <button 
                    onClick={openContactSheet}
                    className="relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-6 py-2 text-base text-white backdrop-blur-3xl">
                      Apply Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Responsibilities and Requirements Section */}
          <div className="border-b border-gray-200">
            <div className="grid lg:grid-cols-2">
              {/* Left Column - Responsibilities */}
              <div className="lg:border-r border-gray-200 p-8 md:p-12">
                <h2 className="text-2xl font-serif text-gray-900 mb-6">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base text-gray-600 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Requirements */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-serif text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base text-gray-600 leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <FooterContent />
        </div>
      </div>
    </section>
  )
}