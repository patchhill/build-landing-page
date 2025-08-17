import Link from "next/link"

export function AnnouncementBanner() {
  return (
    <div className="bg-black text-white py-3 px-4 relative z-50">
      <div className="flex items-center justify-center gap-2 text-xs">
        <div className="relative w-3 h-3">
          <div className="absolute inset-0 bg-[#16a34a] opacity-50 rounded-full animate-pulse" />
          <div className="absolute inset-[2px] bg-[#16a34a] rounded-full" />
        </div>
        <span>Build raises $8M Seed led by Index</span>
        <Link href="#" className="underline hover:no-underline transition-all duration-200">
          <span className="md:hidden">Read more</span>
          <span className="hidden md:inline">Read our announcement</span>
        </Link>
        <Link href="#" className="hidden md:inline underline hover:no-underline transition-all duration-200">
          Bloomberg
        </Link>
      </div>
    </div>
  )
}
