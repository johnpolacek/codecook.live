"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronsRight } from "lucide-react"
import { BoltIcon } from "@heroicons/react/24/solid"

export default function Hero() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">Turn Your Commits Into Content</h1>
        <p className="mt-4 text-xl text-muted-foreground text-balance">
          CodeCook.live is your platform for turning your commits into content. Grow your audience while you ship.
        </p>
        <div className="mt-8">
          <Link href="#product">
            <Button className="text-xl px-12 py-4 h-auto">
              <BoltIcon className="h-5 w-5 mr-2 scale-[2] text-blue-500" /> See the Product <ChevronsRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
