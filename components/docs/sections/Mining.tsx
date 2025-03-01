import { CodeBlock } from "../CodeBlock"

export function Mining() {
  return (
    <section id="mining" className="mt-16 scroll-mt-20 border-t pt-16">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Mining Guide</h2>
      <h3 className="text-xl font-semibold mb-4">Solo Mining</h3>
      <p className="text-muted-foreground mb-4">Configure your deccord.conf file with:</p>
      <CodeBlock 
        code={`gen=1
genproclimit=-1 # Number of CPU threads to use`}
        language="conf"
      />

      <h3 className="text-xl font-semibold mb-4 mt-8">Pool Mining</h3>
      <p className="text-muted-foreground mb-4">Connect to a mining pool using your preferred X11 mining software:</p>
      <CodeBlock 
        code="ccminer -a x11 -o stratum+tcp://pool-url:port -u wallet_address -p c=DCD"
        language="bash"
      />
    </section>
  )
}