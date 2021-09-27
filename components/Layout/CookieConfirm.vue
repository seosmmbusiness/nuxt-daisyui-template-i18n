<template>
  <transition name="gdpr-cookie-confirm-fade">
    <section
      v-show="isVisible"
      class="fixed bottom-0 z-50 w-full py-4 bg-white bg-opacity-90"
    >
      <div
        class="flex flex-col items-center  flex-nowrap wrapper xl:flex-row xl:justify-between"
      >
        <div class="block my-2">
          <p class="font-semibold text-justify text-black2">
            {{ $t('gdpr_cookie_confirm.description') }}
            <nuxt-link
              :to="localePath('/')"
              class="btn btn-primary"
              :aria-label="
                $t('gdpr_cookie_confirm.learn_more') + ' about Cookies'
              "
              >{{ $t('gdpr_cookie_confirm.learn_more') }}</nuxt-link
            >
          </p>
        </div>
        <div class="block m-2">
          <a
            class="px-4 py-2 font-bold leading-10 border-2  nounderline text-bluegray border-bluegray hover:text-bluegray2 hover:border-bluegray2"
            :aria-label="$t('common.accept')"
            @click.prevent="accept"
            >{{ $t('common.accept') }}</a
          >
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
// @see https://medium.com/@tircomnicu_77850/nuxt-js-and-gdpr-creating-a-custom-cookie-component-e7957eedcfd
// @see https://github.com/tircomnicu/nuxt-gdpr
// @see https://matteo-gabriele.gitbook.io/vue-gtag/
export default {
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    try {
      if (!this.getGDPR() === true) {
        window.setTimeout(() => (this.isVisible = true), 0)
      }
    } catch (e) {
      window.setTimeout(() => (this.isVisible = true), 0)
    }
  },
  methods: {
    getGDPR() {
      if (process.client) {
        return localStorage.getItem('GDPR:accepted')
      }
    },
    accept() {
      if (process.client) {
        this.isVisible = false
        localStorage.setItem('GDPR:accepted', true)
      }
    },
    deny() {
      if (process.client) {
        this.isVisible = false
        localStorage.setItem('GDPR:accepted', false)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.gdpr-cookie-confirm-fade-enter-active {
  transition: opacity 0.15s;
}
.gdpr-cookie-confirm-fade-leave-active {
  transition: opacity 0.3s;
}
.gdpr-cookie-confirm-fade-enter,
.gdpr-cookie-confirm-fade-leave-to {
  @apply opacity-0;
}
</style>
