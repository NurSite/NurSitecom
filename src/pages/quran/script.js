// script.js
import { getSurahList } from '../../js/modules/quran.js';
import { fadeIn } from '../../js/utils/dom-utils.js';

async function loadSurahs() {
  const surahs = getSurahList();
  const container = document.getElementById('surahList');
  
  surahs.forEach(surah => {
    const item = document.createElement('div');
    item.className = 'surah-item';
    item.innerHTML = `
      <h3>${surah.name}</h3>
      <p>Аятов: ${surah.ayahs}</p>
    `;
    container.appendChild(item);
    fadeIn(item);
  });
}

loadSurahs();
