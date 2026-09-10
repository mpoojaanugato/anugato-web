import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { leadSchema } from '@/lib/validation'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = leadSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 }
    )
  }

  const supabase = await createSupabaseServerClient()

  const { data, error } = await supabase
    .from('leads')
    .insert({
      first_name: parsed.data.first_name,
      last_name: parsed.data.last_name,
      work_email: parsed.data.work_email,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
      org_type: parsed.data.org_type ?? null,
      message: parsed.data.message || null,
      source_page: parsed.data.source_page ?? null,
      utm_source: parsed.data.utm_source ?? null,
      utm_medium: parsed.data.utm_medium ?? null,
      utm_campaign: parsed.data.utm_campaign ?? null
    })
    .select('id')
    .single()

  if (error) {
    return NextResponse.json(
      { success: false, error: 'Could not save your request' },
      { status: 500 }
    )
  }

  const integrationsUrl = process.env.INTEGRATIONS_SERVICE_URL
  if (integrationsUrl) {
    fetch(`${integrationsUrl}/sync/crm`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead_id: data.id, ...parsed.data })
    }).catch(() => {
      // Best-effort — the integrations service syncing to the CRM is not required for the lead to be saved.
    })
  }

  return NextResponse.json({ success: true, lead_id: data.id })
}
