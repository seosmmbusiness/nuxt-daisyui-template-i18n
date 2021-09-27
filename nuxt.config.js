export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-font-loader',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  // @see https://i18n.nuxtjs.org/options-reference
  i18n: {
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    // @see https://i18n.nuxtjs.org/seo/#improving-performance
    seo: false,
    baseUrl: 'https://example.com',
    strategy: 'prefix_except_default',
    lazy: true, // https://i18n.nuxtjs.org/lazy-load-translations
    langDir: 'locales/',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
      },
      {
        name: 'Русский',
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js',
      },
    ],
    detectBrowserLanguage: {
      // Set to always redirect to the value stored in the cookie, not just on first visit.
      alwaysRedirect: false,
      // If none of the locales match the browser's locale, use this one as a fallback.
      fallbackLocale: 'en',
      // Set to true (recommended for improved SEO) to only attempt to detect the browser locale on the root path (/) of the site.
      onlyOnRoot: true,
      //  If enabled, a cookie is set once the user has been redirected to browser's preferred locale, to prevent subsequent redirections.
      useCookie: true,
    },
  },
  router: {
    trailingSlash: true,
  },
  // @see https://github.com/nuxt-community/sitemap-module
  // @see https://github.com/nuxt-community/sitemap-module/issues/122
  sitemap: {
    hostname: 'https://example.com',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
    gzip: true,
    i18n: true,
  },
  // @see https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },
  // @see https://github.com/ivodolenc/nuxt-font-loader
  // fontLoader: {
  //   url: {
  //     local: '/fonts/font-face.css',
  //   },
  //   prefetch: true,
  //   preconnect: true,
  // },
  // @see https://image.nuxtjs.org/api/options#screens
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
      '3xl': 1920,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn

      plugins: {
        tailwindcss: {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
}
