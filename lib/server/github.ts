import { clerkClient, currentUser } from "@clerk/nextjs/server"

import {
  getGitHubRepositoriesWithToken,
  type GitHubRepositoryAccess,
  type GitHubOAuthToken,
} from "@/lib/server/github-repositories"

export async function getAccessibleGitHubRepositories(): Promise<GitHubRepositoryAccess> {
  const user = await currentUser()

  if (!user) {
    return {
      status: "signed-out",
      repositories: [],
      message: "Sign in to connect repositories.",
    }
  }

  try {
    const tokenResult = await getGitHubOAuthToken(user.id)

    if (!tokenResult) {
      return {
        status: "missing-token",
        repositories: [],
        message: "Sign in with GitHub to choose repositories.",
      }
    }

    return await getGitHubRepositoriesWithToken(tokenResult)
  } catch {
    return {
      status: "error",
      repositories: [],
      message: "GitHub repositories could not be loaded.",
    }
  }
}

async function getGitHubOAuthToken(userId: string): Promise<GitHubOAuthToken | null> {
  const client = await clerkClient()
  const tokens = await client.users.getUserOauthAccessToken(userId, "github")
  const token = tokens.data[0]

  if (!token) {
    return null
  }

  return {
    token: token.token,
    scopes: token.scopes || [],
  }
}
