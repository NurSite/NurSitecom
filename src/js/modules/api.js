import { supabase } from '../supabase';

export async function fetchFavorites(userId) {
  const { data, error } = await supabase
    .from('favorites')
    .select('*')
    .eq('user_id', userId);

  if (error) throw new Error(error.message);
  return data;
}
