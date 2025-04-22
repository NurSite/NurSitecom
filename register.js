import { supabase } from './supabase.js';

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
        streak: 0,
        role: 'user'
      }
    }
  });

  const successMsg = document.getElementById('success-message');
  const errorMsg = document.getElementById('error-message');

  if (error) {
    successMsg.textContent = '';
    errorMsg.textContent = 'Ошибка: ' + error.message;
  } else {
    errorMsg.textContent = '';
    successMsg.textContent = 'Письмо для подтверждения отправлено!';
  }
});