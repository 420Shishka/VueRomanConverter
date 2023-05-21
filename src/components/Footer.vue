<script setup lang="ts">
</script>

<template>
  <footer class="p-layout">
    <span>Powered by</span>
    <a href="https://vitejs.dev" target="_blank">
      <img src="../assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <span>and</span>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex: 0 1 auto;
  align-items: center;
}

.logo {
  padding: 0 0.3rem;
  height: 1.5rem;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
