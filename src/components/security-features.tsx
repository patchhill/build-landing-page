import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FooterContent } from "./footer-content"

export function SecurityFeatures() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l border-r border-gray-200">
          <div className="grid md:grid-cols-3">
            {/* No training on your data */}
            <div className="border-r border-b border-gray-200 p-8">
              <div className="mb-6">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-compliant.png"
                  alt="Secure document icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-sans text-gray-900 mb-4">No training on your data</h3>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                AI workers that produce full development documents from diligence to design, 90% faster than humans with
                an expert human-in-the-loop for QA.
              </p>
            </div>

            {/* Private data stays private */}
            <div className="border-r border-b border-gray-200 p-8">
              <div className="mb-6">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-lock.png"
                  alt="Lock icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-sans text-gray-900 mb-4">Private data stays private</h3>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                AI workers that produce full development documents from diligence to design, 90% faster than humans with
                an expert human-in-the-loop for QA.
              </p>
            </div>

            {/* Up-to-date compliance */}
            <div className="border-b border-gray-200 p-8">
              <div className="mb-6">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-tick.png"
                  alt="Compliance checkmark icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-sans text-gray-900 mb-4">Up-to-date compliance</h3>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                AI workers that produce full development documents from diligence to design, 90% faster than humans with
                an expert human-in-the-loop for QA.
              </p>
            </div>

            {/* Modern and secure security practices */}
            <div className="border-r border-gray-200 p-8">
              <div className="mb-6">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-shield.png"
                  alt="Security shield icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-sans text-gray-900 mb-4">
                Modern and secure security practices
              </h3>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                AI workers that produce full development documents from diligence to design, 90% faster than humans with
                an expert human-in-the-loop for QA.
              </p>
            </div>

            {/* Encrypted everywhere */}
            <div className="border-r border-gray-200 p-8">
              <div className="mb-6">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-secure.png"
                  alt="Encryption icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-sans text-gray-900 mb-4">Encrypted everywhere</h3>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                AI workers that produce full development documents from diligence to design, 90% faster than humans with
                an expert human-in-the-loop for QA.
              </p>
            </div>

            {/* Audited & tested */}
            <div className="p-8">
              <div className="mb-6">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-stamp.png"
                  alt="Audit stamp icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-sans text-gray-900 mb-4">Audited & tested</h3>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                AI workers that produce full development documents from diligence to design, 90% faster than humans with
                an expert human-in-the-loop for QA.
              </p>
            </div>
          </div>

          {/* Compliance Section */}
          <div className="border-t border-gray-200">
            {/* Header */}
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-[44px] font-serif text-gray-900 leading-tight">
                Compliant with
                <br />
                industry standards
              </h2>
            </div>

            {/* Compliance Cards */}
            <div className="grid md:grid-cols-3 border-t border-gray-200">
              {/* SOC 2 */}
              <div className="border-r border-gray-200 p-8 md:p-12 text-center">
                <div className="mb-8">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-security-soc2.png"
                    alt="SOC 2 compliance badge"
                    width={240}
                    height={240}
                    className="mx-auto object-contain"
                  />
                </div>
                <h3 className="text-sm font-sans text-gray-900 mb-4">SOC2 II (In Observation)</h3>
                <button className="inline-flex items-center text-sm font-sans text-gray-900 hover:text-gray-700 transition-colors">
                  Details
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </button>
              </div>

              {/* GDPR */}
              <div className="border-r border-gray-200 p-8 md:p-12 text-center">
                <div className="mb-8">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-security-gdpr.png"
                    alt="GDPR compliance badge"
                    width={240}
                    height={240}
                    className="mx-auto object-contain"
                  />
                </div>
                <h3 className="text-sm font-sans text-gray-900 mb-4">GDPR</h3>
                <button className="inline-flex items-center text-sm font-sans text-gray-900 hover:text-gray-700 transition-colors">
                  Details
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </button>
              </div>

              {/* CCPA */}
              <div className="p-8 md:p-12 text-center">
                <div className="mb-8">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-security-ccpa.png"
                    alt="CCPA compliance badge"
                    width={240}
                    height={240}
                    className="mx-auto object-contain"
                  />
                </div>
                <h3 className="text-sm font-sans text-gray-900 mb-4">CCPA</h3>
                <button className="inline-flex items-center text-sm font-sans text-gray-900 hover:text-gray-700 transition-colors">
                  Details
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Secure by Design Section */}
          <div className="border-t border-gray-200">
            <div className="grid lg:grid-cols-2">
              {/* Left column - Heading */}
              <div className="flex items-start p-8 md:p-12">
                <h2 className="text-[44px] font-serif text-gray-900 leading-tight">Secure by Design</h2>
              </div>

              {/* Right column - Content */}
              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  <p className="text-base font-sans text-gray-900 leading-relaxed">
                    At Build, security isn't a feature—it's the framework behind everything we build. From day one,
                    we've embedded protection into every layer of our platform, applying zero-trust principles,
                    end-to-end encryption, and rigorous access controls to safeguard your data. Our systems are
                    constantly monitored and stress-tested to stay ahead of evolving threats.
                  </p>

                  <p className="text-base font-sans text-gray-900 leading-relaxed">
                    We use modern cloud infrastructure, automated security tooling, and independent audits to ensure
                    your information remains secure—always. Security is ongoing.
                  </p>

                  <div className="flex flex-col items-start gap-4 pt-4">
                    <div className="inline-block">
                      <button className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-6 py-2 text-sm text-white backdrop-blur-3xl">
                          Request Security Questionnaire
                        </span>
                      </button>
                    </div>
                    <div className="inline-block">
                      <button className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-6 py-2 text-sm text-white backdrop-blur-3xl">
                          Security at Build
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Added FooterContent component to complete the grid */}
          <div className="border-t border-gray-200">
            <FooterContent />
          </div>
        </div>
      </div>
    </section>
  )
}
