const supabase = supabase.createClient(
  "https://iynvvfxtyuhvtcqkbsfu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bnZ2Znh0eXVodnRjcWtic2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNjA0NjAsImV4cCI6MjA2MDgzNjQ2MH0.-7B7-zKX1M44yyY7qncjKiLZ9Ort9jRjJq2-TW1FEj4"
);

function showForm(formName) {
  document.querySelectorAll('.form-container').forEach(f => f.classList.add('hidden'));
  document.querySelector(`.${formName}`).classList.remove('hidden');
}

document.getElementById('show-signup').onclick = () => showForm('signup-form');
document.getElementById('show-login').onclick = () => showForm('login-form');
document.getElementById('show-login-2').onclick = () => showForm('login-form');
document.getElementById('show-reset').onclick = () => showForm('reset-form');

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else window.location.href = "profile.html";
}

async function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const username = document.getElementById('signup-username').value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { username } }
  });

  if (error) alert(error.message);
  else alert("Письмо подтверждения отправлено.");
}

async function resetPassword() {
  const email = document.getElementById('reset-email').value;
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) alert(error.message);
  else alert("Письмо со ссылкой на сброс отправлено.");
}
// Отмена перезагрузки страницы и переключение форм
document.getElementById('show-signup').addEventListener('click', function (e) {
  e.preventDefault();
  showForm('signup-form');
});
document.getElementById('show-login').addEventListener('click', function (e) {
  e.preventDefault();
  showForm('login-form');
});
document.getElementById('show-login-2').addEventListener('click', function (e) {
  e.preventDefault();
  showForm('login-form');
});
document.getElementById('show-reset').addEventListener('click', function (e) {
  e.preventDefault();
  showForm('reset-form');
});