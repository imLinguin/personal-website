<template>
  <NuxtLink :to="route">
    <div class="bar"></div>
    <p>{{ title }}</p>
  </NuxtLink>
</template>

<script>
export default {
  name: 'NavElement',
  props: {
    title: { type: String, default: '' },
    route: { type: String, default: '/' },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
  width: 228px;
  user-select: none;
  cursor: pointer;

  div.bar {
    height: 3px;
    width: 100%;
  }
  &.nuxt-link-exact-active div.bar {
    background-color: var(--primary);
  }
  p {
    height: calc(100% - 3px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
