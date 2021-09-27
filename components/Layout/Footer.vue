<template>
  <div>
    <footer
      id="footer"
      class="grid gap-4 px-4 py-10  lg:px-20 lg:grid-cols-2 footer bg-neutral text-neutral-content"
    >
      <div>
        <nuxt-picture
          src="/img/Service_mark.svg"
          width="160"
          height="76"
          sizes="sm:96px md:96px lg:160px"
          class="pb-2"
        />
        <p>Example</p>
        <p>Providing reliable tech since 1592</p>
        <UiLanguageSwitcher />
      </div>
      <div class="grid lg:grid-cols-2 gap-x-40 gap-y-4">
        <div
          v-for="(section, index) in footerLinks"
          :key="`${index}-${section.title}`"
        >
          <nuxt-link v-if="section.nuxtLink" :to="section.nuxtLink">{{
            $t(section.title)
          }}</nuxt-link>
          <span v-else class="footer-title">{{ $t(section.title) }}</span>
          <div v-if="section.subMenu">
            <div
              v-for="(link, idx) in section.subMenu.filter(
                (item) => !item.hidden
              )"
              :key="`${idx}`"
            >
              <nuxt-link :to="link.nuxtLink">{{ $t(link.title) }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer class="p-4 footer bg-base-300 text-base-content footer-center">
      <div>
        <p>Copyright © 2021 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { footerLinks } from '~/data'
export default {
  data() {
    return {
      footerLinks: footerLinks()
    }
  }
}
</script>
