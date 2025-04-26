import { getSurah, getDailyAyat } from '../../js/modules/quran.js';
import { fadeIn, fadeOut } from '../../js/utils/dom-utils.js';

const DOM = {
  loading: document.getElementById('loading'),
  content: document.getElementById('content'),
  grid: document.getElementById('surahGrid')
};

async function initPage() {
  try {
    // Загрузка первой суры для примера
    const surah = await getSurah(1);
    
    surah.ayahs.forEach(ayah => {
      const card = document.createElement('div');
      card.className = 'surah-card';
      card.innerHTML = `
        <div class="surah-number">${ayah.number}</div>
        <p class="arabic-text" dir="rtl">${ayah.text}</p>
        <p class="translation">${ayah.translation}</p>
      `;
      DOM.grid.appendChild(card);
    });
    
    fadeOut(DOM.loading);
    fadeIn(DOM.content);
  } catch (error) {
    console.error('Ошибка загрузки:', error);
    DOM.loading.innerHTML = '<p>Ошибка загрузки данных</p>';
  }
}

document.addEventListener('DOMContentLoaded', initPage);
