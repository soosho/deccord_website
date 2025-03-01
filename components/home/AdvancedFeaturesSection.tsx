import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function AdvancedFeaturesSection() {
  const features = [
    {
      title: "InstantSend",
      description: "Lightning-fast transaction confirmations through masternode consensus",
      points: [
        "Transaction locking within 1-2 seconds",
        "Double-spend protection through masternode quorums",
        "No additional fees for small transactions",
        "Perfect for point-of-sale payments",
        "Automatic for transactions under 0.01 DCD",
        "Secured by masternode network consensus"
      ]
    },
    {
      title: "PrivateSend",
      description: "Enhanced transaction privacy through advanced coin mixing",
      points: [
        "Coin mixing through masternode network",
        "Multiple denominations supported",
        "Up to 16 mixing rounds for maximum privacy",
        "Optional feature for selective use",
        "No transaction history linking",
        "Decentralized mixing process"
      ]
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Features</h2>
          <p className="text-muted-foreground">
            Next-generation transaction capabilities powered by masternodes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-primary/20 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary text-sm">{i + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}