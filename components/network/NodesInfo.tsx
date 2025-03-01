'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clipboard, Check } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export function NodesInfo() {
  const [copiedNode, setCopiedNode] = useState<string | null>(null)
  
  const nodes = {
    domains: [
      "node1.deccord.com",
      "node2.deccord.com",
      "sg1.inodes.one",
      "sg2.inodes.one",
      "sg3.inodes.one",
      "sg4.inodes.one",
      "sg5.inodes.one",
      "sg6.inodes.one"
    ],
    ips: [
      "154.26.132.24",
      "62.72.44.4",
      "62.72.44.5",
      "62.72.44.177",
      "62.72.45.141",
      "62.72.45.200"
    ]
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(`addnode=${text}`)
      setCopiedNode(text)
      toast.success('Node command copied to clipboard')
      setTimeout(() => setCopiedNode(null), 2000) // Reset after 2 seconds
    } catch {
      toast.error('Failed to copy to clipboard')
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Official Nodes</h2>
          <p className="text-xl text-muted-foreground">
            Connect to these trusted nodes to strengthen the network
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Domain Nodes</CardTitle>
              <CardDescription>Connect using domain names</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {nodes.domains.map((domain, index) => (
                <div key={index} className="flex justify-between items-center p-2 hover:bg-muted/50 rounded-md">
                  <code className="text-sm font-mono">{domain}</code>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleCopy(domain)}
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                  >
                    {copiedNode === domain ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Clipboard className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IP Nodes</CardTitle>
              <CardDescription>Connect using IP addresses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {nodes.ips.map((ip, index) => (
                <div key={index} className="flex justify-between items-center p-2 hover:bg-muted/50 rounded-md">
                  <code className="text-sm font-mono">{ip}</code>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleCopy(ip)}
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                  >
                    {copiedNode === ip ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Clipboard className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.inodes.one" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
          >
            More nodes available
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}