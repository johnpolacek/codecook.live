"use server"

import type { Profile } from "@/lib/types/user"

export async function signOut() {
  return
}

export async function getAuthUser() {
  return {
    user: null as { id: string; user_metadata: { avatar_url?: string; name?: string } } | null,
    profile: null as Profile | null,
  }
}
