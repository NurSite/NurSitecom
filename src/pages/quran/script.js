import { renderChunked } from '../../js/utils/render-utils.js';
import { safeRender } from '../../js/utils/security-utils.js';

// Функция для загрузки и отображения суры
async function loadSurah(surah) {
  // Показываем скелетоны во время загрузки
  showSkeletons(10); // 10 скелетонов для примера
  
  // Рендерим аяты чанками для оптимизации производительности
  await renderChunked(surah.ayahs, (ayah) => {
    const card = document.createElement('div');
    card.classList.add('ayah-card');
    
    safeRender(`
      <div class="surah-number">${ayah.number}</div>
      <p class="arabic-text" dir="rtl">${ayah.text}</p>
      <p class="translation">${ayah.translation || ''}</p>
    `, card);
    
    DOM.grid.appendChild(card);
  });
  
  // Удаляем скелетоны после загрузки
  removeSkeletons();
}

// Вспомогательные функции для скелетонов
function showSkeletons(count) {
  for (let i = 0; i < count; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'surah-card skeleton';
    skeleton.style.height = '120px';
    DOM.grid.appendChild(skeleton);
  }
}

function removeSkeletons() {
  document.querySelectorAll('.skeleton').forEach(el => el.remove());
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  DOM.grid = document.querySelector('.grid-container');
  // Здесь должен быть вызов API для получения данных суры
  // loadSurah(surahData);
});
