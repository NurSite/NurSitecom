import { fetchWithCache } from './cache-storage.js';

const API_BASE = 'https://api.alquran.cloud/v1';
const TRANSLATION = 'ru.porokhova';

export async function getSurah(surahNumber) {
  const url = `${API_BASE}/surah/${surahNumber}/${TRANSLATION}`;
  const { data } = await fetchWithCache(url);
  
  return {
    number: data.number,
    name: data.englishName,
    arabicName: data.name,
    ayahs: data.ayahs.map(ayah => ({
      number: ayah.numberInSurah,
      text: ayah.text,
      translation: ayah.translation || ayah.text,
      audio: ayah.audio
    }))
  };
}

export async function getDailyAyat() {
  const allSurahs = await fetchWithCache(`${API_BASE}/surah`);
  const randomSurah = allSurahs.data[Math.floor(Math.random() * 114)];
  const ayahs = await getSurah(randomSurah.number);
  const randomAyah = ayahs.ayahs[Math.floor(Math.random() * ayahs.ayahs.length)];
  
  return {
    ...randomAyah,
    surahName: randomSurah.englishName
  };
}
