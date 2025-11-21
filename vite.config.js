import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    plugins: [react()],
    publicDir: "./static",
    base: "./",
    build: {
      minify: isProduction,
      sourcemap: !isProduction,
    },
    server: {
      // 代理配置只在开发环境（npm run dev）时生效
      proxy: {
        "/uc": {
          // 从环境变量获取后端地址，或使用默认值
          target: 'http://127.0.0.1:8000/',
          // changeOrigin: true,
          secure: false,
        },
      },
    }
  };
});
