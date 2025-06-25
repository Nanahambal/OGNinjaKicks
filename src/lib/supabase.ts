import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
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