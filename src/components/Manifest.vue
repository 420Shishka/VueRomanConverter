<script setup lang="ts">
type RomanNumber = "I" | "V" | "X" | "L" | "C" | "D" | "M";

const manifest = new Map<RomanNumber, number>([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);
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

<style scoped></style>
