"use client"

import { useEffect } from "react"
import Link from "next/link"

const docsSections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#introduction", icon: "📖" },
      { title: "Installation", href: "#installation", icon: "💿" },
      { title: "Wallet Setup", href: "#wallet-setup", icon: "🔧" }
    ]
  },
  {
    title: "Network",
    items: [
      { title: "Mining", href: "#mining", icon: "⛏️" },
      { title: "Masternodes", href: "#masternodes", icon: "🖥️" },
      { title: "Block Rewards", href: "#rewards", icon: "💎" }
    ]
  },
  {
    title: "Technical Details",
    items: [
      { title: "Specifications", href: "#specifications", icon: "📊" },
      { title: "Security Features", href: "#security", icon: "🔒" },
      { title: "API Reference", href: "#api", icon: "🔌" }
    ]
  }
]

export function DocsSidebar() {
  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          // Update URL without reload
          window.history.pushState({}, "", target.hash)
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll as EventListener)
      })
    }
  }, [])

  return (
    <aside className="w-full md:w-72 shrink-0 border-r min-h-screen px-6 py-8 bg-gray-50/50">
      <nav className="sticky top-20 space-y-10">
        {docsSections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 text-[0.925rem] text-gray-600 hover:text-primary hover:bg-primary/5 rounded-md transition-colors group"
                  >
                    <span className="opacity-70 group-hover:opacity-100">{item.icon}</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}