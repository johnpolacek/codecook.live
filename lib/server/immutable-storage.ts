import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

export type ImmutableObjectInput = {
  visibility: "public" | "private"
  key: string
  body: Buffer | Uint8Array | string
  contentType: string
  cacheControl?: string
}

export type StorageConfig = {
  publicBucket: string
  privateBucket: string
  region: string
}

const DEFAULT_REGION = "us-east-1"
const IMMUTABLE_CACHE_CONTROL = "public, max-age=31536000, immutable"

function requireEnv(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`${name} is required for S3-compatible storage`)
  }

  return value
}

function normalizeObjectKey(key: string) {
  const normalized = key.replace(/^\/+/, "")

  if (!normalized || normalized.includes("..")) {
    throw new Error(`Invalid immutable storage key: ${key}`)
  }

  return normalized
}

export function getStorageConfig(): StorageConfig {
  return {
    publicBucket: requireEnv("S3_PUBLIC_BUCKET"),
    privateBucket: requireEnv("S3_PRIVATE_BUCKET"),
    region: process.env.S3_REGION || DEFAULT_REGION,
  }
}

export function getStorageClient() {
  const config = getStorageConfig()
  const accessKeyId = process.env.S3_ACCESS_KEY_ID
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY

  return new S3Client({
    region: config.region,
    credentials:
      accessKeyId && secretAccessKey
        ? {
            accessKeyId,
            secretAccessKey,
          }
        : undefined,
  })
}

export function getStorageBucket(visibility: ImmutableObjectInput["visibility"]) {
  const config = getStorageConfig()

  return visibility === "public" ? config.publicBucket : config.privateBucket
}

export async function putImmutableObject(input: ImmutableObjectInput) {
  const bucket = getStorageBucket(input.visibility)
  const objectKey = normalizeObjectKey(input.key)
  const client = getStorageClient()

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: objectKey,
      Body: input.body,
      ContentType: input.contentType,
      CacheControl: input.cacheControl || IMMUTABLE_CACHE_CONTROL,
    })
  )

  return {
    bucket,
    key: objectKey,
    visibility: input.visibility,
  }
}
