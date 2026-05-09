import { mkdtemp, rm } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

const dataDir = await mkdtemp(path.join(os.tmpdir(), "codecook-data-"))
process.env.CODECOOK_DATA_DIR = dataDir

try {
  const { appendRecord, readCollection } = await import("../lib/server/flat-file-db.ts")

  await appendRecord("smoke", {
    id: "smoke-1",
    name: "CodeCook smoke check",
  })

  const records = await readCollection("smoke")

  if (records.length !== 1 || records[0]?.id !== "smoke-1") {
    throw new Error("Flat-file smoke check failed")
  }

  console.log("Flat-file smoke check passed")
} finally {
  await rm(dataDir, { recursive: true, force: true })
}
