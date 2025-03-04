import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const miningPools = [
  {
    name: "ALTCOINSPOOL",
    url: "https://altcoinspool.com",
    fee: "1%",
    minPayout: "No minimum",
    features: [
      "PPLNS",
      "Real-time Statistics",
      "15 minutes payout time frame"
    ],
    location: "Global",
    hashrate: "Variable",
    stratums: [
      {
        name: "Global",
        connection: "connect.altcoinspool.com:6840"
      }
      // Example of multiple stratums:
      // {
      //   name: "US",
      //   connection: "us.altcoinspool.com:6840"
      // }
    ]
  },
  {
    name: "MINORPOOL",
    url: "https://minorpool.com",
    fee: "1%",
    minPayout: "0.001",
    features: [
      "PPLNS",
      "Multiple difficulty options",
      "Variable difficulty support"
    ],
    location: "Global",
    hashrate: "Variable",
    stratums: [
      {
        name: "Low Diff (0.1)",
        connection: "stratum+tcp://minorpool.com:7000"
      },
      {
        name: "High Diff (400)",
        connection: "stratum+tcp://minorpool.com:7001"
      }
    ]
  }
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
              <div className="bg-muted p-3 rounded-md">
                <span className="text-sm font-semibold block mb-2">Stratum:</span>
                <Tabs defaultValue={pool.stratums[0].name} className="w-full">
                  <TabsList className="w-full">
                    {pool.stratums.map((stratum) => (
                      <TabsTrigger 
                        key={stratum.name} 
                        value={stratum.name}
                        className="flex-1"
                      >
                        {stratum.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {pool.stratums.map((stratum) => (
                    <TabsContent key={stratum.name} value={stratum.name}>
                      <code className="text-sm break-all bg-background p-2 rounded block">
                        {stratum.connection}
                      </code>
                    </TabsContent>
                  ))}
                </Tabs>
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