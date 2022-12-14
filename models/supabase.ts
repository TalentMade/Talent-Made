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
      Skills: {
        Row: {
          id: number
          skill: string | null
        }
        Insert: {
          id?: number
          skill?: string | null
        }
        Update: {
          id?: number
          skill?: string | null
        }
      }
      User: {
        Row: {
          id: number
          firstname: string
          lastname: string
          createddate: string
          email: string
          password: string | null
        }
        Insert: {
          id?: number
          firstname: string
          lastname: string
          createddate?: string
          email?: string
          password?: string | null
        }
        Update: {
          id?: number
          firstname?: string
          lastname?: string
          createddate?: string
          email?: string
          password?: string | null
        }
      }
      UserInfo: {
        Row: {
          id: number
          user_id: number | null
          city: string | null
          summary: string | null
          state: string | null
        }
        Insert: {
          id?: number
          user_id?: number | null
          city?: string | null
          summary?: string | null
          state?: string | null
        }
        Update: {
          id?: number
          user_id?: number | null
          city?: string | null
          summary?: string | null
          state?: string | null
        }
      }
      UserSkills: {
        Row: {
          id: number
          user_id: number | null
          skill_id: number
        }
        Insert: {
          id?: number
          user_id?: number | null
          skill_id: number
        }
        Update: {
          id?: number
          user_id?: number | null
          skill_id?: number
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
