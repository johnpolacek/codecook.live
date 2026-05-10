import { currentUser } from "@clerk/nextjs/server"

import { readCollection, replaceCollection, type JsonRecord } from "@/lib/server/flat-file-db"
import { getGitHubAppInstallation, listGitHubInstallationRepositories, type GitHubAppRepository } from "@/lib/server/github-app"

const REPOSITORY_CONNECTIONS_COLLECTION = "repository_connections"

export type RepositoryConnection = JsonRecord & {
  clerkUserId: string
  installationId: number
  accountLogin: string
  accountType: string
  repositorySelection: string
  settingsUrl: string
  createdAt: string
  updatedAt: string
}

export type RepositoryConnectionState =
  | {
      status: "missing-profile"
      connection: null
      repositories: []
      message: string
    }
  | {
      status: "not-connected"
      connection: null
      repositories: []
      message: string
    }
  | {
      status: "error"
      connection: RepositoryConnection | null
      repositories: []
      message: string
    }
  | {
      status: "connected"
      connection: RepositoryConnection
      repositories: GitHubAppRepository[]
      message: string
    }

export async function getCurrentRepositoryConnection() {
  const user = await currentUser()

  if (!user) {
    return null
  }

  const connections = await readCollection<RepositoryConnection>(REPOSITORY_CONNECTIONS_COLLECTION)

  return connections.find((connection) => connection.clerkUserId === user.id) || null
}

export async function saveCurrentRepositoryConnection(installationId: number) {
  const user = await currentUser()

  if (!user) {
    throw new Error("You need to sign in before connecting repositories.")
  }

  const installation = await getGitHubAppInstallation(installationId)
  const now = new Date().toISOString()
  let savedConnection: RepositoryConnection | null = null

  await replaceCollection<RepositoryConnection>(REPOSITORY_CONNECTIONS_COLLECTION, (connections) => {
    const existingConnection = connections.find((connection) => connection.clerkUserId === user.id)

    savedConnection = {
      clerkUserId: user.id,
      installationId: installation.id,
      accountLogin: installation.account?.login || "",
      accountType: installation.account?.type || "",
      repositorySelection: installation.repository_selection || "",
      settingsUrl: installation.html_url || "",
      createdAt: existingConnection?.createdAt || now,
      updatedAt: now,
    }

    if (existingConnection) {
      return connections.map((connection) =>
        connection.clerkUserId === user.id ? savedConnection as RepositoryConnection : connection,
      )
    }

    return [...connections, savedConnection]
  })

  return savedConnection
}

export async function getCurrentRepositoryConnectionState(hasProfile: boolean): Promise<RepositoryConnectionState> {
  if (!hasProfile) {
    return {
      status: "missing-profile",
      connection: null,
      repositories: [],
      message: "Create your creator profile before connecting a repository.",
    }
  }

  const connection = await getCurrentRepositoryConnection()

  if (!connection) {
    return {
      status: "not-connected",
      connection: null,
      repositories: [],
      message: "Choose the repositories CodeCook can read.",
    }
  }

  try {
    const repositories = await listGitHubInstallationRepositories(connection.installationId)

    return {
      status: "connected",
      connection,
      repositories,
      message: repositories.length > 0 ? "Repositories are connected." : "No repositories are available for this installation.",
    }
  } catch (error) {
    return {
      status: "error",
      connection,
      repositories: [],
      message: error instanceof Error ? error.message : "Repositories could not be loaded.",
    }
  }
}
