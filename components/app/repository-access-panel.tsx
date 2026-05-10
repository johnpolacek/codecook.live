import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAccessibleGitHubRepositories } from "@/lib/server/github"

export default async function RepositoryAccessPanel() {
  const access = await getAccessibleGitHubRepositories()

  return (
    <Card className="mt-8 max-w-3xl">
      <CardHeader>
        <CardTitle>Repositories</CardTitle>
        <CardDescription>{access.message}</CardDescription>
      </CardHeader>
      <CardContent>
        {access.status === "ready" ? (
          <div className="space-y-3">
            {access.repositories.slice(0, 8).map((repository) => (
              <div key={repository.id} className="flex items-center justify-between gap-4 rounded-md border p-4">
                <div>
                  <p className="font-medium">{repository.fullName}</p>
                  <p className="text-sm text-muted-foreground">Default branch: {repository.defaultBranch}</p>
                </div>
                <Badge variant={repository.private ? "secondary" : "outline"}>
                  {repository.private ? "Private" : "Public"}
                </Badge>
              </div>
            ))}
            {access.repositories.length > 8 ? (
              <p className="text-sm text-muted-foreground">
                Showing 8 of {access.repositories.length} repositories.
              </p>
            ) : null}
          </div>
        ) : (
          <div className="rounded-md border border-dashed p-5 text-sm text-muted-foreground">
            {access.status === "missing-token"
              ? "Use GitHub when signing in so CodeCook can list repositories for project setup."
              : access.status === "insufficient-scope"
                ? "Update GitHub access and include repository read permissions."
                : access.status === "empty"
                  ? "Create or request access to a repository in GitHub, then return here."
                  : "Repository access will appear here after GitHub authorization is ready."}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
