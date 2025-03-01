import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CommunitySection() {
  const socialLinks = [
    {
      name: "Discord",
      href: "https://discord.gg/DNGUuJBt2Y",
      icon: "/icons/social/discord.svg"
    },
    {
      name: "Github",
      href: "https://github.com/deccord",
      icon: "/icons/social/github.svg"
    },
    {
      name: "Twitter",
      href: "https://x.com/Deccord_",
      icon: "/icons/social/twitter.svg"
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl text-muted-foreground">
          Connect with other members and stay updated
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Image 
                src={link.icon} 
                alt={link.name} 
                width={24} 
                height={24} 
                className="mr-2" 
              />
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  )
}