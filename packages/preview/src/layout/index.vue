<template>
  <CubLayout class="theme1">
    <template #logo="{ isCollapse }">
      <div class="cub-h-full cub-flex cub-justify-center cub-items-center cub-gap-x-3">
        <img src="../assets/logo.svg" class="cub-h-3/5" alt="Cub Admin Logo" />
        <span v-show="!isCollapse" class="cub-font-bold cub-whitespace-nowrap">Cub Admin</span>
      </div>
    </template>

    <template #headerLeft>
      <!-- <CubBreadcrumb /> -->
      <!-- <CubTopMixedMenu /> -->
    </template>

    <!-- <template #tagsView>
      自定义tagsView
    </template>

    <template #sideMenu>
      自定义侧边菜单
    </template> -->

    <template #headerTools>
      <!-- <CubModeSwitch />
      <CubPrimaryColorChange />
      <CubFullscreen /> -->
    </template>

    <template #sideMenuBefore>
      <div class="cub-h-full cub-flex cub-items-center cub-justify-center">
        <el-button type="primary">
          XX快捷方式
        </el-button>
      </div>
    </template>
  </CubLayout>
</template>

<script setup lang="ts">
import { CubLayout } from '@cub-admin/core';
// import {
//   CubFullscreen, CubModeSwitch, CubPrimaryColorChange,
// } from '@cub-admin/components';

</script>

<style scoped>
.theme1 {
  /* --cub-sidebar-width: 300px; */
}

.theme2 {

}
</style>
