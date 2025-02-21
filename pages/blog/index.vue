<template>
  <div class="root markdown">
    <div class="container">
      <h1>imLinguin Blog</h1>
      <p>Posts:</p>
      <ul>
        <li v-for="blog in posts" :key="blog.meta.slug + 'page'">
          <NuxtLink :to="blog.path">{{ blog.title }}</NuxtLink>
          <span class="small">{{ getLocaleString(blog.meta.createdAt) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData(
  'blog',
  () => queryCollection('blog').all(),
  {
    transform: (posts) =>
      posts.sort(
        (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
      ),
  }
)

useSeoMeta({
  title: 'Blog',
})

function getLocaleString(date: string) {
  return new Date(date).toLocaleDateString()
}
</script>

<style lang="scss" scoped>
a {
  line-height: 0.5em;
}
</style>
