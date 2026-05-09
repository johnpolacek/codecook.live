"use client"

import type { Session } from "@/lib/types/session"
import { useTheme } from "next-themes"
import Link from "next/link"
import { CornerUpLeft } from "lucide-react"
import { SessionContent } from "./session-content"
import { Badge } from "../ui/badge"
import { Circle } from "lucide-react"

interface SessionViewProps {
  session: Session
  fullName: string
  username: string
  projectId: string
}

export function SessionView({ session: initialSession, fullName, username, projectId }: SessionViewProps) {
  const { theme } = useTheme()
  const isLive = initialSession.is_live
  const session = initialSession

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${username}/${projectId}`} className="group inline-flex items-center space-x-2 font-mono text-xs border px-2 py-1 rounded-md hover:bg-foreground/5 transition-colors">
          <CornerUpLeft className="h-3 w-3" />
          <p className="font-medium">Back to project</p>
        </Link>
        {isLive && (
          <Badge variant="secondary" className="bg-background ring-1 ring-green-500/50 py-2">
            <Circle className="h-4 w-4 rounded-full scale-75 text-green-500/50 ring-4 ring-green-500/30 mr-2 fill-green-500/90" />
            <span className="text-green-500">Live Session in Progress</span>
          </Badge>
        )}
      </div>
      <SessionContent title={session.title} blocks={session.blocks} theme={theme} fullName={fullName} showDate={true} created_at={session.created_at} commit_shas={session.commit_shas} />
    </div>
  )
}
