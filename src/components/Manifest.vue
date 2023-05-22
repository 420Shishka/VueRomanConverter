<script setup lang="ts">
import { manifest } from '../declarations';

</script>

<template>
  <div id="manifest-container">
    <ul id="manifest">
      <li v-for="[roman, value] in manifest.entries()">
        {{ roman }} - {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#manifest-container {
  border-radius: 25px;
  background-color: #2f2f2f;
}

#manifest {
  padding: 1.5rem;
  list-style: none;
}
</style>
