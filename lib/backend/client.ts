import 'server-only'

export class BackendRequestError extends Error {
  status: number

  constructor(message: string, status = 503) {
    super(message)
    this.name = 'BackendRequestError'
    this.status = status
  }
}

type BackendRequestInit = RequestInit & {
  revalidate?: number
}

function getBackendUrl() {
  const url = process.env.BACKEND_SERVICE_URL
  if (!url) {
    throw new BackendRequestError('Backend service is not configured')
  }

  return url.replace(/\/$/, '')
}

export async function requestBackend<T>(path: string, init?: BackendRequestInit): Promise<T> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)
  const token = process.env.BACKEND_SERVICE_TOKEN
  const { revalidate, ...requestInit } = init ?? {}

  try {
    const response = await fetch(`${getBackendUrl()}${path}`, {
      ...requestInit,
      signal: controller.signal,
      ...(revalidate !== undefined ? { next: { revalidate } } : {}),
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...requestInit.headers
      }
    })

    const result = (await response.json().catch(() => null)) as T | { detail?: string } | null
    if (!response.ok) {
      const detail = result && typeof result === 'object' && 'detail' in result ? result.detail : null
      throw new BackendRequestError(
        typeof detail === 'string' ? detail : 'Backend service request failed',
        response.status
      )
    }

    return result as T
  } catch (error) {
    if (error instanceof BackendRequestError) {
      throw error
    }

    throw new BackendRequestError('Backend service is unavailable')
  } finally {
    clearTimeout(timeout)
  }
}