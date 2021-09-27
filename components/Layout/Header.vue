<template>
  <header id="header" @scroll="handleScroll">
    <LayoutHeaderDesktopNav
      class="fixed z-50 hidden w-full px-4 transition-all bg-opacity-100 shadow-lg  xl:px-20 xl:navbar bg-base-100 text-base-content font-heading"
      :class="{ unpinned: scrolled }"
      :scrolled="scrolled"
      :menu="headerLinks"
    />
    <LayoutHeaderMobileNav
      class="fixed z-50 w-full px-4 transition-all bg-opacity-100 shadow-lg  xl:px-20 navbar xl:hidden bg-base-100 text-base-content font-heading"
      :class="{ unpinned: scrolled }"
      :scrolled="scrolled"
      :menu="headerLinks"
    />
  </header>
</template>

<script>
import { headerLinks } from '~/data'
export default {
  data() {
    return {
      headerLinks: headerLinks().filter(
        (item) => !(item.hidden && item.hidden === true)
      ),
      limitPosition: 0,
      scrolled: false,
      lastPosition: 0
    }
  },
  mounted() {
    try {
      window.addEventListener('scroll', this.handleScroll)
    } catch (e) {}
  },
  destroyed() {
    try {
      window.removeEventListener('scroll', this.handleScroll)
    } catch (e) {}
  },
  methods: {
    // TODO. better remove it cause of lot of code unused on mobile.
    handleScroll() {
      if (this.limitPosition < window.scrollY) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }

      this.lastPosition = window.scrollY
    }
  }
}
</script>
<style lang="postcss">
.unpinned {
  @apply py-1 bg-opacity-90;
  & .menu-item-component {
    @apply leading-18 !important;
  }
}
picture {
  & img {
    @apply py-4 w-32 transition-all xl:w-40;
  }
}
picture.unpinned {
  & img {
    @apply py-1 w-20  xl:w-32;
  }
}
</style>
