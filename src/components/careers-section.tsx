export function CareersSection() {
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-200">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Heading */}
              <div className="p-8 md:p-12 flex items-start">
                <h2 className="text-[44px] font-serif text-gray-900 leading-tight">Automating the Built World</h2>
              </div>
  
              {/* Right Side - Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <p className="text-sm font-sans text-gray-600 leading-relaxed">
                    At Build, our mission is to accelerate and amplify the world's most important built projects — we aim
                    to be every development org AI development partner, which means we take a very different approach to
                    building both technology and organizations.
                  </p>
  
                  <p className="text-sm font-sans text-gray-600 leading-relaxed">
                    We are laser focused on one thing: our aim is to build the biggest 'built world' company on earth. We
                    work a 996+ schedule but take care of our people. As a result, we have a lot of fun and we are one of
                    the hardest working, fastest moving teams in vertical AI.
                  </p>
  
                  <p className="text-sm font-sans text-gray-600 leading-relaxed">
                    Join us in shaping the future of the Built World and exponentially accelerate your career in the
                    process. We want you to do your life's work here.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Team Section Header */}
            <div className="p-8 md:p-12 text-center border-t border-gray-200">
              <h2 className="text-[44px] font-serif text-gray-900 leading-tight">
                Combining Built World
                <br />
                and AI Expertise
              </h2>
            </div>
  
            {/* Team Members */}
            <div className="grid lg:grid-cols-2 border-t border-gray-200">
              {/* James Stirrat-Ellis */}
              <div className="p-8 md:p-12 flex flex-col lg:flex-row items-start gap-6 border-r border-gray-200">
                <div className="flex-shrink-0">
                  <img
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-jamie.png"
                    alt="James Stirrat-Ellis"
                    className="w-48 h-48 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">James Stirrat-Ellis</h3>
                  <p className="text-sm font-semibold text-gray-900 mb-4">CEO & Co-Founder</p>
                  <p className="text-sm text-gray-600 mb-6">
                    Past: Heatherwick Studio,
                    <br />
                    Architecture @ Harvard
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
  
              {/* Ben McClusky */}
              <div className="p-8 md:p-12 flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-ben.png"
                    alt="Ben McClusky"
                    className="w-48 h-48 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">Ben McClusky</h3>
                  <p className="text-sm font-semibold text-gray-900 mb-4">CTO & Co-Founder</p>
                  <p className="text-sm text-gray-600 mb-6">
                    Past: Gorillas, Multi-agent RL @<br />
                    Imperial College London
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  