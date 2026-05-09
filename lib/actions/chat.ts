"use server"

export async function fetchChatMessages(_sessionId: string) {
  void _sessionId

  return { messages: [], error: null }
}

export async function sendChatMessage(_sessionId: string, _content: string) {
  void _sessionId
  void _content

  return { error: "Chat is disabled until Clerk and Convex are configured." }
}

export async function createGuestChatUser(_sessionId: string, _name: string, _captchaToken: string) {
  void _sessionId
  void _name
  void _captchaToken

  return { error: "Chat is disabled until Clerk and Convex are configured.", guestUser: null as { id: string; name: string } | null }
}

export async function sendGuestChatMessage(_sessionId: string, _guestUserId: string, _content: string) {
  void _sessionId
  void _guestUserId
  void _content

  return { error: "Chat is disabled until Clerk and Convex are configured." }
}

export async function getGuestChatUser(_sessionId: string, _guestUserId: string) {
  void _sessionId
  void _guestUserId

  return { error: "Chat is disabled until Clerk and Convex are configured.", guestUser: null as { id: string; name: string } | null }
}

export async function getExistingGuestUser(_sessionId: string) {
  void _sessionId

  return { error: null, guestUser: null as { id: string; name: string } | null }
}
