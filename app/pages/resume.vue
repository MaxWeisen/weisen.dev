<script setup lang="ts">
const resumeUrl
  = 'https://max-dev-portfolio.s3.us-west-1.amazonaws.com/resume/Max_Weisenberger_CV.pdf'
const fileName = 'Max_Weisenberger_CV.pdf'

const downloading = ref(false)

async function downloadResume() {
  downloading.value = true
  try {
    const blob = await $fetch<Blob>(resumeUrl, { responseType: 'blob' })
    const objectUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = objectUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(objectUrl)
  } catch {
    // Fall back to opening the PDF in a new tab if the download fails
    window.open(resumeUrl, '_blank', 'noopener,noreferrer')
  } finally {
    downloading.value = false
  }
}

useSeoMeta({
  title: 'Resume',
  ogTitle: 'Resume',
  description: 'View and download my resume.',
  ogDescription: 'View and download my resume.'
})
</script>

<template>
  <UPage>
    <UPageHero
      title="Resume"
      description="View my resume below or download a copy."
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center justify-between !py-6',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <UButton
          label="Download"
          icon="i-lucide-download"
          color="neutral"
          size="lg"
          :loading="downloading"
          @click="downloadResume"
        />
      </template>
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <div
        class="w-full overflow-hidden rounded-lg ring ring-default bg-elevated"
      >
        <iframe
          :src="`${resumeUrl}#view=FitH`"
          title="Max Weisenberger's resume"
          class="w-full aspect-[8.5/11]"
        />
      </div>
    </UPageSection>
  </UPage>
</template>
