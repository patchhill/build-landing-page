"use client"

import { ArrowUpRight, Workflow, BarChart3, MessageSquare, Shield, Database, Cloud, Lock } from "lucide-react"
import Image from "next/image"
import { FooterContent } from "./footer-content"
import { useContactStore } from "@/lib/contact-store"

export function FeaturesSection() {
  const openContactSheet = useContactStore((state) => state.openContactSheet)
  return (
    <section className="pt-16 md:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl font-sans text-gray-600 mb-4">Introducing Build</p>
          <h2 className="text-[44px] font-serif text-gray-900 leading-tight">The New Standard for Development</h2>
        </div>

        {/* Top Features Grid */}
        <div className="border border-gray-200">
          <div className="grid md:grid-cols-3">
            {/* Workflows */}
            <div className="border-r border-gray-200 p-8">
              <div className="mb-4">
                <span className="bg-[#F4F4F4] text-gray-900 text-xs font-sans px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-gray-600" />
                  Workflows
                </span>
              </div>
              <h4 className="text-base font-sans text-gray-900 mb-3">
                End-to-end automation for your development processes.
              </h4>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                Build deploys AI agents to produce complete development documents from diligence to design, 90% faster
                than humans with an expert human-in-the-loop for QA.
              </p>
            </div>

            {/* Platform */}
            <div className="border-r border-gray-200 p-8">
              <div className="mb-4">
                <span className="bg-[#F4F4F4] text-gray-900 text-xs font-sans px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-gray-600" />
                  Platform
                </span>
              </div>
              <h4 className="text-base font-sans text-gray-900 mb-3">Real-time insights on the world's CRE data.</h4>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                From interoperability across the unstructured world of CRE data, to real-time tracking of assets and
                their markets, Build's ontology and agentic layer is the foundation to your portfolio.
              </p>
            </div>

            {/* Assistant */}
            <div className="p-8">
              <div className="mb-4">
                <span className="bg-[#F4F4F4] text-gray-900 text-xs font-sans px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                  Assistant
                </span>
              </div>
              <h4 className="text-base font-sans text-gray-900 mb-3">Meet Dougie — your most productive teammate.</h4>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                Activate Dougie through an email, triggering workflows, data retrieval and sharing context across
                project stakeholders. Dougie builds up memory across projects as they develop.
              </p>
            </div>
          </div>

          {/* Enterprise Section */}
          <div className="border-t border-gray-200">
            <div className="grid lg:grid-cols-3">
              {/* Left Side - Image and Heading (2 columns) */}
              <div className="lg:col-span-2 lg:border-r border-gray-200 p-8 md:p-12">
                <div className="mb-4">
                  <span className="bg-[#F4F4F4] text-gray-900 text-xs font-semibold font-sans px-3 py-1.5 rounded-full">
                    Built for Enterprise
                  </span>
                </div>
                <h3 className="text-[44px] font-serif text-gray-900 leading-tight mb-8">
                  Secure, accurate, & trustworthy
                </h3>
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-feature-1.png"
                    alt="Construction workers on steel beam"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Content (1 column) */}
              <div className="lg:col-span-1 p-8 md:p-12 flex flex-col justify-between h-full">
                <div>
                  <p className="text-sm font-sans text-gray-600 leading-relaxed mb-6">
                    Build's security is made for Enterprise needs - segmenting customer data with private cloud and
                    jurisdictional data storage available. We're SOC 2 Type II compliant and backed by regular pen
                    testing.
                  </p>

                  <button 
                    onClick={openContactSheet}
                    className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none mb-8"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0F0F0E] px-4 py-2 text-[12px] font-sans text-white backdrop-blur-3xl">
                      Get Started
                      <ArrowUpRight className="ml-2 w-3 h-3" />
                    </span>
                  </button>
                </div>

                <div className="space-y-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-sans text-gray-900">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-sans text-gray-900">Regional data storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-sans text-gray-900">Private cloud on request</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-sans text-gray-900">SSO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Automation Concept to Construction section */}
          <div className="border-t border-gray-200">
            <div className="p-8 md:p-12 border-b border-gray-200">
              <h3 className="text-[44px] font-serif text-gray-900 leading-tight text-center">
                AI Automation from Concept to Construction
              </h3>
            </div>

            <div className="grid md:grid-cols-3">
              {/* Row 1 */}
              {/* Cell 1 - Image only */}
              <div className="border-r border-b border-gray-200">
                <div className="w-full h-[100px] relative">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-concept-1.png"
                    alt="Construction concept 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Cell 2 - Text only */}
              <div className="border-r border-b border-gray-200 p-8 flex flex-col items-center justify-center group hover:bg-black transition-colors duration-200">
                <p className="text-sm font-medium font-sans text-gray-900 group-hover:text-white leading-relaxed text-center transition-colors duration-200">
                  Reducing technical diligence from months to hours
                </p>
              </div>

              {/* Cell 3 - Image only */}
              <div className="border-b border-gray-200">
                <div className="w-full h-[100px] relative">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-concept-2.png"
                    alt="Construction concept 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Row 2 */}
              {/* Cell 4 - Text only */}
              <div className="border-r border-b border-gray-200 p-8 flex flex-col items-center justify-center group hover:bg-black transition-colors duration-200">
                <p className="text-sm font-medium font-sans text-gray-900 group-hover:text-white leading-relaxed text-center transition-colors duration-200">
                  Sourcing off-market opportunities for data center land across the US and Europe
                </p>
              </div>

              {/* Cell 5 - Text only */}
              <div className="border-r border-b border-gray-200 p-8 flex flex-col items-center justify-center group hover:bg-black transition-colors duration-200">
                <p className="text-sm font-medium font-sans text-gray-900 group-hover:text-white leading-relaxed text-center transition-colors duration-200">
                  Voice agents for data collection within brokerage
                </p>
              </div>

              {/* Cell 6 - Text only */}
              <div className="border-b border-gray-200 p-8 flex flex-col items-center justify-center group hover:bg-black transition-colors duration-200">
                <p className="text-sm font-medium font-sans text-gray-900 group-hover:text-white leading-relaxed text-center transition-colors duration-200">
                  Automated lease abstraction
                </p>
              </div>

              {/* Row 3 */}
              {/* Cell 7 - Text only */}
              <div className="border-r border-b border-gray-200 p-8 flex flex-col items-center justify-center group hover:bg-black transition-colors duration-200">
                <p className="text-sm font-medium font-sans text-gray-900 group-hover:text-white leading-relaxed text-center transition-colors duration-200">
                  Voice agents for data collection within brokerage
                </p>
              </div>

              {/* Cell 8 - Image only */}
              <div className="border-r border-b border-gray-200">
                <div className="w-full h-[100px] relative">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-concept-3.png"
                    alt="Construction concept 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Cell 9 - Text only */}
              <div className="border-b border-gray-200 p-8 flex flex-col items-center justify-center group hover:bg-black transition-colors duration-200">
                <p className="text-sm font-medium font-sans text-gray-900 group-hover:text-white leading-relaxed text-center transition-colors duration-200">
                  Real-time market intelligence and portfolio tracking
                </p>
              </div>

              {/* Row 4 */}
              {/* Cell 10 - Image only */}
              <div className="border-r">
                <div className="w-full h-full relative">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-concept-4.png"
                    alt="Construction concept 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Cell 11 - Text only */}
              <div className="border-r p-8 flex flex-col items-center justify-center group hover:bg-black transition-colors duration-200">
                <p className="text-sm font-medium font-sans text-gray-900 group-hover:text-white leading-relaxed text-center transition-colors duration-200">
                  Automated compliance and regulatory documentation
                </p>
              </div>

              {/* Cell 12 - Image only */}
              <div>
                <div className="w-full h-full relative">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-concept-1.png"
                    alt="Construction concept 5"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Customer Stories Section */}
          <div className="border-t border-gray-200">
            {/* Customer Stories Header - No border between columns */}
            <div className="grid lg:grid-cols-2 border-b border-gray-200">
              <div className="p-8 md:p-12">
                <h3 className="text-[44px] font-serif text-gray-900 leading-tight">Customer Stories</h3>
              </div>
              <div className="p-8 md:p-12 flex items-center">
                <p className="text-sm font-sans text-gray-600 leading-relaxed">
                  Our customers range from the world's largest alternative asset investors and in-house development
                  teams, to consultancies across North America and Europe.
                </p>
              </div>
            </div>

            {/* Customer Case Studies */}
            <div className="grid lg:grid-cols-2 border-b border-gray-200">
              {/* Fortune 500 Case Study */}
              <div className="lg:border-r border-gray-200 p-8 md:p-12 flex flex-col">
                <div className="mb-4">
                  <span className="bg-[#F4F4F4] text-gray-900 text-xs font-semibold font-sans px-3 py-1.5 rounded-full">
                    Fortune 500
                  </span>
                </div>
                <h4 className="text-2xl font-serif text-gray-900 mb-24 leading-tight">
                  Mission-critical site sourcing & fatal flaw reporting
                </h4>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm font-sans text-gray-900">95% reduction in delivery time (4 weeks → 1 day)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm font-sans text-gray-900">Up to 400 data sources evaluated</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm font-sans text-gray-900">Ability to run 5x more deals simultaneously</p>
                  </div>
                </div>
              </div>

              {/* Global Developer Case Study */}
              <div className="p-8 md:p-12 flex flex-col">
                <div className="mb-4">
                  <span className="bg-[#F4F4F4] text-gray-900 text-xs font-semibold font-sans px-3 py-1.5 rounded-full">
                    Global developer
                  </span>
                </div>
                <h4 className="text-2xl font-serif text-gray-900 mb-24 leading-tight">Operational automation</h4>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm font-sans text-gray-900">Up to 400 data sources evaluated</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm font-sans text-gray-900">Ability to run 5x more deals simultaneously</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Testimonial */}
            <div className="grid lg:grid-cols-3 border-b border-gray-200">
              <div className="lg:col-span-2 lg:border-r border-gray-200 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-12">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-ashton-black.png"
                    alt="Aston logo"
                    width={80}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <blockquote className="text-[29px] font-sans text-gray-900 leading-relaxed mb-12 tracking-tight">
                  "I was writing 6 figure contracts to do the work that Build is now doing for us for much less and much
                  faster - we essentially aimed to keep our core development team as lean as possible and Build is a big
                  reason in why we can keep increasing capacity without increasing headcount."
                </blockquote>
                <div className="space-y-2">
                  <p className="text-sm font-semibold font-sans text-gray-900">Doug Chambers</p>
                  <p className="text-sm font-sans text-gray-600">Director, Delivery</p>
                  <p className="text-sm font-sans text-gray-600">Aston Labs.</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="w-full h-full relative min-h-[400px]">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-ashton-review.png"
                    alt="Architectural building structure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Footer Content */}
            <FooterContent />
          </div>
        </div>
      </div>
    </section>
  )
}
