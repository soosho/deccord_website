// components/home/RoadmapSection.tsx
import { Card, CardContent } from "@/components/ui/card"

const roadmapData = [
  {
    phase: "Phase 1: Genesis",
    date: "March 2025",
    items: [
      "Launch the Deccord genesis block",
      "Distribute premine coins to developers",
      "Launch mining network",
      "Release wallet software"
    ]
  },
  {
    phase: "Phase 2: Full Mainnet",
    date: "Q2 2025",
    items: [
      "Enable full mainnet functionality",
      "Launch masternode support (4,000 DCD)",
      "Setup governance system",
      "Initialize superblock rewards"
    ]
  },
  {
    phase: "Phase 3: Community Growth",
    date: "Q3 2025",
    items: [
      "Launch community incentive programs",
      "Implement staking rewards",
      "Masternode operator benefits",
      "Expand partnerships"
    ]
  },
  {
    phase: "Phase 4: Advanced Features",
    date: "Q4 2025",
    items: [
      "Enhanced masternode features",
      "DeFi platform integration",
      "Smart contract capabilities",
      "Cross-chain solutions"
    ]
  }
]

export function RoadmapSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Development Roadmap</h2>
          <p className="text-muted-foreground">
            Our journey to revolutionize digital currency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapData.map((phase, index) => (
            <Card 
              key={index} 
              className="relative border-primary/20 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <CardContent className="pt-6">
                <div className="text-sm text-primary font-semibold mb-2">{phase.date}</div>
                <h3 className="font-bold mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
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