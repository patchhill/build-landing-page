export function NewsHero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l border-r border-gray-200">
          {/* Hero Content Section - Centered */}
          <div className="text-center p-8 md:p-12 border-b border-gray-200">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-[64px] md:text-[72px] lg:text-[80px] font-serif font-light leading-none text-gray-900">
                Newsroom
              </h1>

              <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Press releases and partnership announcements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}