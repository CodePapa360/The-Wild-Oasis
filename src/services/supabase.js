import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qfvpyreitzgxuimnvjpy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmdnB5cmVpdHpneHVpbW52anB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5NjE2NDQsImV4cCI6MjAxMzUzNzY0NH0.mWghnxwg5nWbtZmYPaqqncJxOUyuOMc4Evr02vUKKFI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
