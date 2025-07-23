// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  css: ['~/assets/css/tailwind.css'],
  googleFonts: {
    families: {
      Montserrat: true,
      Roboto: true
    }
  }
})