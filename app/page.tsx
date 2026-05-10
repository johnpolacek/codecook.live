import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import Header from "@/components/layout/header"
import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import HowItWorks from "@/components/home/how-it-works"
import CallToAction from "@/components/home/call-to-action"
import Footer from "@/components/layout/footer"

export default async function LandingPage() {
  const { userId } = await auth()

  if (userId) {
    redirect("/app")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
