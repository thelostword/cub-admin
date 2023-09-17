<template>
  <div class="cub-primary-color-change-btn cub-p-1 primary-color">
    <ElColorPicker
      v-model="primaryColor"
      label="修改主题色"
      :predefine="predefineColors"
      @change="handleColorChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue';
import { ElColorPicker } from 'element-plus';
import Color from 'color';

const COLOR_STORAGE_KEY = '__cub_admin_primary_color';
const predefineColors = [
  '#409EFF',
  'rgb(24, 144, 255)',
  'rgb(245, 34, 45)',
  'rgb(250, 84, 28)',
  'rgb(250, 173, 20)',
  'rgb(19, 194, 194)',
  'rgb(82, 196, 26)',
  'rgb(47, 84, 235)',
  'rgb(114, 46, 209)',
  '#F09199',
  '#00c0ff',
  '#fb7299',
];
const historyModeValue = window.localStorage.getItem(COLOR_STORAGE_KEY) || predefineColors[0];
const primaryColor = ref(historyModeValue);

const handleColorChange = (color: string | null) => {
  if (!color) return;
  const rootEl = document.documentElement;
  const lightness = Color(color).lightness();

  let lightStyleContent = `--el-color-primary: ${color};`;
  let darkStyleContent = `--el-color-primary: ${color};`;

  const shades = [3, 5, 7, 8, 9];
  shades.forEach((shade) => {
    const lightColor = Color(color).lightness(lightness + (100 - lightness) * (shade / 10)).hex();
    if (lightColor) lightStyleContent += `--el-color-primary-light-${shade}: ${lightColor};`;

    const darkColor = Color(color).lightness(lightness - lightness * (shade / 10)).hex();
    if (darkColor) darkStyleContent += `--el-color-primary-light-${shade}: ${darkColor};`;
  });
  {
    const darkColor = Color(color).lightness(lightness - lightness * (2 / 10)).hex();
    if (darkColor) {
      lightStyleContent += `--el-color-primary-dark-${2}: ${darkColor};`;
      darkStyleContent += `--el-color-primary-dark-${2}: ${darkColor};`;
    }
  }

  const styleElement = document.createElement('style');
  styleElement.textContent = `.cub-primary-color {${lightStyleContent}} .dark.cub-primary-color{${darkStyleContent}}`;
  document.head.appendChild(styleElement);
  rootEl.classList.add('cub-primary-color');

  window.localStorage.setItem(COLOR_STORAGE_KEY, color || '');
};

nextTick(() => {
  handleColorChange(historyModeValue);
});

</script>

<style lang="scss" scoped>
:deep() {
  .el-color-picker {
    &__trigger {
      width: 26px;
      height: 26px;
      // border: none !important;
      border-color: #4C4D4F;
    }
    &__color {
      // border: none !important;
    }
  }
}
</style>
