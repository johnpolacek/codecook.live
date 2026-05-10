import { createPrivateKey, createSign } from "node:crypto"

export type GitHubAppConfig = {
  appId: string
  appSlug: string
  privateKey: string
}

export type GitHubAppRepository = {
  id: number
  name: string
  fullName: string
  owner: string
  private: boolean
  visibility: "public" | "private" | "internal"
  defaultBranch: string
  htmlUrl: string
  updatedAt: string
}

type GitHubInstallation = {
  id: number
  html_url?: string
  account?: {
    login?: string
    type?: string
  }
  repository_selection?: string
}

type GitHubInstallationToken = {
  token: string
  expires_at: string
}

type GitHubRepositoryResponse = {
  id: number
  name: string
  full_name: string
  private: boolean
  visibility?: "public" | "private" | "internal"
  default_branch: string
  html_url: string
  updated_at: string
  owner: {
    login: string
  }
}

type GitHubRepositoriesResponse = {
  repositories: GitHubRepositoryResponse[]
}

const GITHUB_API_VERSION = "2022-11-28"

export function getGitHubAppConfig(): GitHubAppConfig | null {
  const appId = process.env.GITHUB_APP_ID?.trim()
  const appSlug = process.env.GITHUB_APP_SLUG?.trim()
  const privateKey = getGitHubAppPrivateKey()

  if (!appId || !appSlug || !privateKey) {
    return null
  }

  return {
    appId,
    appSlug,
    privateKey,
  }
}

export function getGitHubAppInstallUrl(config = getGitHubAppConfig()) {
  if (!config) {
    return null
  }

  return `https://github.com/apps/${config.appSlug}/installations/new`
}

export async function getGitHubAppInstallation(installationId: number, config = requireGitHubAppConfig()) {
  return githubAppFetch<GitHubInstallation>(`/app/installations/${installationId}`, config)
}

export async function listGitHubInstallationRepositories(installationId: number, config = requireGitHubAppConfig()) {
  const token = await createInstallationAccessToken(installationId, config)
  const response = await githubInstallationFetch<GitHubRepositoriesResponse>("/installation/repositories?per_page=100", token.token)

  return response.repositories.map(mapGitHubRepository)
}

export function mapGitHubRepository(repository: GitHubRepositoryResponse): GitHubAppRepository {
  return {
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    owner: repository.owner.login,
    private: repository.private,
    visibility: repository.visibility || (repository.private ? "private" : "public"),
    defaultBranch: repository.default_branch,
    htmlUrl: repository.html_url,
    updatedAt: repository.updated_at,
  }
}

export function createGitHubAppJwt(config: GitHubAppConfig, now = Math.floor(Date.now() / 1000)) {
  const payload = {
    iat: now - 60,
    exp: now + 9 * 60,
    iss: config.appId,
  }
  const encodedHeader = base64UrlEncode(JSON.stringify({ alg: "RS256", typ: "JWT" }))
  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  const signingInput = `${encodedHeader}.${encodedPayload}`
  const signature = createSign("RSA-SHA256").update(signingInput).sign(config.privateKey)

  return `${signingInput}.${base64UrlEncode(signature)}`
}

export function normalizeGitHubPrivateKey(privateKey: string) {
  return privateKey.replace(/\\n/g, "\n")
}

function getGitHubAppPrivateKey() {
  const base64Key = process.env.GITHUB_APP_PRIVATE_KEY_BASE64?.trim()

  if (base64Key) {
    return Buffer.from(base64Key, "base64").toString("utf8")
  }

  const rawKey = process.env.GITHUB_APP_PRIVATE_KEY?.trim()

  return rawKey ? normalizeGitHubPrivateKey(rawKey) : ""
}

function requireGitHubAppConfig() {
  const config = getGitHubAppConfig()

  if (!config) {
    throw new Error("GitHub App is not configured.")
  }

  assertValidGitHubPrivateKey(config.privateKey)

  return config
}

function assertValidGitHubPrivateKey(privateKey: string) {
  try {
    createPrivateKey({ key: privateKey, format: "pem" })
  } catch {
    throw new Error("GitHub App private key is invalid or incomplete.")
  }
}

async function createInstallationAccessToken(installationId: number, config: GitHubAppConfig) {
  return githubAppFetch<GitHubInstallationToken>(`/app/installations/${installationId}/access_tokens`, config, {
    method: "POST",
  })
}

async function githubAppFetch<T>(path: string, config: GitHubAppConfig, init: RequestInit = {}) {
  return githubFetch<T>(path, createGitHubAppJwt(config), init)
}

async function githubInstallationFetch<T>(path: string, token: string, init: RequestInit = {}) {
  return githubFetch<T>(path, token, init)
}

async function githubFetch<T>(path: string, token: string, init: RequestInit = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": GITHUB_API_VERSION,
      ...init.headers,
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`GitHub request failed (${response.status}).`)
  }

  return (await response.json()) as T
}

function base64UrlEncode(value: string | Buffer) {
  return Buffer.from(value).toString("base64url")
}
