import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function AppPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-20">
        <section className="container mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Workspace</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Start turning shipped work into shareable updates.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Connect your work, capture what changed, and shape each session into content your audience can follow.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
