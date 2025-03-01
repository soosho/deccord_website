import { Card, CardContent } from "@/components/ui/card"

export function NetworkMetricsSection() {
  const metrics = [
    { value: "10.5M", label: "Total Supply", icon: "📈" },
    { value: "5 DCD", label: "Block Reward", icon: "🎁" },
    { value: "4,000 DCD", label: "Masternode Collateral", icon: "🔒" },
    { value: "2 min", label: "Block Time", icon: "⚡" }
  ]

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Background elements unchanged... */}

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800">
          Network Metrics
        </h2>
        <p className="text-xl text-muted-foreground">
          Key statistics and parameters of the Deccord network
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg backdrop-blur-sm bg-white/80">
            <CardContent className="p-6">
              <div className="text-center space-y-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <span className="text-2xl mb-2 block">{metric.icon}</span>
                <h3 className="text-3xl font-bold text-primary relative z-10">{metric.value}</h3>
                <p className="text-muted-foreground font-medium">{metric.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Decorative elements unchanged... */}
    </section>
  )
}