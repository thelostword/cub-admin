import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { presetWind } from 'unocss';
import dts from 'vite-plugin-dts';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';

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
    vueSetupExtend({}),
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
        core: fileURLToPath(new URL('./packages/core/index.ts', import.meta.url)),
        components: fileURLToPath(new URL('./packages/components/index.ts', import.meta.url)),
        utils: fileURLToPath(new URL('./packages/utils/index.ts', import.meta.url)),
      },
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'element-plus', '@element-plus/icons-vue', '@vueuse/core', 'lodash-es', 'mitt', 'color'],
      output: {},
    },
  },
});
