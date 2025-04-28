<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright">&copy; {{ currentYear }} NurSite. Все права защищены.</p>
      <nav class="social-links">
        <a href="https://t.me/vuittonere" target="_blank" rel="noopener">
          <svg class="icon"><use href="@/assets/icons/telegram.svg"></use></svg>
        </a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--secondary-bg);
  padding: 2rem 1rem;
  margin-top: auto;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
