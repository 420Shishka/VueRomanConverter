<script setup lang="ts">
import Header from "./components/Header.vue";
import Converter from "./components/Converter.vue";
import Manifest from "./components/Manifest.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />

  <main class="p-layout">
    <div class="content-column">
      <Converter />
    </div>
    <div class="content-column">
      <Manifest />
    </div>
  </main>

  <Footer />
</template>

<style scoped>
main {
  display: flex;
  flex: 1 1 auto;
  width: 65%;
}

.content-column {
  width: 50%;
}
</style>
