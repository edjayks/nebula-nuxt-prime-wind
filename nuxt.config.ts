import path from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-primevue", "@nuxt/ui"],
  colorMode: {
    preference: 'light'
  },
  primevue: {
      options: {
        unstyled: true
      },
      importPT: { from: '~/presets/wind/' } 
  }
})