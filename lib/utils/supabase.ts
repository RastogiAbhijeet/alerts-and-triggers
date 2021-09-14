
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl) {
  throw new Error("Supabase URL is undefined.")
}

if (!supabaseKey) {
  throw new Error("Supabase KEY is undefined.")
}

export const supabaseClient = createClient(supabaseUrl, supabaseKey)

// PostgrestResponse<T>
//
// { data: T | null; error: Error | null }
