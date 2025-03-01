import { CodeBlock } from "../CodeBlock"
import { AlertCircle } from "lucide-react"

export function Installation() {
  return (
    <section id="installation" className="mt-16 scroll-mt-20 border-t pt-16">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Installation</h2>
      
      {/* Requirements Section */}
      <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
      <ul className="space-y-2 text-muted-foreground mb-8">
        {[
          "64-bit Operating System",
          "2GB RAM minimum (4GB recommended)",
          "50GB free disk space for blockchain",
          "Broadband internet connection"
        ].map((req, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {req}
          </li>
        ))}
      </ul>
      
      {/* Installation Steps */}
      <h3 className="text-xl font-semibold mb-4">Installation Steps</h3>
      <div className="space-y-8">
        {/* Windows Installation */}
        <div className="rounded-lg border p-6 bg-card">
          <h4 className="text-lg font-medium mb-4">Windows Installation</h4>
          <ol className="space-y-3 text-muted-foreground">
            {[
              {
                title: "Download the Windows installer",
                detail: "Get the latest version from our official GitHub releases"
              },
              {
                title: "Run the installer package",
                detail: "Double-click the downloaded file and follow the wizard"
              },
              {
                title: "Choose installation directory",
                detail: "Select where you want to install the wallet (default recommended)"
              },
              {
                title: "Initial Setup",
                detail: "Launch the wallet and wait for blockchain synchronization"
              }
            ].map((step, index) => (
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
        </div>
        
        {/* Linux Installation */}
        <div className="rounded-lg border p-6 bg-card">
          <h4 className="text-lg font-medium mb-4">Linux Installation (Ubuntu/Debian)</h4>
          <CodeBlock 
            code={`# Download and extract
wget https://github.com/deccord/deccord/releases/latest/download/deccord-linux.tar.gz
tar -xvf deccord-linux.tar.gz

# Run the wallet
cd deccord-*/
./deccord-qt`}
            language="bash"
          />
          <div className="flex gap-2 mt-4 text-sm text-amber-600 bg-amber-50 p-3 rounded-md">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p>Make sure to make the binary executable with <code className="text-xs bg-white/50 px-1.5 py-0.5 rounded">chmod +x deccord-qt</code> before running</p>
          </div>
        </div>

        {/* macOS Installation */}
        <div className="rounded-lg border p-6 bg-card">
          <h4 className="text-lg font-medium mb-4">macOS Installation</h4>
          <ol className="space-y-3 text-muted-foreground">
            {[
              {
                title: "Download the macOS DMG",
                detail: "Get the latest version for your architecture (Intel/Apple Silicon)"
              },
              {
                title: "Mount the disk image",
                detail: "Double-click the downloaded .dmg file"
              },
              {
                title: "Install the application",
                detail: "Drag Deccord to your Applications folder"
              },
              {
                title: "First Launch",
                detail: "Right-click and choose Open to bypass Gatekeeper on first run"
              }
            ].map((step, index) => (
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
        </div>
      </div>

      {/* Add RPC Configuration section */}
      <h3 className="text-xl font-semibold mb-4 mt-8">RPC Configuration</h3>
      <div className="rounded-lg border p-6 bg-card">
        <p className="text-muted-foreground mb-4">
          Create or edit the configuration file in your Deccord data directory:
        </p>
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
            <p className="font-medium">Configuration File Location:</p>
            <code className="text-xs bg-white/50 px-1.5 py-0.5 rounded block mt-1">
              Windows: %APPDATA%\\Deccord\\deccord.conf
            </code>
            <code className="text-xs bg-white/50 px-1.5 py-0.5 rounded block mt-1">
              Linux: ~/.deccord/deccord.conf
            </code>
            <code className="text-xs bg-white/50 px-1.5 py-0.5 rounded block mt-1">
              macOS: ~/Library/Application Support/Deccord/deccord.conf
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}