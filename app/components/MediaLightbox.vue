<script setup lang="ts">
const open = defineModel<boolean>({ default: false })

const close = () => {
  open.value = false
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
}

watch(open, (isOpen) => {
  if (import.meta.server) {
    return
  }
  document.body.style.overflow = isOpen ? 'hidden' : ''

  if (isOpen) {
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  if (import.meta.server) return
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div
        v-if="open"
        class="lightbox-backdrop"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="solid"
          size="lg"
          square
          class="lightbox-close"
          :style="{ position: 'fixed', top: '1.25rem', right: '1.25rem', zIndex: 101 }"
          aria-label="Close"
          @click="close"
        />
        <div
          class="lightbox-content"
          @click.self="close"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
}

.lightbox-close {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 101;
}

.lightbox-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
}

.lightbox-content :deep(img),
.lightbox-content :deep(video) {
  max-width: 95vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
