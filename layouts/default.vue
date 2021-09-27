<template>
  <div>
    <LayoutHeader />
    <main class="py-10">
      <Nuxt />
    </main>
    <LayoutFooter />
    <LayoutCookieConfirm />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  }
}
</script>
