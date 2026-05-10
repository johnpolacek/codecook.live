"use server"

import { revalidatePath } from "next/cache"

import { upsertCurrentProfile } from "@/lib/server/profiles"

export type ProfileActionState = {
  error?: string
}

export async function saveProfileAction(_previousState: ProfileActionState, formData: FormData) {
  try {
    await upsertCurrentProfile({
      displayName: String(formData.get("displayName") || ""),
      username: String(formData.get("username") || ""),
    })

    revalidatePath("/app")

    return {}
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Profile could not be saved.",
    }
  }
}
