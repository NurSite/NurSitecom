/**
 * Очистка HTML-строк
 * @param {string} str
 * @returns {string}
 */
export function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Безопасный рендеринг
 * @param {string} text
 * @param {HTMLElement} element
 */
export function safeRender(text, element) {
  element.innerHTML = sanitize(text);
}
