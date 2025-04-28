import { ref } from 'vue'

const cache = new Map()

export const useQuranAPI = () => {
  const fetchSurahs = async () => {
    try {
      if(cache.has('surahs')) return cache.get('surahs')

      const response = await fetch('https://api.quran.com/api/v4/chapters?language=ru')
      const data = await response.json()
      
      cache.set('surahs', data.chapters)
      return data.chapters
    } catch (error) {
      console.error('Ошибка загрузки сур:', error)
      return []
    }
  }

  return { fetchSurahs }
}
