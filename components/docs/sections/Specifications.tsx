export function Specifications() {
  const specs = [
    { label: "Block Time", value: "2 minutes" },
    { label: "Max Supply", value: "10.5M DCD" },
    { label: "Algorithm", value: "X11 (PoW)" },
    { label: "Masternode Collateral", value: "4,000 DCD" },
    { label: "Block Reward", value: "5 DCD" }
  ]

  return (
    <section id="specifications" className="mt-16 scroll-mt-20 border-t pt-16">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Technical Specifications</h2>
      <div className="rounded-lg border divide-y">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50">
            <span className="text-muted-foreground">{spec.label}</span>
            <span className="font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}