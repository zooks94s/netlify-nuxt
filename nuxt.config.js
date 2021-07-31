import { getConfigForKeys } from './lib/config.js'
import { createClient } from './plugins/contentful.js'
const client = createClient()

const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
])

export default {
  target: 'static',

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
  },

  head: {
    title: 'zooks94s',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ress'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    async routes() {
      return await client
        .getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID,
        })
        .then((entries) => {
          return entries.items.map((entry) => {
            return { route: `works/${entry.fields.slug}`, payload: entry }
          })
        })
    },
  },

  styleResources: {
    scss: ['./assets/css/style.scss'],
  },

  googleFonts: {
    display: 'swap',
    families: {
      Poppins: {
        wght: [400, 500],
      },
      'noto+sans': {
        wght: [400, 700],
      },
    },
  },
}
