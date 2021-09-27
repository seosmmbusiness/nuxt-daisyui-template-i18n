<template>
  <nav class="flex flex-col max-h-full p-2 overflow-auto">
    <div class="flex flex-row w-full flex-nowrap">
      <nuxt-link :to="localePath('/')">
        <nuxt-picture
          src="/img/Service_mark.svg"
          class="logo-img"
          width="160"
          height="76"
          sizes="sm:96px md:96px lg:160px"
          :class="{ unpinned: scrolled }"
        />
      </nuxt-link>
      <div class="flex-grow"></div>

      <UiMobileMenuIcon
        class="mx-3.5"
        :state="visible"
        aria-label="Open Menu"
        title="Open Menu"
        @click.native="toggleVisable"
      />
    </div>

    <transition name="slide">
      <LayoutHeaderMainMenuContent
        v-show="visible"
        :is-mobile="true"
        :menu="$props.menu"
      />
    </transition>
  </nav>
</template>

<script>
export default {
  props: {
    scrolled: {
      type: Boolean,
      required: true
    },
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visible: false
    }
  },

  methods: {
    toggleVisable() {
      this.visible
        ? document.querySelector('body').classList.remove('overflow-hidden')
        : document.querySelector('body').classList.add('overflow-hidden')
      this.visible = !this.visible
    }
  }
}
</script>
<style lang="postcss"></style>
