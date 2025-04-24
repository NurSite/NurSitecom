document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("favorites-container");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    container.innerHTML = "<p>У вас пока нет избранных аятов.</p>";
    return;
  }

  fetch("quran.json")
    .then(res => res.json())
    .then(quran => {
      favorites.forEach(fav => {
        const surah = quran[fav.surahIndex];
        const ayah = surah.ayahs[fav.ayahIndex];

        const ayahEl = document.createElement("div");
        ayahEl.className = "ayah";
        ayahEl.innerHTML = `
          <h3>${surah.name}, аят ${fav.ayahIndex + 1}</h3>
          <p class="text-ar">${ayah.text}</p>
          <p class="text-ru">${ayah.translation}</p>
        `;
        container.appendChild(ayahEl);
      });
    });
});