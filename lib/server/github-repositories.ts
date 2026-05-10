export type GitHubRepository = {
  id: number
  name: string
  fullName: string
  owner: string
  private: boolean
  defaultBranch: string
  htmlUrl: string
  updatedAt: string
}

export type GitHubRepositoryAccess =
  | {
      status: "signed-out"
      repositories: []
      message: string
    }
  | {
      status: "missing-token"
      repositories: []
      message: string
    }
  | {
      status: "insufficient-scope"
      repositories: []
      grantedScopes: string[]
      message: string
    }
  | {
      status: "empty"
      repositories: []
      grantedScopes: string[]
      message: string
    }
  | {
      status: "error"
      repositories: []
      grantedScopes?: string[]
      message: string
    }
  | {
      status: "ready"
      repositories: GitHubRepository[]
      grantedScopes: string[]
      message: string
    }

export type GitHubOAuthToken = {
  token: string
  scopes: string[]
}

type GitHubRepositoryResponse = {
  id: number
  name: string
  full_name: string
  private: boolean
  default_branch: string
  html_url: string
  updated_at: string
  owner: {
    login: string
  }
}

const GITHUB_REPOSITORIES_URL =
  "https://api.github.com/user/repos?per_page=100&sort=updated&affiliation=owner,collaborator,organization_member"

export async function getGitHubRepositoriesWithToken(
  tokenResult: GitHubOAuthToken,
): Promise<GitHubRepositoryAccess> {
  if (!hasRepositoryReadScope(tokenResult.scopes)) {
    return {
      status: "insufficient-scope",
      repositories: [],
      grantedScopes: tokenResult.scopes,
      message: "GitHub needs repository read access before repositories can be listed.",
    }
  }

  const response = await fetch(GITHUB_REPOSITORIES_URL, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${tokenResult.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
    cache: "no-store",
  })

  if (!response.ok) {
    return {
      status: "error",
      repositories: [],
      grantedScopes: tokenResult.scopes,
      message: getGitHubRepositoryErrorMessage(response.status),
    }
  }

  const repositories = ((await response.json()) as GitHubRepositoryResponse[]).map(mapGitHubRepository)

  if (repositories.length === 0) {
    return {
      status: "empty",
      repositories: [],
      grantedScopes: tokenResult.scopes,
      message: "No repositories are available for this GitHub account.",
    }
  }

  return {
    status: "ready",
    repositories,
    grantedScopes: tokenResult.scopes,
    message: "Repositories are ready for project setup.",
  }
}

export function hasRepositoryReadScope(scopes: string[]) {
  return scopes.includes("repo") || scopes.includes("public_repo")
}

export function mapGitHubRepository(repository: GitHubRepositoryResponse): GitHubRepository {
  return {
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    owner: repository.owner.login,
    private: repository.private,
    defaultBranch: repository.default_branch,
    htmlUrl: repository.html_url,
    updatedAt: repository.updated_at,
  }
}

function getGitHubRepositoryErrorMessage(status: number) {
  if (status === 401) {
    return "GitHub access expired. Sign in with GitHub again."
  }

  if (status === 403) {
    return "GitHub repositories could not be loaded. Check repository permissions and try again."
  }

  return `GitHub repositories could not be loaded (${status}).`
}
