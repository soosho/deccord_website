// components/layout/Navbar.tsx
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "./MobileNav"
import { DownloadButton } from "./DownloadModal"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="relative hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logos/deccord-logo-orange.png"
            alt="Deccord Logo"
            width={400}
            height={90}
            className="w-[160px] md:w-[200px] h-auto"
            quality={100}
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/network" className="hover:text-primary transition-colors">Network</Link>
          <Link href="/mining-pools" className="hover:text-primary transition-colors">Mining Pools</Link>
          <a 
            href="https://explorer.deccord.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
          >
            Block Explorer
          </a>
          <Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link>
          <DownloadButton className="border-primary text-primary hover:bg-primary hover:text-white" />
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </nav>
  )
}