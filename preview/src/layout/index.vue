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
    </template>

    <template #headerTools>
      <CubModeSwitch />
      <CubPrimaryColorChange />
      <CubFullscreen />
    </template>
  </CubLayout>
</template>

<script setup lang="ts">
import { CubLayout } from '@cub-admin/core';
import {
  CubFullscreen, CubModeSwitch, CubPrimaryColorChange,
} from '@cub-admin/components';

</script>

<style scoped>
.theme1 {
  /* --cub-sidebar-width: 300px; */
}

.theme2 {

}
</style>
