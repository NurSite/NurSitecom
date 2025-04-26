import { fetchWithCache } from './cache-storage.js';
import { handleApiError } from '../utils/api.js';

const API_BASE = 'https://api.alquran.cloud/v1';
const TRANSLATION = 'ru.porokhova';

/**
 * Получает суру с кешированием
 * @param {number} surahNumber (1-114)
 * @returns {Promise<Object>}
 */
export async function getSurah(surahNumber) {
  try {
    const url = `${API_BASE}/surah/${surahNumber}/${TRANSLATION}`;
    const { data } = await fetchWithCache(url);
    
    return {
      number: data.number,
      name: data.englishName,
      arabicName: data.name,
      ayahs: data.ayahs.map(formatAyah)
    };
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

/**
 * Получает конкретный аят
 * @param {number} surahNumber 
 * @param {number} ayahNumber 
 * @returns {Promise<Object>}
 */
export async function getAyah(surahNumber, ayahNumber) {
  try {
    const url = `${API_BASE}/ayah/${surahNumber}:${ayahNumber}/${TRANSLATION}`;
    const { data } = await fetchWithCache(url);
    return formatAyah(data);
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

function formatAyah(ayah) {
  return {
    number: ayah.numberInSurah,
    text: ayah.text,
    translation: ayah.translation || ayah.text,
    audio: ayah.audio || null
  };
}
