import ProfileForm from "@/components/app/profile-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type ProfileSetupPanelProps = {
  defaultDisplayName?: string
  defaultUsername?: string
}

export default function ProfileSetupPanel({ defaultDisplayName, defaultUsername }: ProfileSetupPanelProps) {
  return (
    <Card className="max-w-2xl rounded-lg shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Creator profile</CardTitle>
        <CardDescription>Choose how your work will appear when you publish shipping sessions and share updates.</CardDescription>
      </CardHeader>
      <CardContent>
        <ProfileForm defaultDisplayName={defaultDisplayName} defaultUsername={defaultUsername} />
      </CardContent>
    </Card>
  )
}
