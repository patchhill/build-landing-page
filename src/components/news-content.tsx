import Image from "next/image"

export function NewsContent() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l border-r border-gray-200">
          {/* News Article Section */}
          <div className="grid lg:grid-cols-2">
            {/* Left Column - Background Image with Logo Card */}
            <div className="lg:border-r border-gray-200">
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
                <Image
                  src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-news-bg.png"
                  alt="Build and Aston partnership announcement"
                  fill
                  className="object-cover"
                />
                
                {/* Logo Card Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Secondary border card with opacity */}
                  <div className="bg-white/40 p-2 shadow-lg">
                    {/* Main content card */}
                    <div className="bg-white p-8 md:p-12">
                      <div className="flex items-center justify-center space-x-6">
                        <img 
                          src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-logo-black.png" 
                          alt="Build" 
                          className="h-12 w-auto" 
                        />
                        <span className="text-2xl font-serif text-gray-400">/</span>
                        <img 
                          src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-ashton-black.png" 
                          alt="Aston" 
                          className="h-12 w-auto" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Title Only */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div>
                <h2 className="text-[44px] font-serif text-gray-900 leading-tight">
                  Build & Aston Labs announce partnership to integrate AI into developing independent power networks.
                </h2>
                
                <div className="pt-6">
                  <p className="text-sm font-sans text-gray-500">
                    Press Release • January 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}