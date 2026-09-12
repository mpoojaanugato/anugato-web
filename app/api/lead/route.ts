import { NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validation'
import { BackendRequestError, requestBackend } from '@/lib/backend/client'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = leadSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 }
    )
  }

  try {
    const result = await requestBackend<{ success: boolean; lead_id: string }>('/leads', {
      method: 'POST',
      body: JSON.stringify(parsed.data)
    })

    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    const status = error instanceof BackendRequestError && error.status < 500 ? error.status : 503
    return NextResponse.json(
      { success: false, error: 'Could not save your request' },
      { status }
    )
  }
}
