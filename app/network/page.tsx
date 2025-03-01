import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { NetworkStats } from "@/components/network/NetworkStats"
import { NetworkInfo } from "@/components/network/NetworkInfo"
import { SupplyInfo } from "@/components/network/SupplyInfo"
import { Separator } from "@/components/ui/separator"
import { NodesInfo } from "@/components/network/NodesInfo"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Network Stats",
  description: "View real-time statistics of the Deccord network, including hashrate, masternodes, and blockchain information.",
}

export default function NetworkPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Network Overview</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Explore the Deccord network statistics and infrastructure
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Deccord operates on a robust and secure network powered by X11 Proof of Work and masternodes. 
            Our infrastructure combines high-performance nodes, advanced security features, and a 
            decentralized governance system to ensure reliable and fast transactions for all users.
          </p>
        </div>
        
        <NetworkStats />
        <Separator className="my-8 md:my-12" />
        <NetworkInfo />
        <Separator className="my-8 md:my-12" />
        <SupplyInfo />
        <Separator className="my-8 md:my-12" />
        <NodesInfo />
      </main>
      <Footer />
    </>
  )
}