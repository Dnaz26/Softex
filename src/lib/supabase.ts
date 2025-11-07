import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qmmzkjnwkxwxgwcmspxv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtbXpram53a3h3eGd3Y21zcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MjI3MjYsImV4cCI6MjA3Nzk5ODcyNn0.5Z747QjslNUIFU0MYpFPHuBodYr-wmmPqMzdkAwh04A';

// Debug: Log configuration (remove in production)
console.log('🔧 Supabase Config:', {
  url: supabaseUrl,
  hasKey: !!supabaseAnonKey,
  keyLength: supabaseAnonKey?.length,
  keyPreview: supabaseAnonKey ? supabaseAnonKey.substring(0, 20) + '...' : 'MISSING',
  envUrl: import.meta.env.VITE_SUPABASE_URL,
  envKey: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing',
});

// Validate configuration
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Supabase configuration is missing!');
  console.error('URL:', supabaseUrl);
  console.error('Key:', supabaseAnonKey ? 'Present' : 'MISSING');
}

// Create Supabase client with better error handling
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    fetch: (url, options: RequestInit = {}) => {
      console.log('🌐 Supabase Request:', { url, method: options.method });
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
        },
      }).catch((error) => {
        console.error('❌ Fetch Error:', error);
        throw error;
      });
    },
  },
});

// Export types for TypeScript (optional, but recommended)
export type Database = any; // Replace with your database types if you have them


