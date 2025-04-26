/**
 * Сериализует форму в объект
 * @param {HTMLFormElement} form 
 * @returns {Object}
 */
export function serializeForm(form) {
  return Object.fromEntries(new FormData(form));
}

/**
 * Валидация email
 * @param {string} email
 * @returns {boolean} 
 */
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Сброс ошибок формы
 * @param {HTMLFormElement} form 
 */
export function resetFormErrors(form) {
  form.querySelectorAll('.error').forEach(el => {
    el.textContent = '';
    el.classList.add('hidden');
  });
}
