<template>
  <div>
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

<style lang="scss" scoped>
div.content-wrapper {
  display: flex;
  width: 100%;
  flex-direction: row;
  & > div {
    width: 100%;
  }
}
</style>
