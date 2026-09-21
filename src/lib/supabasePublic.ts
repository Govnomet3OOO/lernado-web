export const supabasePublic = {
  url:
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    "https://iyndraklxrzmikgygwyr.supabase.co",
  publishableKey:
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    "sb_publishable_4WJ6r3LKN52g31o2-OAqyg_T9VLQSTG",
  anonKey:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bmRyYWtseHJ6bWlrZ3lnd3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzNzczOTQsImV4cCI6MjEwMTk1MzM5NH0.H61_4XXvvyaaZulMP79P_V668DwG0DZ_ugmfXrGAseQ",
} as const;
