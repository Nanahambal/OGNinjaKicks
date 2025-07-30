import { createClient } from '@supabase/supabase-js'

// Force demo mode for public access - no Supabase connection needed
const DEMO_MODE = true;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key'

// Create a mock client that never tries to connect to real Supabase
const createMockClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signUp: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: () => Promise.resolve({ data: { user: null }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    resetPasswordForEmail: () => Promise.resolve({ error: null }),
    updateUser: () => Promise.resolve({ error: null })
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null })
      })
    }),
    insert: () => Promise.resolve({ error: null }),
    update: () => ({
      eq: () => Promise.resolve({ error: null })
    })
  })
});

// Always use mock client for public demo
export const supabase = createMockClient();

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