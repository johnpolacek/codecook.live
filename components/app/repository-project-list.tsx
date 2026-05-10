import { ArrowRight, FolderGit2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type GitHubAppRepository } from "@/lib/server/github-app"

type RepositoryProjectListProps = {
  repositories: GitHubAppRepository[]
}

export default function RepositoryProjectList({ repositories }: RepositoryProjectListProps) {
  if (repositories.length === 0) {
    return (
      <Card className="rounded-lg shadow-none">
        <CardHeader>
          <div className="flex size-10 items-center justify-center rounded-md bg-secondary">
            <FolderGit2 className="size-5" />
          </div>
          <CardTitle className="text-xl">No projects yet</CardTitle>
          <CardDescription>Connect a repository to create your first CodeCook project.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <section className="space-y-4">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Projects</h1>
        <p className="mt-2 text-muted-foreground">Each connected repository is a CodeCook project.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {repositories.map((repository) => (
          <Card key={repository.id} className="rounded-lg shadow-none">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">{repository.name}</CardTitle>
                  <CardDescription>{repository.fullName}</CardDescription>
                </div>
                <Badge variant={repository.private ? "secondary" : "outline"}>{repository.private ? "Private" : "Public"}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">Default branch: {repository.defaultBranch}</p>
              <Button variant="outline" disabled>
                Open project
                <ArrowRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
