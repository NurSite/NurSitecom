/**
 * Форматирование даты для UI
 * @param {Date} date 
 * @returns {string}
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

/**
 * Относительное время (например, "2 часа назад")
 * @param {Date} pastDate 
 * @returns {string}
 */
export function timeAgo(pastDate) {
  const seconds = Math.floor((new Date() - pastDate) / 1000);
  
  const intervals = {
    год: 31536000,
    месяц: 2592000,
    неделя: 604800,
    день: 86400,
    час: 3600,
    минута: 60
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? '' : unit.endsWith('к') ? 'а' : 'ов'} назад`;
    }
  }

  return 'только что';
}
