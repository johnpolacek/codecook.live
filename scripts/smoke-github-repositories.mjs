const { hasRepositoryReadScope, mapGitHubRepository } = await import("../lib/server/github-repositories.ts")

if (!hasRepositoryReadScope(["public_repo"])) {
  throw new Error("GitHub public repository scope was not accepted")
}

if (!hasRepositoryReadScope(["repo"])) {
  throw new Error("GitHub private repository scope was not accepted")
}

if (hasRepositoryReadScope(["read:user"])) {
  throw new Error("GitHub user-only scope should not grant repository access")
}

const repository = mapGitHubRepository({
  id: 1,
  name: "codecook.live",
  full_name: "johnpolacek/codecook.live",
  private: true,
  default_branch: "main",
  html_url: "https://github.com/johnpolacek/codecook.live",
  updated_at: "2026-05-10T00:00:00Z",
  owner: {
    login: "johnpolacek",
  },
})

if (repository.fullName !== "johnpolacek/codecook.live" || repository.defaultBranch !== "main") {
  throw new Error("GitHub repository response mapping failed")
}

console.log("GitHub repository helper smoke check passed")
