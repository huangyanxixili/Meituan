import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16,// 换算为 1rem = 16px 
          propList: ["*"],// 要转换的属性（'*'代表全部属性）
        }),
      ],
    },
  }
})
