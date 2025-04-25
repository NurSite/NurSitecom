const supabaseUrl = 'https://iynvvfxtyuhvtcqkbsfu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bnZ2Znh0eXVodnRjcWtic2Z1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTI2MDQ2MCwiZXhwIjoyMDYwODM2NDYwfQ.jnAYPz8dhIX4V2XpYgjSFw1cjp5RZgAcH4i2qypDY7s 

// Форма входа
document.getElementById('login-form').addEventListener('submit', async (e) => {
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

// Форма регистрации
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const username = document.getElementById('signup-username').value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username
      }
    }
  });

  if (error) {
    alert('Ошибка регистрации: ' + error.message);
  } else {
    alert('Подтвердите email для завершения регистрации.');
  }
});

// Сброс пароля
document.getElementById('reset-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('reset-email').value;
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    alert('Ошибка: ' + error.message);
  } else {
    alert('Письмо для сброса пароля отправлено на почту.');
  }
});

// Переключение между формами
document.querySelectorAll('.switch-form').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('reset-form').classList.add('hidden');

    const target = link.dataset.target;
    document.getElementById(`${target}-form`).classList.remove('hidden');
  });
}); 