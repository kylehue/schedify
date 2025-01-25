// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   ssr: process.env.NUXT_SSR === "false" ? false : true,
   modules: [
      "@pinia/nuxt",
      "@nuxtjs/tailwindcss",
      "nuxtjs-naive-ui",
      "nuxt-gtag",
   ],
   app: {
      head: {
         link: [
            {
               rel: "preconnect",
               href: "https://fonts.googleapis.com",
            },
            {
               rel: "preconnect",
               href: "https://fonts.gstatic.com",
               crossorigin: "anonymous",
            },
            {
               rel: "stylesheet",
               href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap",
            },
         ],
      },
      baseURL: process.env.NUXT_APP_BASE_URL || "/",
   },
   imports: {
      scan: false,
   },
   gtag: {
      enabled: process.env.NODE_ENV === "production",
      id: "G-P43ZM81H8P",
   },
});
