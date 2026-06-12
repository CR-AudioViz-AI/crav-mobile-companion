// global.d.ts — type overrides for javari-mobile
// CR AudioViz AI · June 2026
import type { User as SupabaseUser } from "@supabase/supabase-js";

declare global {
  // Extend Supabase User type to allow flexible access
  type User = SupabaseUser & Record<string, unknown>;
}
