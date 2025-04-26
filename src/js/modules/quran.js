import surahs from '../../data/quran.json';

export function getSurahList() {
  return surahs.map(surah => ({
    id: surah.number,
    name: surah.name,
    ayahs: surah.ayahs.length
  }));
}

export function getDailyAyat() {
  const randomSurah = surahs[Math.floor(Math.random() * surahs.length)];
  const randomAyat = randomSurah.ayahs[Math.floor(Math.random() * randomSurah.ayahs.length)];
  return {
    surah: randomSurah.name,
    text: randomAyat.text,
    number: randomAyat.number
  };
}
