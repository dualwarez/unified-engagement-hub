export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      call_logs: {
        Row: {
          call_duration: number | null
          created_at: string
          id: string
          lead_id: string | null
          notes: string | null
          outcome: Database["public"]["Enums"]["call_outcome"] | null
          recording_url: string | null
          scheduled_follow_up: string | null
          user_id: string
        }
        Insert: {
          call_duration?: number | null
          created_at?: string
          id?: string
          lead_id?: string | null
          notes?: string | null
          outcome?: Database["public"]["Enums"]["call_outcome"] | null
          recording_url?: string | null
          scheduled_follow_up?: string | null
          user_id: string
        }
        Update: {
          call_duration?: number | null
          created_at?: string
          id?: string
          lead_id?: string | null
          notes?: string | null
          outcome?: Database["public"]["Enums"]["call_outcome"] | null
          recording_url?: string | null
          scheduled_follow_up?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "call_logs_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      call_scripts: {
        Row: {
          content: string
          created_at: string
          id: string
          industry: Database["public"]["Enums"]["industry_segment"]
          is_active: boolean | null
          script_type: string
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          industry: Database["public"]["Enums"]["industry_segment"]
          is_active?: boolean | null
          script_type: string
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          industry?: Database["public"]["Enums"]["industry_segment"]
          is_active?: boolean | null
          script_type?: string
          title?: string
        }
        Relationships: []
      }
      lead_details: {
        Row: {
          created_at: string
          field_name: string
          field_value: string | null
          id: string
          lead_id: string | null
        }
        Insert: {
          created_at?: string
          field_name: string
          field_value?: string | null
          id?: string
          lead_id?: string | null
        }
        Update: {
          created_at?: string
          field_name?: string
          field_value?: string | null
          id?: string
          lead_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_details_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          buyer_intent: Database["public"]["Enums"]["buyer_intent"] | null
          created_at: string
          email: string | null
          first_contact_at: string | null
          id: string
          industry: Database["public"]["Enums"]["industry_segment"]
          last_contact_at: string | null
          name: string
          notes: string | null
          phone: string
          priority: Database["public"]["Enums"]["lead_priority"] | null
          source: Database["public"]["Enums"]["lead_source"]
          status: Database["public"]["Enums"]["lead_status"] | null
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          buyer_intent?: Database["public"]["Enums"]["buyer_intent"] | null
          created_at?: string
          email?: string | null
          first_contact_at?: string | null
          id?: string
          industry: Database["public"]["Enums"]["industry_segment"]
          last_contact_at?: string | null
          name: string
          notes?: string | null
          phone: string
          priority?: Database["public"]["Enums"]["lead_priority"] | null
          source: Database["public"]["Enums"]["lead_source"]
          status?: Database["public"]["Enums"]["lead_status"] | null
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          buyer_intent?: Database["public"]["Enums"]["buyer_intent"] | null
          created_at?: string
          email?: string | null
          first_contact_at?: string | null
          id?: string
          industry?: Database["public"]["Enums"]["industry_segment"]
          last_contact_at?: string | null
          name?: string
          notes?: string | null
          phone?: string
          priority?: Database["public"]["Enums"]["lead_priority"] | null
          source?: Database["public"]["Enums"]["lead_source"]
          status?: Database["public"]["Enums"]["lead_status"] | null
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assigned_to: string
          completed_at: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          lead_id: string | null
          status: Database["public"]["Enums"]["task_status"] | null
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          lead_id?: string | null
          status?: Database["public"]["Enums"]["task_status"] | null
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          lead_id?: string | null
          status?: Database["public"]["Enums"]["task_status"] | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      buyer_intent: "hot" | "warm" | "cold"
      call_outcome:
        | "interested"
        | "not_interested"
        | "follow_up_required"
        | "demo_scheduled"
        | "invalid_lead"
      industry_segment:
        | "real_estate"
        | "stock_broking"
        | "broking_franchise"
        | "insurance"
        | "loans"
        | "edutech"
      lead_priority: "high" | "medium" | "low"
      lead_source:
        | "website"
        | "google_ads"
        | "facebook"
        | "whatsapp"
        | "referral"
        | "portal_99acres"
        | "portal_magicbricks"
        | "other"
      lead_status:
        | "new"
        | "contacted"
        | "qualified"
        | "demo_scheduled"
        | "proposal_sent"
        | "converted"
        | "not_interested"
        | "invalid"
        | "nurturing"
      task_status: "pending" | "in_progress" | "completed" | "overdue"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      buyer_intent: ["hot", "warm", "cold"],
      call_outcome: [
        "interested",
        "not_interested",
        "follow_up_required",
        "demo_scheduled",
        "invalid_lead",
      ],
      industry_segment: [
        "real_estate",
        "stock_broking",
        "broking_franchise",
        "insurance",
        "loans",
        "edutech",
      ],
      lead_priority: ["high", "medium", "low"],
      lead_source: [
        "website",
        "google_ads",
        "facebook",
        "whatsapp",
        "referral",
        "portal_99acres",
        "portal_magicbricks",
        "other",
      ],
      lead_status: [
        "new",
        "contacted",
        "qualified",
        "demo_scheduled",
        "proposal_sent",
        "converted",
        "not_interested",
        "invalid",
        "nurturing",
      ],
      task_status: ["pending", "in_progress", "completed", "overdue"],
    },
  },
} as const
