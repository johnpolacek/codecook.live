import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({ error: "Uploads are disabled until Clerk and Convex are configured." }, { status: 503 })
}
