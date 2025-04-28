<template>
  <div class="ayat-card">
    <div class="header">
      <span class="surah-number">{{ ayat.surahNumber }}</span>
      <button class="bookmark-btn" @click="toggleBookmark">
        <svg class="icon"><use href="@/assets/icons/bookmark.svg"></use></svg>
      </button>
    </div>
    
    <p class="arabic-text" dir="rtl">{{ ayat.text }}</p>
    <div class="translation">{{ ayat.translation }}</div>

    <div class="actions">
      <button class="tafsir-btn" @click="showTafsir = !showTafsir">
        {{ showTafsir ? 'Скрыть тафсир' : 'Показать тафсир' }}
      </button>
    </div>

    <div v-if="showTafsir" class="tafsir-content">
      {{ ayat.tafsir }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ayat: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showTafsir: false
    }
  },
  methods: {
    toggleBookmark() {
      this.$emit('bookmark-toggle', this.ayat.id)
    }
  }
}
</script>

<style scoped>
.arabic-text {
  font-family: 'Amiri Quran', serif;
  font-size: 1.8rem;
  line-height: 2.5;
}
