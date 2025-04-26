const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 часа

/**
 * Запрос с кешированием
 * @param {string} url 
 * @returns {Promise<Object>}
 */
export async function fetchWithCache(url) {
  const cacheKey = `cache_${btoa(url)}`;
  const cached = localStorage.getItem(cacheKey);
  
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL) {
      return data;
    }
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
  const data = await response.json();
  localStorage.setItem(cacheKey, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
  
  return data;
}
