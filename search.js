const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const searchDiv = document.querySelector('.search');
const results = document.getElementById('results');

// Пример данных сур
const surahs = [
  { number: 1, arabic: 'الفاتحة', russian: 'Аль-Фатиха' },
  { number: 2, arabic: 'البقرة', russian: 'Аль-Бакара' },
  { number: 3, arabic: 'آل عمران', russian: 'Аль-Имран' },
  { number: 4, arabic: 'النساء', russian: 'Ан-Ниса' },
  { number: 5, arabic: 'المائدة', russian: 'Аль-Маида' },
  // Добавьте остальные суры по аналогии
];

btn.addEventListener('click', () => {
  searchDiv.classList.toggle('active');
  input.focus();
});

input.addEventListener('input', () => {
  const query = input.value.trim().toLowerCase();
  results.innerHTML = '';

  if (query.length === 0) return;

  const filtered = surahs.filter(surah =>
    surah.number.toString().includes(query) ||
    surah.arabic.includes(query) ||
    surah.russian.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    results.innerHTML = '<li>Ничего не найдено</li>';
    return;
  }

  filtered.forEach(surah => {
    const li = document.createElement('li');
    li.textContent = `${surah.number}. ${surah.arabic} — ${surah.russian}`;
    results.appendChild(li);
  });
});