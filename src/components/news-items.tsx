import Image from "next/image"

const newsItems = [
  {
    id: 1,
    logo: "https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-index.png",
    logoAlt: "Index Ventures",
    title: "Stack Partners with Build to automate Land Due Diligence for Digital Infrastructure"
  },
  {
    id: 2,
    logo: "https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-index.png",
    logoAlt: "Index Ventures",
    title: "Build raises $7M Seed Led by Index Ventures"
  },
  {
    id: 3,
    logo: "https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-company-index.png",
    logoAlt: "Index Ventures",
    title: "Build partners with LangChain to orchestrate multi-agent workflows for the Built World"
  }
]

export function NewsItems() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l border-r border-gray-200">
          {/* White space separator */}
          <div className="border-t border-gray-200 py-16 bg-white"></div>
          
          {/* News Items Grid */}
          <div className="grid md:grid-cols-3">
            {newsItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`${index < newsItems.length - 1 ? 'border-r border-gray-200' : ''} relative`}
              >
                {/* Background Image - 16:9 aspect ratio */}
                <div className="w-full h-[200px] md:h-[240px] relative">
                  <Image
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-news-item-bg.png"
                    alt="News background"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Content Card Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    {/* Secondary border card with stronger opacity */}
                    <div className="bg-white/40 p-1 shadow-lg max-w-xs w-full">
                      {/* Main content card */}
                      <div className="bg-white p-6 md:p-8">
                        {/* Logo */}
                        <div className="mb-6 flex justify-center">
                          <img 
                            src={item.logo} 
                            alt={item.logoAlt} 
                            className="h-8 w-auto max-w-[120px] object-contain" 
                          />
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-sm font-sans text-gray-900 leading-relaxed text-center">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}