export function LogoList() {
    return (
      <div className="text-center space-y-6">
        <p className="text-[12px] font-light text-white/90 tracking-wide">Built for Leaders</p>
  
        {/* Desktop: Static layout */}
        <div className="hidden md:flex items-center justify-center gap-12 opacity-90">
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

        {/* Mobile: Infinite scroll */}
        <div className="md:hidden overflow-hidden opacity-90">
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
        </div>
      </div>
    )
  }
  