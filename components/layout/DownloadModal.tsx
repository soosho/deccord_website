"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Github, Monitor, Terminal, Package } from "lucide-react"

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
            <a href="https://github.com/Deccord/deccord/releases/download/20.0.1/deccord_setupx64.exe">
              <Monitor className="h-5 w-5 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-semibold">Windows Installer</span>
                <span className="text-xs text-muted-foreground">64-bit setup (recommended)</span>
              </div>
            </a>
          </Button>

          <Button 
            variant="outline" 
            className="flex h-auto items-center justify-start gap-3 p-3 sm:p-4 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com/Deccord/deccord/releases/download/20.0.1/deccord-20.0.1-win64.zip">
              <Package className="h-5 w-5 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-semibold">Windows Portable</span>
                <span className="text-xs text-muted-foreground">64-bit ZIP archive</span>
              </div>
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex h-auto items-center justify-start gap-3 p-3 sm:p-4 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com/Deccord/deccord/releases/download/20.0.1/deccord-20.0.1-x86_64-linux-gnu.tar.gz">
              <Terminal className="h-5 w-5 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-semibold">Linux</span>
                <span className="text-xs text-muted-foreground">x86_64 GNU/Linux</span>
              </div>
            </a>
          </Button>

          <Button 
            variant="outline" 
            className="flex h-auto items-center justify-start gap-3 p-3 sm:p-4 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com/Deccord/deccord/archive/refs/tags/20.0.1.zip">
              <Package className="h-5 w-5 shrink-0" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-semibold">Source Code</span>
                <span className="text-xs text-muted-foreground">ZIP archive</span>
              </div>
            </a>
          </Button>

          <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-muted-foreground">
            <a 
              href="https://github.com/Deccord/deccord/releases"
              className="flex items-center gap-1 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              All releases
            </a>
            <span className="text-xs sm:text-sm">Version: 20.0.1</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}