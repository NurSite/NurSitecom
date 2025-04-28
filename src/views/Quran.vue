<template>
  <div class="quran-page">
    <AppHeader />
    <div class="surah-list">
      <div v-for="surah in surahs" :key="surah.id" class="surah-item">
        {{ surah.name_arabic }}
      </div>
    </div>
  </div>
</template>

<script>
import { fetchSurahs } from '@/utils/api/quran';
import AppHeader from '@/components/Layout/Header.vue';

export default {
  components: { AppHeader },
  data() {
    return { surahs: [] };
  },
  async mounted() {
    this.surahs = (await fetchSurahs()).chapters;
  }
};
</script>
