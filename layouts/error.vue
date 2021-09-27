<template>
  <div class="min-h-screen hero bg-base-200">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          {{ $t('common.error') }} #{{ (error && error.statusCode) || 500 }}
        </h1>
        <nuxt-link :to="localePath('index')">
          <button class="btn btn-primary">{{ $t('common.back') }}</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  }
}
</script>
