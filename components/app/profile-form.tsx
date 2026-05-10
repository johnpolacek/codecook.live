"use client"

import { useActionState } from "react"

import { saveProfileAction, type ProfileActionState } from "@/app/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type ProfileFormProps = {
  defaultDisplayName?: string
  defaultUsername?: string
}

const initialState: ProfileActionState = {}

export default function ProfileForm({ defaultDisplayName = "", defaultUsername = "" }: ProfileFormProps) {
  const [state, formAction, isPending] = useActionState(saveProfileAction, initialState)

  return (
    <form action={formAction} className="max-w-xl space-y-5">
      <div className="space-y-2">
        <Label htmlFor="displayName">Display name</Label>
        <Input id="displayName" name="displayName" defaultValue={defaultDisplayName} required minLength={2} maxLength={80} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          defaultValue={defaultUsername}
          required
          minLength={3}
          maxLength={32}
          pattern="[a-zA-Z0-9][a-zA-Z0-9-]*"
        />
        <p className="text-sm text-muted-foreground">Used for public links when you share work.</p>
      </div>
      {state.error ? <p className="text-sm text-destructive">{state.error}</p> : null}
      <Button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Save Profile"}
      </Button>
    </form>
  )
}
