<template>
  <div class="surah-list">
    <div 
      v-for="surah in surahs" 
      :key="surah.id" 
      class="surah-item"
      @click="selectSurah(surah.id)"
    >
      <div class="surah-info">
        <span class="number">{{ surah.id }}</span>
        <div class="text-content">
          <h3 class="arabic-name">{{ surah.name_arabic }}</h3>
          <p class="translated-name">{{ surah.translated_name.name }}</p>
        </div>
      </div>
      <span class="verses-count">{{ surah.verses_count }} аятов</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    surahs: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectSurah(id) {
      this.$router.push(`/quran/${id}`)
    }
  }
}
</script>

<style scoped>
.surah-item {
  background: var(--secondary-bg);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  cursor: pointer;
}

.surah-item:hover {
  transform: translateY(-3px);
}

.arabic-name {
  font-family: 'Amiri Quran', serif;
  font-size: 1.8rem;
  margin: 0;
}
</style>
