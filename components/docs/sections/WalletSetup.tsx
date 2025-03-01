import { CodeBlock } from "../CodeBlock"
import { AlertCircle } from "lucide-react"

export function WalletSetup() {
  const steps = [
    {
      title: "Launch and Sync",
      detail: "Open Deccord wallet and wait for blockchain synchronization (may take several hours)"
    },
    {
      title: "Encrypt Your Wallet",
      detail: "Go to Settings → Encrypt Wallet and create a strong passphrase"
    },
    {
      title: "Backup wallet.dat",
      detail: "Go to File → Backup Wallet and save to multiple secure locations"
    },
    {
      title: "Configure Settings",
      detail: "Set up your wallet preferences and network connections"
    }
  ]

  return (
    <section id="wallet-setup" className="mt-16 scroll-mt-20 border-t pt-16">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Wallet Setup</h2>
      
      {/* Initial Steps */}
      <h3 className="text-xl font-semibold mb-4">Initial Configuration</h3>
      <ol className="space-y-3 text-muted-foreground mb-8">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0 mt-0.5">
              {index + 1}
            </span>
            <div>
              <p className="font-medium text-foreground">{step.title}</p>
              <p className="text-sm">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Configuration Section */}
      <h3 className="text-xl font-semibold mb-4">Configuration File</h3>
      <div className="rounded-lg border p-6 bg-card">
        <CodeBlock 
          code={`
rpcuser=your_rpc_username
rpcpassword=your_rpc_password
rpcallowip=127.0.0.1
rpcport=22945
server=1
listen=1
txindex=1
daemon=1
logtimestamps=1
maxconnections=256`}
          language="conf"
          filename="deccord.conf"
        />
        
        <div className="flex gap-2 mt-4 text-sm text-amber-600 bg-amber-50 p-3 rounded-md">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <div>
            <p className="font-medium">Important Security Note:</p>
            <p className="mt-1">Make sure to use a strong, unique password for rpcpassword. This configuration file should be kept secure and not shared.</p>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 bg-card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              ↓
            </span>
            Receiving Funds
          </h3>
          <ol className="space-y-3">
            {[
              "Go to the \"Receive\" tab",
              "Click \"Generate New Address\"",
              "Share the generated address to receive payments"
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-lg border p-6 bg-card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              ↑
            </span>
            Sending Funds
          </h3>
          <ol className="space-y-3">
            {[
              "Navigate to the \"Send\" tab",
              "Enter recipient's address and amount",
              "Review transaction details",
              "Click \"Send\" and confirm with your passphrase"
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}