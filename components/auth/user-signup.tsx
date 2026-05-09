"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { signInWithGitHub } from "./actions"
import { useState } from "react"
import LogoIcon from "../graphics/logo-icon"

export function UserSignup() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <Card className="sm:p-8">
      <CardHeader className="text-center">
        <CardTitle className="flex flex-col gap-2 items-center justify-center">
          <div className="flex items-center justify-center pb-4 scale-150">
            <LogoIcon />
          </div>
          <h1 className="text-3xl font-extrabold text-center">
            Join CodeCook<span className="text-muted-foreground font-normal">.live</span>
          </h1>
        </CardTitle>
        <CardDescription>Turn your commits into content and grow your audience while you ship.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && <p className="text-red-500">{error}</p>}
        <Button
          size="lg"
          className="w-full"
          disabled={isLoading}
          onClick={async () => {
            setIsLoading(true)
            try {
              const url = await signInWithGitHub()
              if (url) {
                window.location.href = url
              }
            } catch (error) {
              console.error("Failed to sign up:", error)
              setError("Failed to sign up. Please try again.")
              setIsLoading(false)
            }
          }}
        >
          {!isLoading && <GitHubLogoIcon className="mr-2 h-5 w-5" />}
          {isLoading ? "Connecting to GitHub…" : "Continue with GitHub"}
        </Button>
      </CardContent>
    </Card>
  )
}
