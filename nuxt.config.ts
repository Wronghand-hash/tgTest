// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      motionPath: true,
    },
  },
  modules: [
    "@hypernym/nuxt-gsap",
    "@nuxt/image",
    "@nuxt/ui",
    // "@pinia/nuxt",
    // "@pinia-plugin-persistedstate/nuxt",
  ],
  app: {
    head: {
      script: [{ src: "https://telegram.org/js/telegram-web-app.js" }],
    },
  },
});