"use server"

import type { BlueskyCredentials } from "@/lib/bluesky/client"

export async function connectBlueskyAccount(_identifier: string, _password: string) {
  void _identifier
  void _password

  return {
    success: false,
    error: "Bluesky connections are disabled until Clerk and Convex are configured.",
  }
}

export async function getBlueskyConnection(): Promise<BlueskyCredentials | null> {
  return null
}

export async function disconnectBlueskyAccount() {
  return {
    success: false,
    error: "Bluesky connections are disabled until Clerk and Convex are configured.",
  }
}
