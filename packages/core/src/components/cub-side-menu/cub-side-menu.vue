<template>
  <ElScrollbar height="calc(100vh - var(--cub-logo-height))" wrap-class="cub-menu-wrap" view-class="cub-menu-view">
    <ElMenu
      class="cub-menu cub-border-none"
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="defaultActive"
      @select="onSelected"
    >
      <CubSideMenuItem v-for="menu in (isMixedMenu ? subMenus : menus)" :key="menu.path" :menu="menu" />
    </ElMenu>
  </ElScrollbar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ElMenu } from 'element-plus';
import { useRouter } from 'vue-router';
import { isURL } from '@cub-admin/utils';
import { isCollapse } from '../../state/collapse';
import CubSideMenuItem from './cub-side-menu-item.vue';
import { menus, subMenus } from '../../store';
import { isMixedMenu } from '../../hooks/use-mixed-menu';

const router = useRouter();
const defaultActive = computed(() => {
  if (Object.keys(router.currentRoute.value.query).length > 0) {
    return router.currentRoute.value.fullPath;
  }
  return router.currentRoute.value.path;
});

const onSelected = (index: string) => {
  if (isURL(index)) {
    window.open(index, '_blank');
    return;
  }
  router.push(index);
};
</script>
