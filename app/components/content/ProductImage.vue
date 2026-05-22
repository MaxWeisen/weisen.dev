<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  width?: number
}>()
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :style="{ maxWidth: `${width ?? 280}px` }"
    class="product-image"
  >
</template>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 1.5rem auto;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}
</style>
