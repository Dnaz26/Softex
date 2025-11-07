// Test Supabase connection
import { supabase } from './supabase';

export async function testSupabaseConnection() {
  console.log('🧪 Testing Supabase connection...');
  
  try {
    // Test 1: Check if we can reach Supabase
    const { data: healthCheck, error: healthError } = await supabase
      .from('_health')
      .select('*')
      .limit(1);
    
    if (healthError && !healthError.message.includes('relation "_health" does not exist')) {
      console.error('❌ Health check failed:', healthError);
    } else {
      console.log('✅ Supabase connection is working!');
    }
    
    // Test 2: Try auth status
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.warn('⚠️ Session check warning:', sessionError);
    } else {
      console.log('✅ Auth service is accessible');
    }
    
    return { success: true };
  } catch (error: any) {
    console.error('❌ Supabase connection test failed:', error);
    
    if (error.message?.includes('fetch')) {
      console.error('Network error - possible causes:');
      console.error('1. Supabase project might be paused (check dashboard)');
      console.error('2. CORS issue (should not happen with Supabase)');
      console.error('3. Internet connection problem');
      console.error('4. Firewall blocking requests');
    }
    
    return { success: false, error: error.message };
  }
}

