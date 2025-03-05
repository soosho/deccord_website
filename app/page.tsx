import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { RoadmapSection } from "@/components/home/RoadmapSection"
import { CoreFeaturesSection } from "@/components/home/CoreFeaturesSection"
import { CommunitySection } from "@/components/home/CommunitySection"
import { HeroSection } from "@/components/home/HeroSection"
import { PartnersSection } from "@/components/home/PartnersSection"
import { NetworkMetricsSection } from "@/components/home/NetworkMetricsSection"
import { SecurityFeaturesSection } from "@/components/home/SecurityFeaturesSection"
import { UseCasesSection } from "@/components/home/UseCasesSection"
import { AdvancedFeaturesSection } from "@/components/home/AdvancedFeaturesSection"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <PartnersSection />
        <CoreFeaturesSection />
        <Separator className="my-8 md:my-12" />
        <NetworkMetricsSection />
        <Separator className="my-8 md:my-12" />
        <SecurityFeaturesSection />
        <Separator className="my-8 md:my-12" />
        <AdvancedFeaturesSection />
        <Separator className="my-8 md:my-12" />
        <UseCasesSection />
        <Separator className="my-8 md:my-12" />
        <RoadmapSection />
        <Separator className="my-8 md:my-12" />
        <CommunitySection />
      </main>
      <Footer />
    </>
  )
}
