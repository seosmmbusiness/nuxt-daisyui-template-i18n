<template>
  <nuxt-link
    v-if="
      (subMenu.translate === true ||
        subMenu.translate === undefined ||
        subMenu.translate === null) &&
      subMenu.nuxtLink
    "
    :to="localePath(subMenu.nuxtLink)"
    class="menu-sub-item-component"
    >{{ $t(subMenu.title) }}</nuxt-link
  >
  <nuxt-link
    v-else-if="subMenu.translate === false && subMenu.nuxtLink"
    :to="localePath(subMenu.nuxtLink)"
    class="menu-sub-item-component"
    >{{ subMenu.title }}</nuxt-link
  >
  <a
    v-else-if="subMenu.href"
    class="menu-sub-item-component"
    :href="subMenu.href"
    >{{ $t(subMenu.title) }}</a
  >
</template>

<script>
export default {
  props: {
    subMenu: {
      type: Object,
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
  }
}
</script>

<style lang="postcss" scoped>
.menu-sub-item-component {
  @apply block px-3 leading-10 hover:text-primary-focus xl:px-5 xl:py-3 xl:leading-normal;
}
</style>
