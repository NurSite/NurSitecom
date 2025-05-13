import { supabase } from './supabase.js';

// Регистрация пользователя
export async function signUp(email, password, username) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username: username },
    },
  });

  if (error) {
    alert('Ошибка регистрации: ' + error.message);
    return;
  }

  alert('Письмо для подтверждения отправлено на почту');
}

// Вход пользователя
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Ошибка входа: ' + error.message);
    return;
  }

  alert('Успешный вход');
  // Перенаправление на главную или профиль
  window.location.href = '/profile.html';
}

// Сброс пароля
export async function resetPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    alert('Ошибка сброса пароля: ' + error.message);
    return;
  }

  alert('Инструкция по сбросу отправлена на почту');
}
