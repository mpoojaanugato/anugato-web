import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { newsletterSchema } from '@/lib/validation'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = newsletterSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 }
    )
  }

  const supabase = await createSupabaseServerClient()

  const { error } = await supabase
    .from('newsletter_subscribers')
    .upsert(
      { email: parsed.data.email, source_page: parsed.data.source_page ?? null },
      { onConflict: 'email' }
    )

  if (error) {
    return NextResponse.json({ success: false, error: 'Could not subscribe' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
