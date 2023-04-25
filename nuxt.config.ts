// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://akarispecification.github.io/akari.mn",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: https://ogp.me/ns#",
      },
      title: "AkariSpecification - Port Intel x86-64 intrinsic function to RISC-V or ARM",
      // titleTemplate: "%s - AkariSpecification",
        link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
        },
        {
            rel: "manifest",
            href: "/site.webmanifest",
        }
    ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        /* description */
        {
            hid: "description",
            name: "description",
            content: "Port Intel x86-64 intrinsic function to RISC-V or ARM",
        },
        {
          property: "og:url",
          content: "https://akarispecification.github.io/akari.mn/akari.mn",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content:
            "AkariSpecification - Port Intel x86-64 intrinsic function to RISC-V or ARM",
        },
        {
          property: "og:description",
          content: "Port Intel x86-64 intrinsic function to RISC-V or ARM",
        },
        {
          property: "og:site_name",
          content: "AkariSpecification",
        },
        {
          property: "og:image",
          content:
            "https://akarispecification.github.io/akari.mn/images/title.png",
        },
        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        }
      ],
    },
  },
});
