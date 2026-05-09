import Header from "@/components/layout/header"

interface SessionPageProps {
  params: Promise<{
    username: string
    projectId: string
    sessionId: string
  }>
}

export default async function SessionPage({ params }: SessionPageProps) {
  const { username, projectId, sessionId } = await params

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-muted-foreground">
            /{username}/{projectId}/session/{sessionId}
          </p>
          <h1 className="mt-3 text-3xl font-bold">Sessions are being rebuilt</h1>
          <p className="mt-4 text-muted-foreground">
            The old Supabase-backed session data has been removed. Session pages will return with the new Convex live-session model.
          </p>
        </div>
      </main>
    </div>
  )
}
