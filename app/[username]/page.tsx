import Header from "@/components/layout/header"

interface UserPageProps {
  params: Promise<{
    username: string
  }>
}

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-muted-foreground">@{username}</p>
          <h1 className="mt-3 text-3xl font-bold">Profiles are being rebuilt</h1>
          <p className="mt-4 text-muted-foreground">
            The old Supabase-backed profile data has been removed. This route will connect to the new Clerk and Convex model in the next database pass.
          </p>
        </div>
      </main>
    </div>
  )
}
