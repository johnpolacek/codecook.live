"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import LogoIcon from "../graphics/logo-icon"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full h-20 border-b border-foreground/10">
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <LogoIcon />
          <span className="font-bold text-xl">
            CodeCook<span className="text-muted-foreground font-normal">.live</span>
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild>
            <Link href="#how-it-works">How It Works</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
