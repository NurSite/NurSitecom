let _csrfToken = null;

export function getCSRFToken() {
  if (!_csrfToken) {
    _csrfToken = crypto.randomUUID();
    localStorage.setItem('csrf_token', _csrfToken);
  }
  return _csrfToken;
}

export async function secureFetch(url, options = {}) {
  const headers = {
    'X-CSRF-Token': getCSRFToken(),
    ...options.headers
  };
  
  return fetch(url, { ...options, headers });
}
