"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Github, Monitor, Terminal, Package, Apple } from "lucide-react"

interface DownloadButtonProps {
  className?: string
  variant?: "default" | "outline"
}

export function DownloadButton({ className, variant = "outline" }: DownloadButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          <Download className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Download Wallet</span>
          <span className="sm:hidden">Download</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[425px] p-4 sm:p-6">
        <DialogHeader className="space-y-2 text-left sm:text-center pb-4">
          <DialogTitle className="text-xl sm:text-2xl">Download Deccord Wallet</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Select your platform to download the latest version
          </p>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          <Button 
            variant="outline" 
            className="flex h-auto items-center justify-start gap-3 p-3 sm:p-4 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com/deccord/deccord/releases/latest/download/deccord-windows.zip">
              <Monitor className="h-5 w-5 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-semibold">Windows</span>
                <span className="text-xs text-muted-foreground">64-bit installer</span>
              </div>
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex h-auto items-center justify-start gap-3 p-3 sm:p-4 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com/deccord/deccord/releases/latest/download/deccord-linux.tar.gz">
              <Terminal className="h-5 w-5 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-semibold">Linux</span>
                <span className="text-xs text-muted-foreground">Ubuntu/Debian</span>
              </div>
            </a>
          </Button>

          <Button 
            variant="outline" 
            className="flex h-auto items-center justify-start gap-3 p-3 sm:p-4 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com/deccord/deccord/releases/latest/download/deccord-macos.dmg">
              <Apple className="h-5 w-5 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-semibold">macOS</span>
                <span className="text-xs text-muted-foreground">Intel & Apple Silicon</span>
              </div>
            </a>
          </Button>

          <Button 
            variant="outline" 
            className="flex h-auto items-center justify-start gap-3 p-3 sm:p-4 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com/deccord/deccord/releases/latest">
              <Package className="h-5 w-5 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-semibold">Other Downloads</span>
                <span className="text-xs text-muted-foreground">Source code & other platforms</span>
              </div>
            </a>
          </Button>

          <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-muted-foreground">
            <a 
              href="https://github.com/deccord/deccord/releases"
              className="flex items-center gap-1 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              All releases
            </a>
            <span className="text-xs sm:text-sm">Version: 1.0.0</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}