import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { MessageCircle } from "lucide-react"
import { toast } from "sonner"

interface SessionChatManagerProps {
  sessionId: string
  initialChatEnabled: boolean
}

export function SessionChatManager({ sessionId: _sessionId, initialChatEnabled }: SessionChatManagerProps) {
  void _sessionId

  const [isChatEnabled] = useState(initialChatEnabled)

  const handleToggleChat = async () => {
    toast.error("Chat toggles are disabled until Clerk and Convex are configured.")
  }

  return (
    <>
      <div className="flex items-center gap-2 ml-2">
        <Switch checked={isChatEnabled} onCheckedChange={handleToggleChat} className="data-[state=checked]:bg-green-500" />
        <Label className="text-sm flex items-center gap-1.5">
          <MessageCircle className="h-4 w-4" />
          Chat
        </Label>
      </div>
    </>
  )
}
