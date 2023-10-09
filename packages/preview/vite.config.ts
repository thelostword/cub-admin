import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { presetWind } from 'unocss';
import svgLoader from 'vite-svg-loader';
// import { viteIconfontAutoImport } from 'unplugin-iconfont-auto-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetWind({
        variablePrefix: '',
        prefix: 'cub-',
      })],
    }),
    svgLoader(),
    // viteIconfontAutoImport({
    //   path: 'assets/icons',
    //   type: 'font-class',
    //   pid: '291873233'
    // })
  ],
});
