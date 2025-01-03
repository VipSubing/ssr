// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开启 TypeScript 支持
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // 模块配置
  modules: ["@pinia/nuxt"],

  // 开发服务器配置
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },

  // 调试配置
  debug: true,

  // nitro: {
  //   debug: true,
  // },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-01-03",
});
