"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="px-6 py-20 text-center sm:py-28">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-balance text-5xl font-extrabold tracking-normal sm:text-6xl md:text-7xl">Turn Your Commits Into Content</h1>
        <p className="mx-auto mt-6 max-w-3xl text-balance text-xl leading-8 text-muted-foreground">
          CodeCook.live is your platform for growing your audience while you ship.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild className="h-auto px-8 py-4 text-lg">
            <Link href="#product">
              See the Product <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
