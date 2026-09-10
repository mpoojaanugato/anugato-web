import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/lib/supabase/types'

// Anon-key client for public content reads in server components (no cookies,
// so it doesn't force the route into dynamic rendering). Relies on RLS to
// scope access — never use this for writes or anything requiring elevated trust.
export function createSupabasePublicClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
