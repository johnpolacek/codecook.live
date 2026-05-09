export async function fetchGitHubApi(url: string, options: RequestInit = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Accept: "application/vnd.github.v3+json",
    },
  })
}
