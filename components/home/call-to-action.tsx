"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-4">Ready to Turn Commits Into Content?</h2>
        <p className="text-xl text-muted-foreground mb-8 text-balance">Start a live shipping session, capture what changed, and leave with content ready to share.</p>
        <Button asChild size="lg" className="text-lg px-8">
          <Link href="#product">Review the Product Direction</Link>
        </Button>
      </div>
    </section>
  )
}
