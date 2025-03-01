import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function UseCasesSection() {
  const useCases = [
    {
      title: "Peer-to-Peer Transactions",
      description: "Fast and low-cost transactions for everyday use",
      points: ["Instant payments", "Low fees", "Mobile-friendly"]
    },
    {
      title: "Masternode Operations",
      description: "Earn rewards while securing the network",
      points: ["Passive income", "Network security", "Voting rights"]
    },
    {
      title: "Private Transactions",
      description: "Enhanced privacy for sensitive payments",
      points: ["PrivateSend mixing", "Untraceable transactions", "Optional privacy"]
    },
    {
      title: "Merchant Solutions",
      description: "Accept payments quickly and securely",
      points: ["InstantSend support", "Low processing fees", "No chargebacks"]
    },
    {
      title: "Governance Participation",
      description: "Shape the future of Deccord through voting",
      points: ["Proposal voting", "Budget allocation", "Community decisions"]
    },
    {
      title: "Cross-Border Payments",
      description: "Send money globally without intermediaries",
      points: ["No banking restrictions", "Fast settlements", "Low remittance costs"]
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="text-xl text-muted-foreground">
            Discover the many ways to utilize Deccord in everyday scenarios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader>
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}