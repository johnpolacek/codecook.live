import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProfileForm from "@/components/app/profile-form"
import { getCurrentProfile } from "@/lib/server/profiles"

export default async function AppPage() {
  const profile = await getCurrentProfile()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-20">
        <section className="container mx-auto max-w-4xl">
          {profile ? (
            <>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Workspace</p>
              <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Welcome back, {profile.displayName}.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Your creator profile is ready. Next, connect a repository and start shaping shipped work into audience-ready updates.
              </p>
              <ProfileForm defaultDisplayName={profile.displayName} defaultUsername={profile.username} />
            </>
          ) : (
            <>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Creator Setup</p>
              <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Create your CodeCook profile.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Choose how your work will appear when you publish shipping sessions and share generated updates.
              </p>
              <ProfileForm />
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
