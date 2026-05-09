"use server"

export async function createSession(_projectName: string, _commitSha: string, _commitMessage: string) {
  void _projectName
  void _commitSha
  void _commitMessage

  return {
    session: null as { id: string } | null,
    error: "Sessions are disabled until Clerk and Convex are configured.",
  }
}
