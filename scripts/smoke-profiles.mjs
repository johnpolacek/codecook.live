import { mkdtemp, rm } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

const dataDir = await mkdtemp(path.join(os.tmpdir(), "codecook-profiles-"))
process.env.CODECOOK_DATA_DIR = dataDir

try {
  const { replaceCollection, readCollection } = await import("../lib/server/flat-file-db.ts")

  await replaceCollection("profiles", () => [
    {
      clerkUserId: "user_123",
      username: "jane-builder",
      displayName: "Jane Builder",
      createdAt: new Date(0).toISOString(),
      updatedAt: new Date(0).toISOString(),
    },
  ])

  const profiles = await readCollection("profiles")

  if (profiles.length !== 1 || profiles[0]?.username !== "jane-builder") {
    throw new Error("Profile smoke check failed")
  }

  console.log("Profile smoke check passed")
} finally {
  await rm(dataDir, { recursive: true, force: true })
}
