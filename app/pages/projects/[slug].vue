<script setup lang="ts">
const route = useRoute();

const { data: project } = await useAsyncData(
  `project-${route.params.slug}`,
  async () => {
    return queryCollection("projects").path(route.path).first();
  },
);
</script>

<template>
  <Motion
    :initial="{
      scale: 1.1,
      opacity: 0,
      filter: 'blur(20px)',
    }"
    :animate="{
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
    }"
    :transition="{
      duration: 0.6,
      delay: 0.1,
    }"
  >
    <UPage>
      <UPageHeader
        :title="project?.title"
        :description="project?.description"
        :headline="project?.company"
      />
      <UPageBody>
        <ContentRenderer v-if="project?.body" :value="project" />
      </UPageBody>
    </UPage>
  </Motion>
</template>
