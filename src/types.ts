export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          date: string
          id: string
          location: string | null
          name: string | null
          userId: string | null
        }
        Insert: {
          date: string
          id: string
          location?: string | null
          name?: string | null
          userId?: string | null
        }
        Update: {
          date?: string
          id?: string
          location?: string | null
          name?: string | null
          userId?: string | null
        }
      }
      gym: {
        Row: {
          grades: Json | null
          id: number
          logo: string | null
          name: string | null
        }
        Insert: {
          grades?: Json | null
          id?: number
          logo?: string | null
          name?: string | null
        }
        Update: {
          grades?: Json | null
          id?: number
          logo?: string | null
          name?: string | null
        }
      }
      profile: {
        Row: {
          avatar_url: string | null
          gymId: number | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          gymId?: number | null
          id: string
        }
        Update: {
          avatar_url?: string | null
          gymId?: number | null
          id?: string
        }
      }
      progress: {
        Row: {
          due_date: string | null
          goal: Json | null
          gymId: number | null
          id: string
          progress: Json | null
          userId: string
        }
        Insert: {
          due_date?: string | null
          goal?: Json | null
          gymId?: number | null
          id: string
          progress?: Json | null
          userId: string
        }
        Update: {
          due_date?: string | null
          goal?: Json | null
          gymId?: number | null
          id?: string
          progress?: Json | null
          userId?: string
        }
      }
      table_size_test: {
        Row: {
          email: string | null
          gym: string | null
          name: string | null
          uid: string | null
        }
        Insert: {
          email?: string | null
          gym?: string | null
          name?: string | null
          uid?: string | null
        }
        Update: {
          email?: string | null
          gym?: string | null
          name?: string | null
          uid?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}