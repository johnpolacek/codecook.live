"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-4 text-4xl font-extrabold sm:text-5xl">Make every ship worth sharing.</h2>
        <p className="mb-8 text-balance text-xl text-muted-foreground">
          Capture what changed, explain why it matters, and turn your progress into updates your audience can follow.
        </p>
        <Button asChild size="lg" className="text-lg px-8">
          <Link href="#how-it-works">See How It Works</Link>
        </Button>
      </div>
    </section>
  )
}
