/**
 * Рендерит массив данных чанками для оптимизации производительности
 * @param {Array} data - Массив данных
 * @param {Function} renderCallback - Функция рендеринга каждого элемента
 * @param {number} chunkSize - Размер чанка (по умолчанию 10)
 */
export async function renderChunked(data, renderCallback, chunkSize = 10) {
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    
    // Используем requestIdleCallback для оптимизации рендеринга
    await new Promise(resolve => {
      requestIdleCallback(() => {
        chunk.forEach(item => renderCallback(item));
        resolve();
      });
    });
  }
}
