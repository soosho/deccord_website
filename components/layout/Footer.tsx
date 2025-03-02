// components/layout/Footer.tsx
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 mt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Deccord</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li><Link href="/roadmap">Roadmap</Link></li>
              <li><Link href="/whitepaper">Whitepaper</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li><Link href="/features/privatesend">PrivateSend</Link></li>
              <li><Link href="/features/instantsend">InstantSend</Link></li>
              <li><Link href="/masternodes">Masternodes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/mining">Mining Guide</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="https://discord.gg/rhfYv7r9Q4">Discord</Link></li>
              <li><Link href="https://github.com/deccord">Github</Link></li>
              <li><Link href="https://x.com/Deccord_">Twitter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
