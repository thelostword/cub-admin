<template>
  <div class="cub-primary-color-change-btn cub-p-1 primary-color">
    <ElColorPicker
      label="修改主题色"
      :predefine="predefineColors"
      @change="setPrimaryColor($event || predefineColors[0])"
    />
  </div>
</template>

<script lang="ts" setup>
import { ElColorPicker } from 'element-plus';
import { primaryColor, setPrimaryColor } from '@cub-admin/core';

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
console.log(primaryColor.value);
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
