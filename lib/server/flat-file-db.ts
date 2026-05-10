import { mkdir, readFile, rename, writeFile } from "node:fs/promises"
import path from "node:path"
import { randomUUID } from "node:crypto"

type JsonPrimitive = string | number | boolean | null
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue }
export type JsonRecord = Record<string, JsonValue>

const DEFAULT_DATA_DIR = ".data"

function getDataRoot() {
  const dataDir = process.env.CODECOOK_DATA_DIR || DEFAULT_DATA_DIR

  if (path.isAbsolute(dataDir)) {
    return dataDir
  }

  return path.join(/*turbopackIgnore: true*/ process.cwd(), dataDir)
}

function assertSafeCollection(collection: string) {
  if (!/^[a-z0-9][a-z0-9_-]*$/i.test(collection)) {
    throw new Error(`Invalid flat-file collection name: ${collection}`)
  }
}

function collectionPath(collection: string) {
  assertSafeCollection(collection)
  return path.join(getDataRoot(), `${collection}.json`)
}

async function ensureDataRoot() {
  await mkdir(getDataRoot(), { recursive: true })
}

export async function readCollection<T extends JsonRecord>(collection: string): Promise<T[]> {
  try {
    const file = await readFile(collectionPath(collection), "utf8")
    const parsed = JSON.parse(file)

    if (!Array.isArray(parsed)) {
      throw new Error(`Flat-file collection ${collection} must contain a JSON array`)
    }

    return parsed as T[]
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return []
    }

    throw error
  }
}

export async function writeCollection<T extends JsonRecord>(collection: string, records: T[]) {
  await ensureDataRoot()

  const destination = collectionPath(collection)
  const temporary = `${destination}.${randomUUID()}.tmp`
  const payload = `${JSON.stringify(records, null, 2)}\n`

  await writeFile(temporary, payload, "utf8")
  await rename(temporary, destination)
}

export async function appendRecord<T extends JsonRecord>(collection: string, record: T) {
  const records = await readCollection<T>(collection)
  records.push(record)
  await writeCollection(collection, records)
  return record
}

export async function replaceCollection<T extends JsonRecord>(
  collection: string,
  updater: (records: T[]) => T[] | Promise<T[]>
) {
  const records = await readCollection<T>(collection)
  const nextRecords = await updater(records)
  await writeCollection(collection, nextRecords)
  return nextRecords
}
