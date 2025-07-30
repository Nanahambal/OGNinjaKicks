import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.trim() === '' || supabaseAnonKey.trim() === '') {
  console.error('Supabase configuration error:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    urlFormat: supabaseUrl ? 'URL provided' : 'No URL',
    urlValue: supabaseUrl || 'empty'
  })
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Please check your .env file and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are properly set.'
  )
}

// Validate URL format
try {
  new URL(supabaseUrl)
} catch (error) {
  console.error('Invalid Supabase URL format:', supabaseUrl)
  throw new Error(
    'Invalid Supabase URL format. ' +
    'Please ensure VITE_SUPABASE_URL is a valid URL (e.g., https://your-project.supabase.co)'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          ninja_rank: 'Bronze' | 'Silver' | 'Gold' | 'Shadow Master'
          xp: number
          raffle_entries: number
          total_spent: number
          avatar_url: string | null
          member_since: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name: string
          ninja_rank?: 'Bronze' | 'Silver' | 'Gold' | 'Shadow Master'
          xp?: number
          raffle_entries?: number
          total_spent?: number
          avatar_url?: string | null
          member_since?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          ninja_rank?: 'Bronze' | 'Silver' | 'Gold' | 'Shadow Master'
          xp?: number
          raffle_entries?: number
          total_spent?: number
          avatar_url?: string | null
          member_since?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}