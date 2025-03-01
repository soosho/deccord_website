import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function NetworkInfo() {
  const technicalInfo = {
    general: [
      { label: "Coin Name", value: "Deccord" },
      { label: "Ticker Symbol", value: "DCD" },
      { label: "Base Unit", value: "Decca" },
      { label: "Address Prefix", value: "D (mainnet), T (testnet)" }
    ],
    network: [
      { label: "RPC Port", value: "22945" },
      { label: "P2P Port", value: "22946" },
      { label: "Algorithm", value: "X11 Proof of Work" }
    ],
    timing: [
      { label: "Block Time", value: "2 minutes" },
      { label: "Target Timespan", value: "60 minutes" },
      { label: "Transaction Confirmations", value: "6 blocks" },
      { label: "Coinbase Maturity", value: "7 blocks + 1 confirmation" }
    ],
    masternodes: [
      { label: "Regular Masternode", value: "4,000 DCD" },
      { label: "EvoNode", value: "16,000 DCD" },
      { label: "Masternode Confirmations", value: "10 blocks" },
      { label: "Masternode Reward", value: "15% of block reward" }
    ]
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Network Information</h2>
          <p className="text-xl text-muted-foreground">
            Technical specifications of the Deccord network
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {technicalInfo.general.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {technicalInfo.network.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Block Timing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {technicalInfo.timing.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Masternode Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {technicalInfo.masternodes.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}