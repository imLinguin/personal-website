<template>
  <aside>
    <div>
      <div
        v-for="button in menuButtons"
        :key="button.id"
        class="icon-wrapper"
        @click="
          {
            setActiveButton(button.id)
          }
        "
      >
        <img
          :src="button.icon"
          :class="['icon', button.id === activeButton ? 'active' : '']"
        />
      </div>
    </div>
    <section v-if="shown && activeButton !== null">
      <SubMenuProjects v-if="activeButton === 2" />
    </section>
  </aside>
</template>

<script>
export default {
  name: 'AsideMenu',
  data() {
    return {
      menuButtons: [
        {
          id: 0,
          icon: 'aside/data-duplicate.svg',
        },
        {
          id: 1,
          icon: 'aside/search.svg',
        },
        {
          id: 2,
          icon: 'aside/branch.svg',
        },
      ],
      activeButton: -1,
      shown: false,
    }
  },
  methods: {
    setActiveButton(buttonId) {
      if (buttonId === this.activeButton) {
        this.shown = false
        this.activeButton = -1
        return
      }
      this.activeButton = buttonId
      this.shown = true
    },
  },
}
</script>

<style lang="scss" scoped>
aside {
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 300px;
  height: 100%;
  background-color: var(--dark);
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50px;
    align-items: center;
    border-right: 1px solid rgba($color: #000000, $alpha: 0.4);
  }
}

img.icon {
  stroke: var(--primary);
  padding: 5px;
  width: 100%;
  opacity: 0.5;
  transition: opacity 300ms ease;
  border-left: 3px solid transparent;
  margin: 3px 3px 3px 0;
  &:hover,
  &.active {
    opacity: 1;
  }
  &.active {
    border-left: 3px solid var(--primary);
  }
}
div.icon-wrapper {
  width: 50px;
  cursor: pointer;
  user-select: none;
}

section {
  height: 100%;
  width: 250px;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  aside {
    display: none;
  }
}
</style>
