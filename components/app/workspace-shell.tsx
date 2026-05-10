"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserButton } from "@clerk/nextjs"
import { FolderGit2, LayoutDashboard, UserRound } from "lucide-react"

import LogoIcon from "@/components/graphics/logo-icon"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  {
    href: "/app",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/app/projects",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    href: "/app/profile",
    label: "Profile",
    icon: UserRound,
  },
]

export default function WorkspaceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
          <Link href="/app" className="flex items-center gap-3">
            <LogoIcon />
            <span className="text-lg font-bold">
              CodeCook<span className="font-normal text-muted-foreground">.live</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <Button key={item.href} asChild variant={isActive ? "secondary" : "ghost"} size="sm">
                    <Link href={item.href} className="gap-2">
                      <Icon />
                      {item.label}
                    </Link>
                  </Button>
                )
              })}
            </nav>
            <UserButton />
          </div>
        </div>
      </header>
      <div className="border-b px-6 md:hidden">
        <nav className="mx-auto grid max-w-6xl grid-cols-3 gap-1 py-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center justify-center gap-2 rounded-md text-sm font-medium text-muted-foreground",
                  isActive && "bg-secondary text-secondary-foreground",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
      <main className="px-6 py-10">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  )
}
