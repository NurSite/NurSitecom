/**
 * Постепенный рендеринг
 * @param {Array} data
 * @param {Function} renderFn
 * @param {number} chunkSize
 */
export async function renderChunked(data, renderFn, chunkSize = 10) {
  for (let i = 0; i < data.length; i += chunkSize) {
    await new Promise(resolve => {
      setTimeout(() => {
        data.slice(i, i + chunkSize).forEach(renderFn);
        resolve();
      }, 0);
    });
  }
}
