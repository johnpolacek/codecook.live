import { redirect } from "next/navigation"

import RepositoryConnectionPanel from "@/components/app/repository-connection-panel"
import RepositoryProjectList from "@/components/app/repository-project-list"
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
  const repositories = repositoryConnectionState.repositories
  const manageUrl = repositoryConnectionState.status === "connected" ? repositoryConnectionState.connection.settingsUrl : ""

  return (
    <div className="space-y-8">
      <RepositoryProjectList repositories={repositories} manageUrl={manageUrl} />
      {repositories.length === 0 ? (
        <RepositoryConnectionPanel state={repositoryConnectionState} setupMessage={setupMessage} />
      ) : null}
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
