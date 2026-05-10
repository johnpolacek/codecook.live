import { currentUser } from "@clerk/nextjs/server"

import { readCollection, replaceCollection, type JsonRecord } from "@/lib/server/flat-file-db"
import { toSlug } from "@/lib/utils/slug"

const PROFILES_COLLECTION = "profiles"

const RESERVED_USERNAMES = new Set([
  "admin",
  "api",
  "app",
  "auth",
  "blog",
  "dashboard",
  "help",
  "login",
  "logout",
  "me",
  "new",
  "profile",
  "settings",
  "sign-in",
  "sign-up",
  "support",
  "www",
])

export type CreatorProfile = JsonRecord & {
  clerkUserId: string
  username: string
  displayName: string
  createdAt: string
  updatedAt: string
}

export type ProfileInput = {
  username: string
  displayName: string
}

export async function getCurrentProfile() {
  const user = await currentUser()

  if (!user) {
    return null
  }

  return getProfileByClerkUserId(user.id)
}

export async function getProfileByClerkUserId(clerkUserId: string) {
  const profiles = await readCollection<CreatorProfile>(PROFILES_COLLECTION)

  return profiles.find((profile) => profile.clerkUserId === clerkUserId) || null
}

export async function upsertCurrentProfile(input: ProfileInput) {
  const user = await currentUser()

  if (!user) {
    throw new Error("You need to sign in before creating a profile.")
  }

  const displayName = normalizeDisplayName(input.displayName)
  const username = normalizeUsername(input.username)
  const now = new Date().toISOString()
  let savedProfile: CreatorProfile | null = null

  await replaceCollection<CreatorProfile>(PROFILES_COLLECTION, (profiles) => {
    const existingProfile = profiles.find((profile) => profile.clerkUserId === user.id)
    const usernameOwner = profiles.find((profile) => profile.username === username)

    if (usernameOwner && usernameOwner.clerkUserId !== user.id) {
      throw new Error("That username is already taken.")
    }

    if (existingProfile) {
      savedProfile = {
        ...existingProfile,
        username,
        displayName,
        updatedAt: now,
      }

      return profiles.map((profile) => (profile.clerkUserId === user.id ? savedProfile as CreatorProfile : profile))
    }

    savedProfile = {
      clerkUserId: user.id,
      username,
      displayName,
      createdAt: now,
      updatedAt: now,
    }

    return [...profiles, savedProfile]
  })

  return savedProfile
}

function normalizeDisplayName(displayName: string) {
  const normalized = displayName.trim().replace(/\s+/g, " ")

  if (normalized.length < 2) {
    throw new Error("Display name must be at least 2 characters.")
  }

  if (normalized.length > 80) {
    throw new Error("Display name must be 80 characters or less.")
  }

  return normalized
}

function normalizeUsername(username: string) {
  const normalized = toSlug(username)

  if (normalized.length < 3) {
    throw new Error("Username must be at least 3 characters.")
  }

  if (normalized.length > 32) {
    throw new Error("Username must be 32 characters or less.")
  }

  if (RESERVED_USERNAMES.has(normalized)) {
    throw new Error("That username is reserved.")
  }

  return normalized
}
