<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  width?: number | string
}>()

const maxWidth = computed(() => {
  if (props.width === undefined) return '280px'
  return typeof props.width === 'number' ? `${props.width}px` : props.width
})
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :style="{ maxWidth }"
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
