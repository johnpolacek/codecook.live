import Link from "next/link"
import { ArrowRight, Sparkles, UserRound } from "lucide-react"

import ProfileSetupPanel from "@/components/app/profile-setup-panel"
import RepositoryConnectionPanel from "@/components/app/repository-connection-panel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentProfile, getCurrentProfileDefaults } from "@/lib/server/profiles"
import { getCurrentRepositoryConnectionState } from "@/lib/server/repository-connections"

export default async function AppPage() {
  const profile = await getCurrentProfile()
  const profileDefaults = profile ? null : await getCurrentProfileDefaults()
  const repositoryConnectionState = await getCurrentRepositoryConnectionState(Boolean(profile))

  return (
    <div className="space-y-8">
      {profile ? (
        <>
          <section className="space-y-5">
            <Badge variant="secondary">Workspace</Badge>
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold sm:text-5xl">Welcome back, {profile.displayName}.</h1>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Connect a repository, create a project, and shape shipped work into updates your audience can follow.
              </p>
            </div>
          </section>
          <section className="grid gap-4 md:grid-cols-3">
            <Card className="rounded-lg shadow-none">
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-md bg-secondary">
                  <UserRound className="size-5" />
                </div>
                <CardTitle>Profile ready</CardTitle>
                <CardDescription>@{profile.username}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href="/app/profile">Edit profile</Link>
                </Button>
              </CardContent>
            </Card>
            <div className="md:col-span-2">
              <RepositoryConnectionPanel state={repositoryConnectionState} />
            </div>
          </section>
          <Card className="rounded-lg shadow-none">
            <CardHeader>
              <div className="flex size-10 items-center justify-center rounded-md bg-secondary">
                <Sparkles className="size-5" />
              </div>
              <CardTitle>Recaps will appear here</CardTitle>
              <CardDescription>
                Once you create a project and start a session, this dashboard will show active work and recent publish-ready updates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href="/app/projects">
                  View projects
                  <ArrowRight />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </>
      ) : (
        <section className="space-y-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Creator Setup</p>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Create your CodeCook profile.</h1>
          </div>
          <ProfileSetupPanel
            defaultDisplayName={profileDefaults?.displayName}
            defaultUsername={profileDefaults?.username}
          />
        </section>
      )}
    </div>
  )
}
