import { CodeBlock } from "../CodeBlock"

export function Masternodes() {
  return (
    <section id="masternodes" className="mt-16 scroll-mt-20 border-t pt-16">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Masternode Setup</h2>
      <h3 className="text-xl font-semibold mb-4">Requirements</h3>
      <ul className="space-y-2 text-muted-foreground mb-8">
        {[
          "4,000 DCD collateral",
          "Dedicated IP address",
          "Server running 24/7",
          "Storage for blockchain"
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-4">Setup Process</h3>
      <ol className="space-y-2 text-muted-foreground mb-8">
        {[
          "Prepare the collateral transaction",
          "Configure your masternode server",
          "Edit masternode configuration",
          "Start your masternode"
        ].map((step, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <CodeBlock 
        code={`masternode=1
masternodeprivkey=YOUR_MASTERNODE_KEY
externalip=YOUR_SERVER_IP`}
        language="conf"
        filename="masternode.conf"
      />
    </section>
  )
}