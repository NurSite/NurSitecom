function applyTheme(theme) {
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

function setTheme(theme) {
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'system';
  applyTheme(savedTheme);
}

initTheme();

// Переключатели
document.querySelectorAll('[data-set-theme]').forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.getAttribute('data-set-theme');
    setTheme(theme);
  });
});