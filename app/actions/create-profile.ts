"use server"

import { RESERVED_USERNAMES } from "@/lib/constants/reserved-usernames"

export async function createProfile(username: string) {
  if (!username.match(/^[a-z0-9_]+$/)) {
    return { error: "Username can only contain lowercase letters, numbers, and underscores" }
  }

  if (RESERVED_USERNAMES.includes(username)) {
    return { error: "This username is reserved" }
  }

  return { error: "Profiles are disabled until Clerk and Convex are configured." }
}
