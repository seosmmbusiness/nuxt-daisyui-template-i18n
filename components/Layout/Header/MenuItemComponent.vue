<template>
  <div v-if="item.nuxtLink" class="menu-ul-component group">
    <nuxt-link
      :class="item.subMenu ? 'pages' : ''"
      class="menu-item-component"
      :to="localePath(item.nuxtLink)"
      >{{ $t(item.title) }}</nuxt-link
    >
    <UiArrow
      v-if="item.subMenu"
      :rotate="show"
      :deg="-90"
      :rotate-deg="-180"
      :size="18"
      class="ml-2 leading-10 text-neutral group-hover:text-primary-focus"
      @click.native="$emit('clicked')"
    />
  </div>
  <div v-else-if="item.href">
    <a :href="item.href" class="menu-item-component">{{ $t(item.title) }}</a>
  </div>
  <div v-else class="menu-ul-component group">
    <p class="menu-item-component">{{ $t(item.title) }}</p>
    <UiArrow
      v-if="item.subMenu"
      :rotate="show"
      :deg="-90"
      :rotate-deg="-180"
      :size="18"
      class="ml-2 leading-10 text-neutral group-hover:text-primary-focus"
      @click.native="$emit('clicked')"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    idx: {
      type: Number,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: false
    },
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.menu-ul-component {
  @apply flex flex-row items-center justify-between;
}
.menu-item-component {
  @apply block  font-medium leading-10 xl:leading-22 group-hover:text-primary-focus;
}
</style>
