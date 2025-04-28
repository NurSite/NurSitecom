<template>
  <div class="home-page">
    <Header />
    
    <main class="main-content">
      <section class="hero-section">
        <div class="daily-ayat">
          <h2>Аят дня</h2>
          <div class="arabic-text">{{ dailyAyat.text }}</div>
          <p class="translation">{{ dailyAyat.translation }}</p>
        </div>
        
        <div class="cta-buttons">
          <button 
            class="main-cta"
            @click="$router.push('/quran')"
          >
            Начать чтение
          </button>
        </div>
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
    this.dailyAyat = await fetchDailyAyat()
  }
}
</script>

<style>
.hero-section {
  text-align: center;
  padding: 4rem 1rem;
}

.main-cta {
  background: var(--accent-base);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
}
</style>
