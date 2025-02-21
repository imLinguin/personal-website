<template>
  <div class="root markdown">
    <div v-if="page" class="container">
      <h1>{{ page.title }}</h1>
      <NuxtLink to="/blog" class="small">Back</NuxtLink>
      <span class="small">{{ createdAt }}</span>
      <ContentRenderer class="md-content" :value="page" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.params.slug, () =>
  queryCollection('blog').path(`/blog/${route.params.slug}`).first()
)

const websiteOrigin = 'https://linguin.dev'
const websiteUrl = computed(() => {
  return `${websiteOrigin}${route.path}`
})
const createdAt = computed(() => {
  return new Date(page.value.meta.createdAt).toLocaleDateString()
})

useHead({
  title: page.value.title,
  meta: [
    { description: page.value.description },
    { property: 'og:title', content: page.value.title },
    { property: 'og:description', content: page.value.description },
    {
      property: 'og:url',
      content: websiteUrl.value,
    },
    {
      property: 'twitter:title',
      content: page.value.title,
    },
    {
      property: 'twitter:url',
      content: websiteUrl.value,
    },
    ...(page.value.meta.image
      ? [
          {
            property: 'og:image',
            content: `${websiteOrigin}${page.value.meta.image}`,
          },
          {
            property: 'twitter:image',
            content: `${websiteOrigin}${page.value.meta.image}`,
          },
          {
            property: 'image_url',
            content: `${websiteOrigin}${page.value.meta.image}`,
          },
        ]
      : []),
  ],
})
</script>

<style lang="scss" scoped>
.root {
  padding-bottom: 10vh;
}
</style>
