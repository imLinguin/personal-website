<template>
  <NuxtLink :to="route">
    <div class="bar"></div>
    <p>{{ title }}</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ title: string; route: string }>(), {
  title: '',
  route: '/',
})
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
  width: 228px;
  user-select: none;
  cursor: pointer;
  background-color: var(--dark);
  div.bar {
    height: 3px;
    width: 100%;
  }
  &.router-link-active:not([href='/']),
  &.router-link-exact-active {
    div.bar {
      background-color: var(--primary);
    }
    background-color: var(--lighter-dark);
    &:hover {
      background-color: var(--lighter-dark);
    }
  }
  &:hover {
    background-color: var(--lighter-dark-hover);
  }
  p {
    height: calc(100% - 3px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
