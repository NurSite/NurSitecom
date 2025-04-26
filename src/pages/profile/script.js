// script.js
import { supabase } from '../../js/supabase.js';
import { Storage } from '../../js/modules/storage.js';
import { formatDate } from '../../js/utils/time-utils.js';

async function loadProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  
  document.getElementById('avatar').src = 
    user.user_metadata?.avatar_url || '/assets/default-avatar.png';
  document.getElementById('username').textContent = user.email;
  
  // Загрузка статистики
  const streak = Storage.get('streak') || 0;
  document.getElementById('streak').textContent = `Дней подряд: ${streak}`;
}

loadProfile();
