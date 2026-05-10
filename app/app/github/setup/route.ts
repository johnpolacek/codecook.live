import { NextRequest, NextResponse } from "next/server"

import { saveCurrentRepositoryConnection } from "@/lib/server/repository-connections"

export async function GET(request: NextRequest) {
  const installationId = Number(request.nextUrl.searchParams.get("installation_id"))

  if (!Number.isInteger(installationId) || installationId <= 0) {
    return NextResponse.redirect(new URL("/app/projects?github=missing-installation", request.url))
  }

  try {
    await saveCurrentRepositoryConnection(installationId)
    return NextResponse.redirect(new URL("/app/projects?github=connected", request.url))
  } catch (error) {
    console.error("GitHub App setup failed", error)

    const reason = error instanceof Error && error.message.includes("private key") ? "invalid-private-key" : "connection-error"

    return NextResponse.redirect(new URL(`/app/projects?github=${reason}`, request.url))
  }
}
