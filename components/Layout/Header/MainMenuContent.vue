<template>
  <ul class="menu-ul-main-item">
    <li
      v-for="(item, idx) in $props.menu"
      :key="item.title"
      class="menu-item"
      @mouseenter="isMobile ? '' : visibleOn(idx)"
      @mouseleave="isMobile ? '' : visibleOff(idx)"
      @click="toggleVisible(idx)"
    >
      <LayoutHeaderMenuItemComponent
        :item="item"
        :idx="idx"
        :is-mobile="isMobile"
        :show="visableArray.includes(idx)"
      />
      <transition :name="isMobile ? 'slide' : 'slide-fade'">
        <ul
          v-if="item.subMenu"
          v-show="visableArray.includes(idx)"
          class="menu-ul-item"
        >
          <li v-for="subMenu in item.subMenu" :key="subMenu.title">
            <LayoutHeaderMenuSubItemComponent
              :sub-menu="subMenu"
              :is-mobile="isMobile"
            />
          </li>
        </ul>
      </transition>
    </li>
    <li class="w-full py-2 xl:hidden"><UiLanguageSwitcher /></li>
  </ul>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      visableArray: []
    }
  },

  methods: {
    visibleOn(idx) {
      this.visableArray.push(idx)
    },
    visibleOff(idx) {
      this.visableArray = this.visableArray.filter((id) => id !== idx)
    },
    toggleVisible(idx) {
      this.visableArray.includes(idx)
        ? (this.visableArray = this.visableArray.filter((id) => id !== idx))
        : this.visableArray.push(idx)
    }
  }
}
</script>
<style lang="postcss" scoped>
.menu-item {
  @apply w-full py-2  block xl:w-auto xl:cursor-pointer xl:relative xl:px-8 xl:py-0 border-neutral xl:border-0;
}
.menu-ul-main-item {
  @apply w-full flex-col px-3 text-base-content top-15 xl:w-auto xl:flex xl:flex-row xl:items-center xl:mr-8 xl:pt-0 uppercase;
}
.menu-ul-item {
  @apply xl:absolute xl:-right-12 px-4 xl:min-w-60 xl:bg-base-200  xl:top-18 xl:shadow-lg;
}
</style>
