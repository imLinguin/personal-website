<template>
  <nav>
    <NavElement title="Home" route="/" />
    <NavElement title="About me" route="/about-me" />
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavHeader',
}
</script>

<style lang="scss" scoped>
nav {
  background-color: var(--dark);
  height: 45px;
  display: flex;
  flex-direction: row;
}
</style>
