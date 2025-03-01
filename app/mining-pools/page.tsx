import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MiningPoolsList } from "@/components/mining/MiningPoolsList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mining Pools",
  description: "Find mining pools supporting Deccord cryptocurrency. Choose from our list of reliable mining pools to start mining DCD.",
}

export default function MiningPoolsPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mining Pools</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Find mining pools supporting Deccord cryptocurrency
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Choose from our list of reliable mining pools to start mining DCD. 
            These pools provide stable infrastructure and regular payouts for miners.
          </p>
        </div>
        <MiningPoolsList />
      </main>
      <Footer />
    </>
  )
}