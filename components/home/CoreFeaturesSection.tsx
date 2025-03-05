import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function CoreFeaturesSection() {
  const features = [
    {
      title: "Decentralized Governance",
      description: "Community-driven decision-making through masternode voting system with 10% of block rewards funding development.",
      points: [
        "Masternode voting on key proposals",
        "Community-driven funding decisions",
        "Transparent development process"
      ]
    },
    {
      title: "Fast Transactions",
      description: "2-minute block time ensures quick confirmations with minimal fees, perfect for everyday transactions.",
      points: [
        "Quick 2-minute block confirmations",
        "Low transaction fees",
        "Efficient payment processing"
      ]
    },
    {
      title: "X11 Proof of Work",
      description: "Advanced mining algorithm combining 11 different cryptographic functions for enhanced security.",
      points: [
        "Energy-efficient mining",
        "High-performance hashing",
        "Multi-layer security"
      ]
    },
    {
      title: "Masternode Network",
      description: "Run a masternode with 4,000 DCD or EvoNode with 16,000 DCD to earn rewards and secure the network.",
      points: [
        "13.5% block reward share",
        "10 block activation time",
        "Network governance rights"
      ]
    },
    {
      title: "PrivateSend",
      description: "Enhanced privacy through coin-mixing process, making transactions untraceable while maintaining network transparency.",
      points: [
        "Anonymous transactions",
        "Coin mixing protocol",
        "Optional privacy features"
      ]
    },
    {
      title: "InstantSend",
      description: "Lock transactions instantly through masternode consensus for immediate and secure payments.",
      points: [
        "Instant confirmations",
        "Double-spend protection",
        "Masternode secured"
      ]
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Core Features</h2>
        <p className="text-xl text-muted-foreground">
          Built with advanced technology for a secure and efficient future
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="border-primary/20 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="mt-2">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {feature.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {pointIndex + 1}
                  </div>
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}