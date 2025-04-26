import { supabase } from '../supabase';

export async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) throw new Error(error.message);
  return user;
}

export async function signIn(email, password) {
  const { user, error } = await supabase.auth.signIn({
    email,
    password
  });

  if (error) throw new Error(error.message);
  return user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
