// script.js
import { signIn } from '../../js/modules/auth.js';
import { serializeForm, validateEmail } from '../../js/utils/form-utils.js';
import { fadeIn } from '../../js/utils/dom-utils.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = serializeForm(form);
  
  if (!validateEmail(data.email)) {
    const error = document.getElementById('error');
    error.textContent = 'Некорректный email';
    fadeIn(error);
    return;
  }

  try {
    await signIn(data.email, data.password);
    window.location.href = '/profile';
  } catch (err) {
    document.getElementById('error').textContent = err.message;
  }
});
