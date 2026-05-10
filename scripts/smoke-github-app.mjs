const { createGitHubAppJwt, mapGitHubRepository, normalizeGitHubPrivateKey } = await import("../lib/server/github-app.ts")

const privateKey = normalizeGitHubPrivateKey(String.raw`-----BEGIN PRIVATE KEY-----\nMIIB\n-----END PRIVATE KEY-----`)

if (!privateKey.includes("\nMIIB\n")) {
  throw new Error("GitHub App private key normalization failed")
}

const repository = mapGitHubRepository({
  id: 1,
  name: "codecook.live",
  full_name: "johnpolacek/codecook.live",
  private: true,
  visibility: "private",
  default_branch: "main",
  html_url: "https://github.com/johnpolacek/codecook.live",
  updated_at: "2026-05-10T00:00:00Z",
  owner: {
    login: "johnpolacek",
  },
})

if (repository.fullName !== "johnpolacek/codecook.live" || repository.visibility !== "private") {
  throw new Error("GitHub App repository mapping failed")
}

if (typeof createGitHubAppJwt !== "function") {
  throw new Error("GitHub App JWT helper is unavailable")
}

console.log("GitHub App helper smoke check passed")
