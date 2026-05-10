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
  } catch {
    return NextResponse.redirect(new URL("/app/projects?github=connection-error", request.url))
  }
}
