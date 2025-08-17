import Link from "next/link"

const jobs = [
  {
    id: "senior-development-manager",
    title: "Senior Development Manager",
    category: "Domain-specific",
    location: "New York, NY / London, UK",
    type: "Full-time"
  },
  {
    id: "construction-technology-lead",
    title: "Construction Technology Lead", 
    category: "Domain-specific",
    location: "San Francisco, CA",
    type: "Full-time"
  },
  {
    id: "head-of-partnerships",
    title: "Head of Partnerships",
    category: "GTM",
    location: "New York, NY",
    type: "Full-time"
  },
  {
    id: "enterprise-sales-director",
    title: "Enterprise Sales Director",
    category: "GTM", 
    location: "San Francisco, CA / Remote",
    type: "Full-time"
  }
]

export function JobBoard() {
    return (
      <div className="bg-black text-white pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          {/* Header Section */}
          <div className="mb-12 pt-16 md:pt-24">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Find Your Role</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">All 4</span>
              <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Domain-specific 2</span>
              <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">GTM 2</span>
              <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Engineering 0</span>
              <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Product 0</span>
              <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Ops 0</span>
            </div>
          </div>
  
          {/* Job Listings */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Domain-specific Jobs */}
            <div>
              <h3 className="text-xl text-gray-400 mb-8">Domain-specific</h3>
              <div className="space-y-6">
                {jobs.filter(job => job.category === "Domain-specific").map((job) => (
                  <Link key={job.id} href={`/job/${job.id}`}>
                    <div className="flex items-center justify-between py-4 border-b border-gray-700 hover:border-gray-500 transition-colors cursor-pointer group">
                      <div>
                        <span className="text-lg group-hover:text-gray-300 transition-colors">{job.title}</span>
                        <p className="text-sm text-gray-400 mt-1">{job.location} • {job.type}</p>
                      </div>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
  
            {/* GTM Jobs */}
            <div>
              <h3 className="text-xl text-gray-400 mb-8">GTM</h3>
              <div className="space-y-6">
                {jobs.filter(job => job.category === "GTM").map((job) => (
                  <Link key={job.id} href={`/job/${job.id}`}>
                    <div className="flex items-center justify-between py-4 border-b border-gray-700 hover:border-gray-500 transition-colors cursor-pointer group">
                      <div>
                        <span className="text-lg group-hover:text-gray-300 transition-colors">{job.title}</span>
                        <p className="text-sm text-gray-400 mt-1">{job.location} • {job.type}</p>
                      </div>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
  
          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl">What we offer</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg">One of the most competitive equity packages on the market</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg">Comprehensive health and dental insurance</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg">Flexible time off as needed</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg">Visa / relocation support</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg">Lunch and dinner provided daily in the office</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  