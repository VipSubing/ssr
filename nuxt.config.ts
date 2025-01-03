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
    port: Number(process.env.NUXT_SERVER_PORT) || 3000,
    host: process.env.NUXT_SERVER_HOST || "0.0.0.0",
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-01-03",

  runtimeConfig: {
    // 私有配置（仅在服务器端可用）
    logLevel: process.env.LOG_LEVEL,

    // 公共配置（客户端可用）
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      baseUrl: process.env.NUXT_APP_BASE_URL,
    },
  },
});
