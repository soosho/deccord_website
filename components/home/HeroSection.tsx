import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DownloadButton } from "@/components/layout/DownloadModal"
import { ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center space-y-6 py-12 md:py-20 overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-xl" />
        <Image
          src="/logos/logo.png"
          alt="Deccord Logo"
          width={120}
          height={120}
          priority
          className="relative z-10 animate-pulse-slow w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
        />
      </div>

      <div className="space-y-4 md:space-y-6 relative z-10">
        <h1 className="text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.6] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 py-2">
          <span className="block md:inline">Deccord (DCD)</span>
          <span className="block md:inline md:ml-2">– Revolutionizing Digital Currency</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mx-auto max-w-[90%] md:max-w-3xl">
          A fast, secure, and fully decentralized digital currency leveraging blockchain technology 
          and masternodes to ensure governance and security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <DownloadButton 
            variant="default"
            className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all"
          />
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white transition-colors shadow hover:shadow-lg hover:-translate-y-0.5 transform transition-all"
            asChild
          >
            <a 
              href="https://explorer.deccord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Block Explorer <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-[10%] md:left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-[10%] md:right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-float-slow" />
      <div className="absolute bottom-1/4 left-[15%] md:left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float-slower" />
    </section>
  )
}