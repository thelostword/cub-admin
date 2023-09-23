<template>
  <ul class="cub-top-menu cub-h-full cub-flex cub-items-center">
    <li
      v-for="item in menus"
      :key="item.path"
      class="cub-top-menu-item cub-h-full cub-px-3 cub-flex cub-items-center cub-gap-x-1.5 cub-cursor-pointer cub-transition-colors"
      :class="{ active: topMenuActivePath === item.path }"
      @click="onSwitch(item.path)"
      @keyup.enter="onSwitch(item.path)"
    >
      <ElIcon v-if="item.icon">
        <component :is="item.icon" />
      </ElIcon>
      <span class="cub-top-menu-text cub-text-sm">{{ item.name }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { menus } from '../../store';
import { useMixedMenu } from '../../hooks/use-mixed-menu';

const { topMenuActivePath, onSwitch } = useMixedMenu();
</script>

<style lang="scss" scoped>
.cub-top-menu {
  &-item {
    &:hover {
      background-color: var(--cub-top-menu-item-hover-bg-color);
      color: var(--cub-top-menu-item-hover-text-color);
    }
    &.active {
      color: var(--cub-top-menu-item-active-text-color);
      background-color: var(--cub-top-menu-item-active-bg-color);
    }
  }
}
</style>
