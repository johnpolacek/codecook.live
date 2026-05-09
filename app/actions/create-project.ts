"use server"

import type { GithubRepo } from "@/types/github"
import { toSlug } from "@/lib/utils/slug"

export async function createProject(_username: string, repo: GithubRepo) {
  const slug = toSlug(repo.name)

  if (!slug || !/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(slug)) {
    return { project: null, error: "Invalid project name format" }
  }

  return {
    project: null,
    error: "Projects are disabled until Clerk and Convex are configured.",
  }
}
