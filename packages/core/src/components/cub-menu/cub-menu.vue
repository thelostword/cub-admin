<template>
  <ElMenu
    class="cub-menu cub-border-none"
    :collapse="isCollapse"
    :collapse-transition="false"
    :default-active="defaultActive"
    @select="onSelected"
  >
    <CubMenuItem v-for="menu in menus" :key="menu.path" :menu="menu" />
  </ElMenu>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ElMenu } from 'element-plus';
import { useRouter } from 'vue-router';
import { isURL } from '@cub-admin/utils';
import { isCollapse } from '../../state/collapse';
import CubMenuItem from './cub-menu-item.vue';
import { menus } from '../../store';

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
