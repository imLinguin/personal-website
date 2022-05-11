<template>
  <div class="body-wrapper">
    <header>
      <ButtonsHeader />
    </header>
    <div class="content-wrapper">
      <AsideMenu />
      <div>
        <NavHeader />
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'DefaultTemplate',
}
</script>
<style lang="scss" scoped>
div.body-wrapper {
  height: 100%;
}

div.content-wrapper {
  display: flex;
  height: 100%;
  flex-direction: row;
  & > div {
    width: 100%;
    height: 100%;
  }
}
</style>
