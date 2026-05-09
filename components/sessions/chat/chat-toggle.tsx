import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

interface ChatToggleProps {
  sessionId: string
  initialEnabled: boolean
}

export function ChatToggle({ sessionId: _sessionId, initialEnabled }: ChatToggleProps) {
  void _sessionId

  const [isEnabled] = useState(initialEnabled)

  const handleToggle = async () => {
    toast.error("Chat toggles are disabled until Clerk and Convex are configured.")
  }

  return (
    <div className="flex items-center gap-1">
      <Switch checked={isEnabled} onCheckedChange={handleToggle} className="data-[state=checked]:bg-green-500 scale-90" />
      <Label className="text-xs flex items-center gap-1.5">Chat</Label>
    </div>
  )
}
