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
                  <div className="bg-white/40 p-3 md:p-4 shadow-lg">
                    {/* Main content card */}
                    <div className="bg-white p-8 md:p-12 lg:p-16 max-w-sm lg:max-w-md">
                      <div className="flex flex-col items-center justify-center space-y-6">
                        <img 
                          src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-logo-black.png" 
                          alt="Build" 
                          className="h-10 md:h-14 lg:h-16 w-auto" 
                        />
                        <img 
                          src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-ashton-black.png" 
                          alt="Aston" 
                          className="h-10 md:h-14 lg:h-16 w-auto" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Title Only */}
            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-[44px] font-serif text-gray-900 leading-tight">
                  Build & Aston Labs announce partnership to integrate AI into developing independent power networks.
                </h2>
                
                <div className="pt-4 md:pt-6">
                  <p className="text-xs md:text-sm font-sans text-gray-500">
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