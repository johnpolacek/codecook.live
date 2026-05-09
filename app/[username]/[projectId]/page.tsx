import Header from "@/components/layout/header"

interface ProjectPageProps {
  params: Promise<{
    username: string
    projectId: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { username, projectId } = await params

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-muted-foreground">
            /{username}/{projectId}
          </p>
          <h1 className="mt-3 text-3xl font-bold">Projects are being rebuilt</h1>
          <p className="mt-4 text-muted-foreground">
            The old Supabase-backed project data has been removed. This page will return when the new Convex project model is in place.
          </p>
        </div>
      </main>
    </div>
  )
}
