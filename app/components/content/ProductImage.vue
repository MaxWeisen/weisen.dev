<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  width?: number | string
  maxHeight?: number | string
}>()

const toCssSize = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value

const maxWidth = computed(() => {
  if (props.width === undefined) return '280px'
  return toCssSize(props.width)
})

const maxHeight = computed(() =>
  props.maxHeight === undefined ? undefined : toCssSize(props.maxHeight)
)
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :style="{ maxWidth, maxHeight }"
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
  object-fit: contain;
}
</style>
