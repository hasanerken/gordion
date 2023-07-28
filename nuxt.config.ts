// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: [
    '/assets/main.css',
  ],
  modules: ['@bg-dev/nuxt-naiveui', '@nuxtjs/tailwindcss'],
  naiveui: {
    colorModePreference: 'light',
    iconSize: 20,
    themeConfig: {},
  },
  tailwindcss: {
    exposeConfig: true,
  },
  runtimeConfig: {
    public: {
      baseUrl: 'https://xhantos-development.up.railway.app',
    },
  },
})
