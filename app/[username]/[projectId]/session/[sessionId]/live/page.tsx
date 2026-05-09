import { redirect } from "next/navigation"

interface LiveSessionPageProps {
  params: Promise<{
    username: string
    projectId: string
    sessionId: string
  }>
}

export default async function LiveSessionPage({ params }: LiveSessionPageProps) {
  const { username, projectId, sessionId } = await params

  redirect(`/${username}/${projectId}/session/${sessionId}`)
}
