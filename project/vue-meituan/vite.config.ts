// import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem";
import path from 'path';
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()], // 自动导入vant组件
    })
  ],

  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16,// 换算为 1rem = 16px 
          propList: ["*"],// 要转换的属性（'*'代表全部属性）
        }),
      ],
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  }
})
