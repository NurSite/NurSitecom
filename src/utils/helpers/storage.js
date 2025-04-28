// Локальное хранилище с TTL
export const Storage = {
  set(key, value, ttl = 3600) {
    const item = {
      value,
      expires: Date.now() + ttl * 1000
    }
    localStorage.setItem(key, JSON.stringify(item))
  },

  get(key) {
    const item = JSON.parse(localStorage.getItem(key))
    return item?.expires > Date.now() ? item.value : null
  }
}
