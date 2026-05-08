"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"
import { ChevronsRight } from "lucide-react"
import { BoltIcon } from "@heroicons/react/24/solid"

export default function Hero() {
  const [profile, setProfile] = useState<{ username: string } | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const { data } = await supabase.from("profiles").select("username").eq("id", session.user.id).single()
        setProfile(data)
      }
    })
  }, [])

  return (
    <section className="py-20 px-6 text-center">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">Turn Your Commits Into Content</h1>
        <p className="mt-4 text-xl text-muted-foreground text-balance">
          CodeCook.live is your platform for turning your commits into content. Grow your audience while you ship.
        </p>
        <div className="mt-8">
          {profile ? (
            <Link href={`/${profile.username}`}>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-4 h-auto" size="lg">
                Go to Dashboard <ChevronsRight className="h-8 w-8 ml-1 scale-150" />
              </Button>
            </Link>
          ) : (
            <Link href="/signup">
              <Button className="text-xl px-12 py-4 h-auto">
                <BoltIcon className="h-5 w-5 mr-2 scale-[2] text-blue-500" /> Start Shipping
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
