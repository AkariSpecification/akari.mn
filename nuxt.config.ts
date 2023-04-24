// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: https://ogp.me/ns#",
      },
      meta: [
        {
          property: "og:type",
          content:
            "AkariSpecification - Port Intel x86-64 intrinsic function to RISC-V or ARM",
        },
        { property: "og:url", content: "https://akarispecification.github.io/akari.mn/akari.mn" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "AkariSpecification" },
        { property: "og:description", content: "AkariSpecification" },
        {
          property: "og:site_name",
          content:
            "AkariSpecification - Port Intel x86-64 intrinsic function to RISC-V or ARM",
        },
        { property: "og:image", content: "https://akarispecification.github.io/akari.mn/images/title.png" },
      ],
    },
  },
});
