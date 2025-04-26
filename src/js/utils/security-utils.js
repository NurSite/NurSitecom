/**
 * Безопасный рендеринг HTML (санитизация контента)
 * @param {string} html - HTML строка
 * @param {HTMLElement} element - Элемент для рендеринга
 */
export function safeRender(html, element) {
  // Простая санитизация (в реальном проекте используйте DOMPurify)
  const sanitized = html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  
  element.innerHTML = sanitized;
}
