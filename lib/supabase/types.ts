export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          first_name: string
          last_name: string
          work_email: string
          phone: string | null
          company: string | null
          org_type: 'consulting_firm' | 'in_house' | 'other' | null
          message: string | null
          source_page: string | null
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
          crm_synced: boolean
          crm_contact_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          work_email: string
          phone?: string | null
          company?: string | null
          org_type?: 'consulting_firm' | 'in_house' | 'other' | null
          message?: string | null
          source_page?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          crm_synced?: boolean
          crm_contact_id?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['leads']['Insert']>
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          source_page: string | null
          crm_synced: boolean
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          source_page?: string | null
          crm_synced?: boolean
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['newsletter_subscribers']['Insert']>
        Relationships: []
      }
      blog_categories: {
        Row: {
          id: string
          name: string
          slug: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
        }
        Update: Partial<Database['public']['Tables']['blog_categories']['Insert']>
        Relationships: []
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          category_id: string | null
          excerpt: string | null
          body_markdown: string
          cover_image_url: string | null
          author_name: string
          published: boolean
          published_at: string | null
          meta_description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          category_id?: string | null
          excerpt?: string | null
          body_markdown: string
          cover_image_url?: string | null
          author_name?: string
          published?: boolean
          published_at?: string | null
          meta_description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['blog_posts']['Insert']>
        Relationships: [
          {
            foreignKeyName: 'blog_posts_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'blog_categories'
            referencedColumns: ['id']
          }
        ]
      }
      dashboard_showcase_stats: {
        Row: {
          id: string
          value: string
          label: string
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          value: string
          label: string
          sort_order?: number
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['dashboard_showcase_stats']['Insert']>
        Relationships: []
      }
      dashboard_showcase_rows: {
        Row: {
          id: string
          label: string
          percent: number
          tone: 'verified' | 'flag' | 'muted'
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          label: string
          percent: number
          tone: 'verified' | 'flag' | 'muted'
          sort_order?: number
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['dashboard_showcase_rows']['Insert']>
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Lead = Database['public']['Tables']['leads']['Row']
export type NewsletterSubscriber = Database['public']['Tables']['newsletter_subscribers']['Row']
export type BlogCategory = Database['public']['Tables']['blog_categories']['Row']
export type BlogPost = Database['public']['Tables']['blog_posts']['Row']
export type DashboardShowcaseStat = Database['public']['Tables']['dashboard_showcase_stats']['Row']
export type DashboardShowcaseRow = Database['public']['Tables']['dashboard_showcase_rows']['Row']
