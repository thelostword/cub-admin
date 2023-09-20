import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { presetWind } from 'unocss';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default () => defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetWind({
        variablePrefix: '',
        prefix: 'cub-',
      })],
    }),
    dts({
      include: [
        './packages/core/',
        './packages/components/',
        './packages/utils/',
      ],
      exclude: ['./packages/*/vite.config.ts'],
      rollupTypes: true,
    }),
  ],

  build: {
    sourcemap: false,
    lib: {
      entry: {
        core: resolve(__dirname, './packages/core/index.ts'),
        components: resolve(__dirname, './packages/components/index.ts'),
        utils: resolve(__dirname, './packages/utils/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'element-plus', '@element-plus/icons-vue', '@vueuse/core', 'lodash-es', 'mitt', 'color'],
      output: {},
    },
  },
});
