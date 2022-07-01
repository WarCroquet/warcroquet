import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  mode: 'static',
  tailwindcss: {
    // Options
  },
  purgeCSS: {
    enabled: false
  },
  build: {
    publicPath: "./_nuxt"
  }
})
