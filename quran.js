
fetch('full_quran.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('quran-container');
    data.surahs.forEach(surah => {
      const surahDiv = document.createElement('div');
      surahDiv.className = 'surah';
      surahDiv.id = `surah-${surah.id}`;
      const title = document.createElement('h2');
      title.textContent = `${surah.id}. ${surah.name}`;
      surahDiv.appendChild(title);

      surah.ayahs.forEach((ayah, index) => {
        const ayahDiv = document.createElement('div');
        ayahDiv.className = 'ayah';
        ayahDiv.innerHTML = `<strong>${index + 1}</strong>: ${ayah.text}<br>
                             <em>${ayah.translation}</em><br>
                             <button onclick="this.nextElementSibling.style.display = (this.nextElementSibling.style.display === 'block' ? 'none' : 'block')">
                               РџРѕСЃРјРѕС‚СЂРµС‚СЊ РўР°С„СЃРёСЂ
                             </button>
                             <div class='tafsir'>${ayah.tafsir}</div>`;
        surahDiv.appendChild(ayahDiv);
      });

      container.appendChild(surahDiv);
    });
  });