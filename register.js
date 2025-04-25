const supabaseUrl = 'https://iynvvfxtyuhvtcqkbsfu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bnZ2Znh0eXVodnRjcWtic2Z1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTI2MDQ2MCwiZXhwIjoyMDYwODM2NDYwfQ.jnAYPz8dhIX4V2XpYgjSFw1cjp5RZgAcH4i2qypDY7s '; // Твой key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Переключение между формами
document.querySelectorAll('.switch-form').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.dataset.target;
    document.getElementById('login-form').classList.toggle('hidden', target !== 'login');
    document.getElementById('signup-form').classList.toggle('hidden', target !== 'signup');
  });
});

// Регистрация
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const username = document.getElementById('signup-username').value;

  const { user, error } = await supabase.auth.signUp({ email, password });

  if (error) return alert('Ошибка: ' + error.message);

  // Добавим в таблицу users
  const { data, error: insertError } = await supabase.from('users').insert([
    { id: user.id, email, username, streak: 0, role: 'user' }
  ]);

  if (insertError) console.error(insertError);
  alert('Регистрация успешна!');
});

// Вход
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return alert('Ошибка: ' + error.message);

  const user = data.user;

  // Проверим, есть ли пользователь в таблице `users`
  const { data: existingUser, error: fetchError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id);

  if (fetchError) console.error(fetchError);

  if (!existingUser || existingUser.length === 0) {
    await supabase.from('users').insert([
      { id: user.id, email: user.email, username: '', streak: 0, role: 'user' }
    ]);
  }

  alert('Успешный вход!');
});