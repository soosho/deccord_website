'use client'

import Marquee from "react-fast-marquee"
import { MecacexLogo } from "./partners/MecacexLogo"
import { MiningPoolStatsLogo } from "./partners/MiningPoolStatsLogo"
import Link from "next/link"

export function PartnersSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        
        <div className="relative">
          {/* Gradient Fade Effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Partners Marquee */}
          <div className="relative overflow-hidden py-8">
            <Marquee 
              pauseOnHover 
              speed={30} 
              gradient={false}
              className="[&_svg]:grayscale [&_svg]:hover:grayscale-0 [&_svg]:transition-all [&_svg]:duration-300 flex items-center justify-center"
            >
              <div className="flex items-center justify-center w-full">
                <div className="mx-16">
                  <Link
                    href="https://mecacex.com/market/DCDUSDT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-75 transition-opacity"
                  >
                    <MecacexLogo />
                  </Link>
                </div>
                <div className="mx-16">
                  <Link
                    href="https://miningpoolstats.stream/deccord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-75 transition-opacity"
                  >
                    <MiningPoolStatsLogo />
                  </Link>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}