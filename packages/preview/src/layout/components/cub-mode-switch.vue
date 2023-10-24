<template>
  <ElDropdown @command="setThemeMode">
    <div class="cub-mode-switch-btn cub-flex cub-items-center cub-justify-center cub-py-1 cub-px-1.5">
      <ElIcon :size="22" color="var(--cub-header-text-color)">
        <component :is="modeList.find((item) => item.value === themeMode)?.icon" />
      </ElIcon>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="item in modeList"
          :key="item.value"
          :command="item.value"
          :disabled="themeMode === item.value"
          :icon="item.icon"
        >
          {{ item.name }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
import {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElIcon,
} from 'element-plus';
import MaterialSymbolsComputerOutline from 'virtual:icons/material-symbols/computer-outline';
import MaterialSymbolsModeNightOutline from 'virtual:icons/material-symbols/mode-night-outline';
import MaterialSymbolsLightModeOutline from 'virtual:icons/material-symbols/light-mode-outline';
import { themeMode, setThemeMode } from '@cub-admin/core';

const modeList = [
  {
    name: '跟随系统',
    value: 'system',
    icon: MaterialSymbolsComputerOutline,
  },
  {
    name: '亮色模式',
    value: 'light',
    icon: MaterialSymbolsLightModeOutline,
  },
  {
    name: '暗色模式',
    value: 'dark',
    icon: MaterialSymbolsModeNightOutline,
  },
];
</script>

<style lang="scss" scoped>
</style>
