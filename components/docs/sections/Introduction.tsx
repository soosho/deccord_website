export function Introduction() {
  return (
    <section id="introduction" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Introduction</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Deccord (DCD) is a fork of Dash, inheriting its proven features including X11 algorithm, 
        InstantSend, PrivateSend, and masternode functionality. It provides a fast, secure, and 
        private digital currency system with robust governance capabilities.
      </p>
      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
      <ul className="space-y-2 text-muted-foreground mb-8">
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          X11 Proof of Work algorithm
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          InstantSend for fast transactions
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          PrivateSend for enhanced privacy
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          Two-tier network with masternodes
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          Decentralized governance system
        </li>
      </ul>

      <div className="rounded-lg border p-4 bg-amber-50/50">
        <p className="text-sm text-amber-800">
          This documentation is a work in progress. Help us improve it by contributing on{' '}
          <a 
            href="https://github.com/Deccord/deccord_website" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  )
}