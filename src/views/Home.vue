<template>
  <div class="home-page">
    <Header />
    <main class="main-content">
      <section class="hero-section">
        <h2>Аят дня</h2>
        <div class="arabic-text">{{ dailyAyat.text }}</div>
        <p class="translation">{{ dailyAyat.translation }}</p>
        <button 
          class="main-cta"
          @click="$router.push('/quran')"
        >
          Начать чтение
        </button>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import { fetchDailyAyat } from '@/utils/api/quran'

export default {
  components: { Header, Footer },
  data() {
    return {
      dailyAyat: {}
    }
  },
  async mounted() {
    try {
      this.dailyAyat = await fetchDailyAyat()
    } catch (error) {
      console.error('Ошибка загрузки:', error)
      this.dailyAyat = {
        text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        translation: 'Во имя Аллаха, Милостивого, Милующего.'
      }
    }
  }
}
</script>

<style>
.arabic-text {
  font-family: 'Amiri Quran', serif;
  font-size: 2rem;
  margin: 2rem 0;
}

.translation {
  color: #4a5568;
  font-size: 1.1rem;
}
</style>
