<template>
  <ElSubMenu v-if="menu.children?.length" :index="menu.path">
    <template #title>
      <ElIcon v-if="menu.icon">
        <component :is="menu.icon" />
      </ElIcon>
      <span>{{ menu.name }}</span>
      <ElBadge v-if="menu.badge" v-bind="menu.badge" class="cub-menu-badge cub-inline-flex" />
    </template>
    <CubSideMenuItem v-for="childMenu in menu.children" :key="childMenu.path" :menu="childMenu" />
  </ElSubMenu>

  <ElMenuItem v-else :index="menu.path">
    <ElIcon v-if="menu.icon">
      <component :is="menu.icon" />
    </ElIcon>
    <template #title>
      <span>{{ menu.name }}</span>
      <ElBadge v-if="menu.badge" v-bind="menu.badge" class="cub-menu-badge cub-inline-flex" />
    </template>
  </ElMenuItem>
</template>

<script setup lang="ts">
import {
  ElMenuItem, ElSubMenu, ElIcon, ElBadge,
} from 'element-plus';
import type { MenuRecord } from '../../typescript';

defineProps<{ menu: MenuRecord }>();
</script>
