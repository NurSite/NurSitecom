import { Storage } from './storage'

export const Auth = {
  login(token) {
    Storage.set('auth_token', token, 86400) // 24 часа
  },

  logout() {
    Storage.set('auth_token', null, 0)
  }
}
