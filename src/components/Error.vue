<script setup lang="ts">
type ErrorProps = { message: string };

const props = defineProps<ErrorProps>();
</script>

<template>
  <div id="error-container">
    <v-icon id="error__icon" name="md-erroroutline" />
    {{ message }}
  </div>
</template>

<style scoped>
#error-container {
  display: flex;
  align-items: center;
  padding: .5rem;
  color: #ff5959;
  background-color: #401f1f;
  border: 1px solid #ff5959;
  border-radius: .7rem;
}

#error__icon {
  margin-right: .3rem;
}
</style>
