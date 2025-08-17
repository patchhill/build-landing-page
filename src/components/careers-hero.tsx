"use client"

import Image from "next/image"

export function CareersHero() {
    const scrollToJobBoard = () => {
      const jobBoardSection = document.getElementById('job-board')
      if (jobBoardSection) {
        jobBoardSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    return (
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://poygapaqkrcgwyzdamkt.supabase.co/storage/v1/object/public/site/build-careers-hero.png"
            alt="Careers hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 space-y-4 min-h-screen">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Build the Extraordinary</h1>
          </div>
  
          <div className="inline-block">
            <p className="text-base md:text-lg text-white/90 max-w-2xl mb-4">
              Join a team redefining the future of the Built World.
            </p>
          </div>
  
          <div className="inline-block">
            <button 
              onClick={scrollToJobBoard}
              className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B3938_0%,#6B6968_50%,#3B3938_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F0F0E] px-6 py-2 text-base font-medium text-white backdrop-blur-3xl">
                See Careers
              </span>
            </button>
          </div>
        </div>
      </section>
    )
  }
  