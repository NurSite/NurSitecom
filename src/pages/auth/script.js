// Импорты (пути исправлены)
import { signIn, signUp } from '../../js/modules/auth.js';
import { serializeForm, validateEmail } from '../../js/utils/form-utils.js';
import { fadeIn } from '../../js/utils/dom-utils.js';

// Логика формы входа
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = serializeForm(loginForm);
    
    // Валидация email
    if (!validateEmail(formData.email)) {
      const errorElement = document.getElementById('loginError');
      errorElement.textContent = 'Некорректный email';
      fadeIn(errorElement);
      return;
    }

    // Авторизация
    try {
      await signIn(formData.email, formData.password);
      window.location.href = '/profile'; // Перенаправление
    } catch (error) {
      document.getElementById('loginError').textContent = error.message;
    }
  });
}

// Логика формы регистрации (аналогично)
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = serializeForm(registerForm);
    
    if (formData.password !== formData.confirmPassword) {
      document.getElementById('registerError').textContent = 'Пароли не совпадают';
      return;
    }

    try {
      await signUp(formData.email, formData.password);
      alert('Регистрация успешна! Проверьте почту.');
      window.location.href = '/login';
    } catch (error) {
      document.getElementById('registerError').textContent = error.message;
    }
  });
}
