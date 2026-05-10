import ProfileSetupPanel from "@/components/app/profile-setup-panel"
import { getCurrentProfile } from "@/lib/server/profiles"

export default async function ProfilePage() {
  const profile = await getCurrentProfile()

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Profile</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Public creator details</h1>
      </div>
      <ProfileSetupPanel defaultDisplayName={profile?.displayName} defaultUsername={profile?.username} />
    </div>
  )
}
