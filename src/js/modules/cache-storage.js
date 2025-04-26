/**
 * Кеширование данных с временем жизни
 * @param {string} url - URL для запроса
 * @param {number} ttl - Время жизни кеша в миллисекундах (по умолчанию 24 часа)
 */
export async function fetchWithCache(url, ttl = 86400000) {
  const cacheKey = `cache_${btoa(url)}`;
  
  // Проверка кеша
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    if (Date.now() - timestamp < ttl) {
      return data;
    }
  }

  // Новый запрос
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
  const data = await response.json();
  localStorage.setItem(cacheKey, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
  
  return data;
}

/**
 * Очистка просроченного кеша
 */
export function clearExpiredCache() {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('cache_')) {
      const { timestamp } = JSON.parse(localStorage.getItem(key));
      if (Date.now() - timestamp > 86400000) {
        localStorage.removeItem(key);
      }
    }
  });
}
