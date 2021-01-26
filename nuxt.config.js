// eslint-disable-next-line no-unused-vars
const siteUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://dev--nuxtstraper.netlify.app'
    : 'http://localhost:3000'

const siteTitle = `Nuxt BootStrap Template`
const siteDescription = `A Nuxt.js site to work on best practices and approaches for Nuxt sites`

export default {
  // Target: https://go.nuxtjs.dev/config-target

  // ssr: false,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: null,
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk
        ? `${titleChunk} - Nuxt BootStrap Template`
        : 'Nuxt BootStrap Template'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription }
      // { property: 'og:type', content: 'website' },
      // { property: 'og:site_name', content: 'title here' },
      // { hid: 'og:title', property: 'og:title', content: 'title here' },
      // {
      //   hid: 'og:description',
      //   property: 'og:description',
      //   content: 'description here'
      // },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: `${siteUrl}/Share2.png`
      // },
      // { hid: 'twitter:title', name: 'twitter:title', content: 'title here' },
      // {
      //   hid: 'twitter:description',
      //   name: 'twitter:description',
      //   content: 'description here'
      // },
      // {
      //   hid: 'twitter:image',
      //   name: 'twitter:image',
      //   content: `${siteUrl}/Share2.png`
      // }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    '@nuxtjs/eslint-module'
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.nuxtjs.dev'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    [
      'nuxt-social-meta',
      {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        img: `${siteUrl}/share.png`,
        twitter: '@DavidRoyer_',
        twitter_card: 'summary_large_image'
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  bootstrapVue: {
    icons: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      source: './static/app-icon.png'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
