<template>
  <div class="footer-root"></div>
</template>

<script lang="ts">
export default {
  name: 'FooterElement',
}
</script>

<style lang="scss" scoped>
div.footer-root {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: var(--dark);
  @media screen and (max-width: 768px) {
    & {
      height: 30px;
    }
  }
}
</style>
