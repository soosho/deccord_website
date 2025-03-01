import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { DocsSidebar } from "@/components/docs/DocsSidebar"
import { DocsContent } from "@/components/docs/DocsContent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Learn how to use and interact with the Deccord network, including wallet setup, mining, and masternodes.",
}

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <div className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto text-center py-12 px-4">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn how to use and interact with the Deccord network
            </p>
          </div>
          <DocsContent />
        </div>
      </div>
      <Footer />
    </>
  )
}