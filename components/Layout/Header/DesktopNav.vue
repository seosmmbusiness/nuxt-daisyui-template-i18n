<template>
  <nav>
    <div class="flex-1">
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
    </div>
    <nav class="flex-none hidden lg:flex">
      <LayoutHeaderMainMenuContent :menu="$props.menu" />
    </nav>
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
  }
}
</script>
<style lang="postcss"></style>
