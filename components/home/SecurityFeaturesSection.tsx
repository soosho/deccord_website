import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function SecurityFeaturesSection() {
  const securityFeatures = [
    {
      title: "X11 PoW Security",
      description: "Advanced multi-algorithm mining protection",
      points: [
        "ASIC-resistant mining algorithm",
        "Combination of 11 different hash functions",
        "Energy-efficient mining process",
        "Fair distribution of mining rewards"
      ]
    },
    {
      title: "Masternode Security",
      description: "Robust network infrastructure",
      points: [
        "Quorum-based transaction validation",
        "Collateral requirement of 4,000 DCD",
        "Decentralized network architecture",
        "InstantSend transaction security"
      ]
    },
    {
      title: "Governance Security",
      description: "Decentralized decision making",
      points: [
        "Community-driven proposal system",
        "Transparent voting mechanism",
        "Secure treasury allocation",
        "Protected by superblock rewards"
      ]
    }
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Security Features</h2>
          <p className="text-muted-foreground">
            Built with multiple layers of security to protect your assets
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {securityFeatures.map((feature, index) => (
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