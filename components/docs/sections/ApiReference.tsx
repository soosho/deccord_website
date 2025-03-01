import { CodeBlock } from "../CodeBlock"

export function ApiReference() {
  const apiEndpoints = [
    { endpoint: "/api/v1/block", desc: "Get block information" },
    { endpoint: "/api/v1/tx", desc: "Get transaction details" },
    { endpoint: "/api/v1/address", desc: "Get address balance" },
    { endpoint: "/api/v1/masternodes", desc: "List active masternodes" }
  ]

  return (
    <section id="api" className="mt-16 scroll-mt-20 border-t pt-16">
      <h2 className="text-3xl font-bold tracking-tight mb-6">API Reference</h2>
      
      <div className="rounded-lg border p-6 bg-card mb-8">
        <h3 className="text-xl font-semibold mb-4">RPC Commands</h3>
        <CodeBlock 
          code={`deccord-cli getinfo
deccord-cli masternode status
deccord-cli getblockchaininfo
deccord-cli getnetworkinfo`}
          language="bash"
        />
      </div>
      
      <div className="rounded-lg border p-6 bg-card">
        <h3 className="text-xl font-semibold mb-4">Common API Endpoints</h3>
        <div className="space-y-4">
          {apiEndpoints.map((api, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <code className="text-sm font-mono text-primary bg-primary/5 px-3 py-1.5 rounded-md w-fit">
                {api.endpoint}
              </code>
              <p className="text-muted-foreground text-sm ml-3 border-l-2 border-primary/20 pl-4">
                {api.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}