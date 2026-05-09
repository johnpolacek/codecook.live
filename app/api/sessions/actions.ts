"use server"

import { Block } from "@/lib/types/session"

export interface SessionData {
  title: string
  commit_shas: string[]
  blocks: Block[]
}

export async function upsertSession(_projectId: string, _sessionData: SessionData, _sessionId?: string) {
  void _projectId
  void _sessionData
  void _sessionId

  return {
    success: false,
    path: null as string | null,
    error: "Sessions are disabled until Clerk and Convex are configured.",
  }
}

export async function checkStaleSession(_sessionId: string) {
  void _sessionId

  return false
}
