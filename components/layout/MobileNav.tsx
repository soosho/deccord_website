import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { DownloadButton } from "./DownloadModal"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          <Link 
            href="/features" 
            className="block px-2 py-1 text-lg hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link 
            href="/masternodes" 
            className="block px-2 py-1 text-lg hover:text-primary transition-colors"
          >
            Masternodes
          </Link>
          <Link 
            href="/mining" 
            className="block px-2 py-1 text-lg hover:text-primary transition-colors"
          >
            Mining
          </Link>
          <Link 
            href="/docs" 
            className="block px-2 py-1 text-lg hover:text-primary transition-colors"
          >
            Documentation
          </Link>
          <DownloadButton 
            variant="outline" 
            className="mt-4 border-primary text-primary hover:bg-primary hover:text-white" 
          />
        </nav>
      </SheetContent>
    </Sheet>
  )
}