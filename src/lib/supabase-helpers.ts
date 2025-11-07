// Supabase helper functions
import { supabase } from './supabase';

/**
 * Example: Get all records from a table
 */
export async function getAllRecords(tableName: string) {
  const { data, error } = await supabase
    .from(tableName)
    .select('*');
  
  if (error) {
    console.error('Error fetching records:', error);
    throw error;
  }
  
  return data;
}

/**
 * Example: Insert a new record
 */
export async function insertRecord(tableName: string, record: Record<string, any>) {
  const { data, error } = await supabase
    .from(tableName)
    .insert(record)
    .select()
    .single();
  
  if (error) {
    console.error('Error inserting record:', error);
    throw error;
  }
  
  return data;
}

/**
 * Example: Update a record
 */
export async function updateRecord(
  tableName: string,
  id: string | number,
  updates: Record<string, any>
) {
  const { data, error } = await supabase
    .from(tableName)
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating record:', error);
    throw error;
  }
  
  return data;
}

/**
 * Example: Delete a record
 */
export async function deleteRecord(tableName: string, id: string | number) {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting record:', error);
    throw error;
  }
}

/**
 * Example: Sign up a new user
 */
export async function signUpUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) {
    console.error('Error signing up:', error);
    throw error;
  }
  
  return data;
}

/**
 * Example: Sign in a user
 */
export async function signInUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    console.error('Error signing in:', error);
    throw error;
  }
  
  return data;
}

/**
 * Example: Sign out current user
 */
export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

/**
 * Example: Get current user
 */
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error('Error getting user:', error);
    throw error;
  }
  
  return user;
}


