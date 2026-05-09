"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-4 text-4xl font-extrabold sm:text-5xl">The next foundation is the workspace.</h2>
        <p className="mb-8 text-balance text-xl text-muted-foreground">
          Clerk will own identity. Convex will own projects, sessions, realtime state, and the commit-to-content loop.
        </p>
        <Button asChild size="lg" className="text-lg px-8">
          <Link href="#product">Review the Product Loop</Link>
        </Button>
      </div>
    </section>
  )
}
