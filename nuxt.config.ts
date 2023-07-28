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
  modules: ['@bg-dev/nuxt-naiveui', '@nuxtjs/tailwindcss', 'nuxt-jwt-auth'],
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
  nuxtJwtAuth: {
    baseUrl: 'https://xhantos-development.up.railway.app/', // URL of your backend
    endpoints: {
      login: '/api/auth/login', // Where to request login (POST)
      logout: '/logout', // Where to request logout (POST)
      user: '/user', // Where to request user data (GET)
      signup: '/signup', // Where to request signup (POST)
    },
    redirects: {
      home: '/', // Where to redirect after successfull login and logout
      login: '/login', // Where to redirect if user is not logged in and accesses a logged-only route
      logout: '/logout', // Where to redirect if user is logged in and accesses a guest-only route
    },
  },
})
