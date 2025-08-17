import { Metadata } from "next"
import { notFound } from "next/navigation"
import { AnnouncementBanner } from "@/components/annoucement-banner"
import { Header } from "@/components/header"
import { JobDetail } from "@/components/job-detail"

const jobsData = {
  "senior-development-manager": {
    title: "Senior Development Manager",
    category: "Domain-specific",
    location: "New York, NY / London, UK",
    type: "Full-time",
    salary: "$160,000 - $220,000",
    description: "Lead complex development projects from concept to completion, working with our AI-powered platform to accelerate built world projects.",
    responsibilities: [
      "Manage end-to-end development processes for commercial and residential projects",
      "Coordinate with AI agents and human experts to ensure quality deliverables",
      "Lead cross-functional teams including architects, engineers, and consultants",
      "Oversee due diligence, design, and construction documentation phases",
      "Interface with clients and stakeholders throughout project lifecycle"
    ],
    requirements: [
      "8+ years of experience in real estate development or construction management",
      "Bachelor's degree in Architecture, Engineering, Construction Management, or related field",
      "Experience with large-scale commercial or residential developments ($50M+ projects)",
      "Strong understanding of zoning, permitting, and regulatory processes",
      "Excellent communication and project management skills",
      "Experience with technology platforms and AI tools preferred"
    ]
  },
  "construction-technology-lead": {
    title: "Construction Technology Lead",
    category: "Domain-specific", 
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$180,000 - $250,000",
    description: "Drive the integration of AI and technology solutions into construction processes, working at the intersection of built world expertise and cutting-edge AI.",
    responsibilities: [
      "Lead technical integration of AI agents into construction workflows",
      "Develop and implement construction technology standards and best practices",
      "Collaborate with engineering teams to enhance AI model performance for construction use cases",
      "Partner with industry experts to validate AI-generated construction documents",
      "Drive adoption of new construction technologies and methodologies"
    ],
    requirements: [
      "10+ years in construction technology, digital construction, or related field",
      "Deep understanding of construction processes, materials, and methodologies",
      "Experience with BIM, digital twins, and construction management software",
      "Background in implementing technology solutions in traditional industries",
      "Strong technical aptitude and ability to work with AI/ML teams",
      "Professional Engineer (PE) license or equivalent preferred"
    ]
  },
  "head-of-partnerships": {
    title: "Head of Partnerships",
    category: "GTM",
    location: "New York, NY", 
    type: "Full-time",
    salary: "$200,000 - $280,000",
    description: "Build and lead strategic partnerships that accelerate Build's growth in the commercial real estate and construction markets.",
    responsibilities: [
      "Develop and execute partnership strategy with key industry players",
      "Establish relationships with major developers, contractors, and consultancies",
      "Lead partnership negotiations and structure strategic deals",
      "Collaborate with product team to develop partner-specific solutions",
      "Drive revenue growth through strategic channel partnerships",
      "Represent Build at industry events and conferences"
    ],
    requirements: [
      "8+ years in business development, partnerships, or strategy roles",
      "Deep network and relationships in commercial real estate or construction",
      "Track record of building and scaling strategic partnerships",
      "Experience with enterprise B2B sales cycles and complex deal structures",
      "Strong negotiation and communication skills",
      "MBA or equivalent business experience preferred"
    ]
  },
  "enterprise-sales-director": {
    title: "Enterprise Sales Director",
    category: "GTM",
    location: "San Francisco, CA / Remote",
    type: "Full-time", 
    salary: "$180,000 - $240,000 + equity",
    description: "Lead enterprise sales efforts targeting Fortune 500 companies and major real estate developers, selling Build's AI-powered automation platform.",
    responsibilities: [
      "Own and execute enterprise sales strategy for key accounts ($1M+ deals)",
      "Build relationships with C-level executives at target enterprises",
      "Lead complex sales cycles from prospecting through contract execution",
      "Collaborate with technical teams on custom enterprise solutions",
      "Develop sales processes and playbooks for the enterprise segment",
      "Mentor and develop junior sales team members"
    ],
    requirements: [
      "7+ years of enterprise B2B sales experience with $500K+ deal sizes",
      "Proven track record selling to Fortune 500 companies",
      "Experience in PropTech, ConstructionTech, or adjacent industries",
      "Strong understanding of enterprise software sales cycles",
      "Excellent presentation and communication skills",
      "Experience with Salesforce and modern sales tech stack"
    ]
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const job = jobsData[slug as keyof typeof jobsData]

  if (!job) {
    return {
      title: "Job Not Found - Build Careers",
      description: "The requested job position could not be found.",
    }
  }

  return {
    title: `${job.title} - Build Careers`,
    description: job.description,
    keywords: `${job.title}, ${job.category}, ${job.location}, Build careers, construction jobs, AI development jobs`,
    openGraph: {
      title: `${job.title} - Build Careers`,
      description: job.description,
      type: "website",
      url: `https://build.com/job/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} - Build Careers`,
      description: job.description,
    },
  }
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const job = jobsData[slug as keyof typeof jobsData]

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <Header />
      <JobDetail job={job} />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(jobsData).map((slug) => ({
    slug,
  }))
}