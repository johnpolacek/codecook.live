import Link from "next/link"
import { CheckCircle2, ExternalLink, FolderGit2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getGitHubAppInstallUrl } from "@/lib/server/github-app"
import { type RepositoryConnectionState } from "@/lib/server/repository-connections"

type RepositoryConnectionPanelProps = {
  state: RepositoryConnectionState
  setupMessage?: string
}

export default function RepositoryConnectionPanel({ state, setupMessage }: RepositoryConnectionPanelProps) {
  const installUrl = getGitHubAppInstallUrl()
  const isConnected = state.status === "connected"
  const connection = state.status === "connected" || state.status === "error" ? state.connection : null
  const hasAllRepositoryAccess = connection?.repositorySelection === "all"
  const settingsUrl = connection?.settingsUrl || ""

  return (
    <Card className="rounded-lg shadow-none">
      <CardHeader>
        <div className="flex size-10 items-center justify-center rounded-md bg-secondary">
          {isConnected ? <CheckCircle2 className="size-5" /> : <FolderGit2 className="size-5" />}
        </div>
        <CardTitle>{isConnected ? "Connected repositories" : "Connect your first repository"}</CardTitle>
        {isConnected ? null : <CardDescription>{state.message}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        {setupMessage && setupMessage !== state.message ? (
          <div className="rounded-md border border-amber-500/40 bg-amber-500/10 p-4 text-sm">{setupMessage}</div>
        ) : null}
        {hasAllRepositoryAccess ? (
          <div className="rounded-md border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
            <p className="font-medium">CodeCook can read all repositories in this GitHub installation.</p>
            <p className="mt-1 text-muted-foreground">
              You can narrow access in GitHub to only the repositories you want to use with CodeCook.
            </p>
            {settingsUrl ? (
              <Button asChild variant="outline" size="sm" className="mt-3">
                <Link href={settingsUrl}>
                  Manage GitHub installation
                  <ExternalLink />
                </Link>
              </Button>
            ) : null}
          </div>
        ) : null}
        {isConnected ? (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
              {settingsUrl ? (
                <Button asChild variant="outline">
                  <Link href={settingsUrl}>
                    Manage GitHub repositories
                    <ExternalLink />
                  </Link>
                </Button>
              ) : null}
            </div>
            {state.repositories.slice(0, 6).map((repository) => (
              <div key={repository.id} className="flex items-center justify-between gap-4 rounded-md border p-4">
                <div>
                  <p className="font-medium">{repository.fullName}</p>
                  <p className="text-sm text-muted-foreground">Default branch: {repository.defaultBranch}</p>
                </div>
                <Badge variant={repository.private ? "secondary" : "outline"}>{repository.private ? "Private" : "Public"}</Badge>
              </div>
            ))}
            {state.repositories.length > 6 ? (
              <p className="text-sm text-muted-foreground">Showing 6 of {state.repositories.length} repositories.</p>
            ) : null}
          </div>
        ) : installUrl && state.status !== "missing-profile" ? (
          <Button asChild>
            <Link href={installUrl}>Connect GitHub repositories</Link>
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">
            Repository connection will be available after your profile and account setup are complete.
          </p>
        )}
      </CardContent>
    </Card>
  )
}
