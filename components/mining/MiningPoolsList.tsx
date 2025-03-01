import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const miningPools = [
  {
    name: "Mining Pool Hub",
    url: "https://miningpoolhub.com/?page=pool&algo=x11",
    fee: "0.9%",
    minPayout: "0.1 DCD",
    features: ["PPLNS", "Automatic Wallet Creation", "Real-time Statistics"],
    location: "Global",
    hashrate: "Variable"
  },
  {
    name: "ZPool",
    url: "https://zpool.ca",
    fee: "2%",
    minPayout: "0.001 DCD",
    features: ["Auto Exchange", "Multiple Payout Options", "Low Minimum Payout"],
    location: "Europe",
    hashrate: "Variable"
  },
  // Add more pools as they become available
]

export function MiningPoolsList() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {miningPools.map((pool, index) => (
          <Card key={index} className="border-primary/20 hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pool.name}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary/80"
                  asChild
                >
                  <a href={pool.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardTitle>
              <CardDescription>Mining Fee: {pool.fee}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Min. Payout:</span>
                  <p className="font-medium">{pool.minPayout}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <p className="font-medium">{pool.location}</p>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Features:</span>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {pool.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <a 
          href="https://miningpoolstats.stream/deccord" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          Find more Pools on MiningPoolStats
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </>
  )
}