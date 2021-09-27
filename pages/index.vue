<template>
  <div>
    <div class="min-h-screen hero bg-base-200">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{{ $t('homePage.title') }}</h1>
          <p class="mb-5">{{ $t('homePage.p') }}</p>
          <nuxt-link :to="localePath('page2')"
            ><button class="btn btn-primary">
              {{ $t('homePage.btn1') }}
            </button></nuxt-link
          >
          <nuxt-link :to="localePath('page3')"
            ><button class="btn btn-secondary">
              {{ $t('homePage.btn2') }}
            </button></nuxt-link
          >
          <nuxt-link :to="localePath('page4')"
            ><button class="btn btn-neutral">
              {{ $t('homePage.btn3') }}
            </button></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
