import { ref, readonly } from 'vue';
import Color from 'color';

const COLOR_STORAGE_KEY = '__cub_admin_primary_color__';
const historyValue = window.localStorage.getItem(COLOR_STORAGE_KEY) || '#409eff';

const originalColor = ref(historyValue);
export const primaryColor = readonly(originalColor);

export const setPrimaryColor = (color: string) => {
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

  originalColor.value = color;
  window.localStorage.setItem(COLOR_STORAGE_KEY, color);
};
