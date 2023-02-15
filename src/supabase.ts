import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'
const supabaseUrl = 'https://tqgufceactcswwkbjfjk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZ3VmY2VhY3Rjc3d3a2JqZmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2OTMyOTksImV4cCI6MTk4NjI2OTI5OX0.MRYORIJPYAwuRfISOKKsKqCnfABJqLaXT1cZQZ6ZAE4'
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)