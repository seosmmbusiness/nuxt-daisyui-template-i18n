<template>
  <select
    id="locale"
    v-model="key"
    class="w-full py-0 pl-4 pr-8 capitalize text-base-content"
    @change="chooseLang()"
  >
    <option
      v-for="locale in availableLocales"
      :key="locale.iso"
      :selected="locale.code === $i18n.locale"
      :value="locale.code"
    >
      {{ locale.name }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      key: this.$i18n.locale,
      availableLocales: this.$i18n.locales
    }
  },
  methods: {
    chooseLang() {
      this.$i18n.setLocaleCookie(this.key)
      this.$i18n.setLocale(this.key)
      this.$router.push(this.switchLocalePath(this.key))
    }
  }
}
</script>
<style lang="postcss"></style>
