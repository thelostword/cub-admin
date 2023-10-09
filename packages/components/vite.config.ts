import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { presetWind } from 'unocss';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default () => defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetWind({
        variablePrefix: '',
        prefix: 'cub-',
      })],
    }),
    dts({
      include: ['./'],
      exclude: ['./vite.config.ts'],
      rollupTypes: true,
    }),
  ],
  build: {
    sourcemap: false,
    lib: {
      entry: {
        index: resolve(__dirname, './index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'element-plus', '@element-plus/icons-vue', '@vueuse/core', 'lodash-es', 'mitt', 'color'],
      output: {},
    },
  },
});
