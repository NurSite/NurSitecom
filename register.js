const supabase = supabase.createClient(
  'https://iynvvfxtyuhvtcqkbsfu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bnZ2Znh0eXVodnRjcWtic2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNjA0NjAsImV4cCI6MjA2MDgzNjQ2MH0.-7B7-zKX1M44yyY7qncjKiLZ9Ort9jRjJq2-TW1FEj4'
);

// Вход
document.getElementById('login').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    alert('Ошибка входа: ' + error.message);
  } else {
    window.location.href = 'profile.html';
  }
});

// Регистрация
document.getElementById('signup').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username }
    }
  });

  if (error) {
    alert('Ошибка регистрации: ' + error.message);
  } else {
    alert('Проверьте email для подтверждения');
  }
});

// Сброс пароля
document.getElementById('reset').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('reset-email').value;

  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    alert('Ошибка: ' + error.message);
  } else {
    alert('Письмо для сброса отправлено.');
  }
});

// Переключение между формами
document.querySelectorAll('.switch-form').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.target;

    document.querySelectorAll('.form').forEach(form => form.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
  });
});