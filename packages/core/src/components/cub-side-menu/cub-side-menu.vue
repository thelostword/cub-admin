<template>
  <ElScrollbar :height="height" wrap-class="cub-side-menu-wrap" view-class="cub-side-menu-view">
    <ElMenu
      class="cub-side-menu cub-border-none"
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

defineProps<{ height: string }>();

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
