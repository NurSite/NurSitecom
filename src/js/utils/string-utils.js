/**
 * Обрезает текст с добавлением многоточия
 * @param {string} text 
 * @param {number} maxLength 
 * @returns {string}
 */
export function truncate(text, maxLength) {
  return text.length > maxLength 
    ? text.substring(0, maxLength) + '...' 
    : text;
}

/**
 * Первая буква заглавная
 * @param {string} str 
 * @returns {string}
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Генератор случайного ID
 * @param {number} length 
 * @returns {string}
 */
export function generateId(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}
