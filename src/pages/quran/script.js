// Импорт всех зависимостей
import { getSurah, getDailyAyat } from '../../js/modules/quran.js';
import { fetchWithCache } from '../../js/modules/cache-storage.js';
import { fadeIn, fadeOut } from '../../js/utils/dom-utils.js';
import { formatDate } from '../../js/utils/time-utils.js';

// DOM-элементы
const surahList = document.getElementById('surahList');
const dailyAyatCard = document.getElementById('dailyAyat');
const loadingIndicator = document.getElementById('loading');

// Загрузка списка сур
async function loadSurahs() {
  try {
    fadeIn(loadingIndicator);
    
    const surahs = await getSurah(1); // Загружаем первую суру для примера
    surahList.innerHTML = ''; // Очищаем список

    surahs.ayahs.forEach(ayah => {
      const ayahElement = document.createElement('div');
      ayahElement.className = 'ayah-card';
      ayahElement.innerHTML = `
        <p class="arabic">${ayah.text}</p>
        <p class="translation">${ayah.translation}</p>
        <span class="number">${ayah.number}</span>
      `;
      surahList.appendChild(ayahElement);
      fadeIn(ayahElement);
    });

  } catch (error) {
    console.error('Ошибка загрузки сур:', error);
    surahList.innerHTML = '<p class="error">Не удалось загрузить суры. Проверьте интернет.</p>';
  } finally {
    fadeOut(loadingIndicator);
  }
}

// Загрузка ежедневного аята
async function loadDailyAyat() {
  try {
    const ayat = await getDailyAyat();
    dailyAyatCard.innerHTML = `
      <h3>Аят дня (${formatDate(new Date())})</h3>
      <p class="arabic">${ayat.text}</p>
      <p class="translation">${ayat.translation}</p>
      <button id="saveAyat">Сохранить</button>
    `;
    fadeIn(dailyAyatCard);
  } catch (error) {
    dailyAyatCard.innerHTML = '<p class="error">Не удалось загрузить аят дня</p>';
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  loadSurahs();
  loadDailyAyat();

  // Сохранение аята
  document.addEventListener('click', (e) => {
    if (e.target.id === 'saveAyat') {
      e.target.textContent = 'Сохранено ✓';
      setTimeout(() => fadeOut(e.target), 2000);
    }
  });
});
