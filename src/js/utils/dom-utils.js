/**
 * Показывает элемент с анимацией
 * @param {HTMLElement} element 
 */
export function fadeIn(element) {
  element.style.opacity = '0';
  element.style.display = 'block';
  requestAnimationFrame(() => {
    element.style.opacity = '1';
    element.style.transition = 'opacity 300ms ease-out';
  });
}

/**
 * Скрывает элемент с анимацией
 * @param {HTMLElement} element 
 */
export function fadeOut(element) {
  element.style.opacity = '1';
  element.style.transition = 'opacity 300ms ease-out';
  element.style.opacity = '0';
  setTimeout(() => element.style.display = 'none', 300);
}

/**
 * Динамическая загрузка скрипта
 * @param {string} src 
 * @returns {Promise<void>}
 */
export function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
