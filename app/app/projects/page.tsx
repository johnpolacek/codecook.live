import Link from "next/link"
import { redirect } from "next/navigation"
import { FolderGit2 } from "lucide-react"

import RepositoryConnectionPanel from "@/components/app/repository-connection-panel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentProfile } from "@/lib/server/profiles"
import { getCurrentRepositoryConnectionState } from "@/lib/server/repository-connections"

type ProjectsPageProps = {
  searchParams?: Promise<{
    github?: string
  }>
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const profile = await getCurrentProfile()

  if (!profile) {
    redirect("/app/profile")
  }
  const repositoryConnectionState = await getCurrentRepositoryConnectionState(true)
  const params = await searchParams
  const setupMessage = getGitHubSetupMessage(params?.github)

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Your shipping work</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Create a project from a repository, then turn active work into live sessions and shareable recaps.
        </p>
      </div>
      <RepositoryConnectionPanel state={repositoryConnectionState} setupMessage={setupMessage} />
      <Card className="rounded-lg shadow-none">
        <CardHeader>
          <div className="flex size-10 items-center justify-center rounded-md bg-secondary">
            <FolderGit2 className="size-5" />
          </div>
          <CardTitle className="text-xl">No projects yet</CardTitle>
          <CardDescription>Repository connection is the next setup step before projects can be created.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/app">Go to dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function getGitHubSetupMessage(status?: string) {
  if (status === "invalid-private-key") {
    return "GitHub could not be connected because the GitHub App private key is invalid or incomplete."
  }

  if (status === "connection-error") {
    return "GitHub could not be connected. Check the GitHub App settings and try again."
  }

  if (status === "missing-installation") {
    return "GitHub did not return an installation ID. Start the repository connection again."
  }

  if (status === "connected") {
    return "GitHub repositories are connected."
  }

  return ""
}
