export function LogoList() {
    return (
      <div className="text-center space-y-6">
        <p className="text-[12px] font-light text-white/90 tracking-wide">Built for Leaders</p>
  
        {/* Desktop: Static layout with fade */}
        <div className="hidden md:block relative">
          <div className="flex items-center justify-center gap-12 opacity-90">
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/blackstone-logo.png"
              alt="Blackstone"
              className="w-24 h-8 object-contain filter brightness-0 invert"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/apollo-logo.png"
              alt="Apollo"
              className="w-24 h-8 object-contain filter brightness-0 invert"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/aston-logo.png"
              alt="Aston"
              className="w-24 h-8 object-contain filter brightness-0 invert"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/stack-logo.png"
              alt="Stack Data Strategy"
              className="w-24 h-8 object-contain filter brightness-0 invert"
            />
          </div>
          {/* Desktop fade overlays */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/30 to-transparent pointer-events-none"></div>
        </div> 

        {/* Mobile: Infinite scroll with fade */}
        <div className="md:hidden relative overflow-hidden opacity-90">
          <div className="flex items-center gap-8 logo-scroll">
            {/* First set of logos */}
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/blackstone-logo.png"
              alt="Blackstone"
              className="w-20 h-6 object-contain filter brightness-0 invert flex-shrink-0"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/apollo-logo.png"
              alt="Apollo"
              className="w-20 h-6 object-contain filter brightness-0 invert flex-shrink-0"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/aston-logo.png"
              alt="Aston"
              className="w-20 h-6 object-contain filter brightness-0 invert flex-shrink-0"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/stack-logo.png"
              alt="Stack Data Strategy"
              className="w-20 h-6 object-contain filter brightness-0 invert flex-shrink-0"
            />
            {/* Duplicate set for seamless loop */}
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/blackstone-logo.png"
              alt="Blackstone"
              className="w-20 h-6 object-contain filter brightness-0 invert flex-shrink-0"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/apollo-logo.png"
              alt="Apollo"
              className="w-20 h-6 object-contain filter brightness-0 invert flex-shrink-0"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/aston-logo.png"
              alt="Aston"
              className="w-20 h-6 object-contain filter brightness-0 invert flex-shrink-0"
            />
            <img
              src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/stack-logo.png"
              alt="Stack Data Strategy"
              className="w-20 h-6 object-contain filter brightness-0 invert flex-shrink-0"
            />
          </div>
          {/* Mobile fade overlays */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    )
  }
  