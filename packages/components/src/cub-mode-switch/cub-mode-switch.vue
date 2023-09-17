<template>
  <ElDropdown @command="handleCommand($event, true)">
    <div class="cub-mode-switch-btn cub-flex cub-items-center cub-justify-center cub-py-1 cub-px-1.5">
      <ElIcon :size="22" color="var(--cub-header-text-color)">
        <component :is="currentMode.icon" />
      </ElIcon>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="item in modeList"
          :key="item.value"
          :command="item.value"
          :disabled="currentMode.value === item.value"
          :icon="item.icon"
        >
          {{ item.name }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
import { shallowRef, nextTick } from 'vue';
import {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElIcon,
} from 'element-plus';
import {
  ComputerFilled,
  DarkModeFilled,
  LightModeFilled,
} from '@vicons/material';

const modeList = [
  {
    name: '跟随系统',
    value: 'system',
    icon: ComputerFilled,
  },
  {
    name: '亮色模式',
    value: 'light',
    icon: LightModeFilled,
  },
  {
    name: '暗色模式',
    value: 'dark',
    icon: DarkModeFilled,
  },
];
const MODE_STORAGE_KEY = '__cub_admin_mode';

const currentMode = shallowRef(modeList[0]);

// 系统模式变更
const handleSystemModeChange = (e: MediaQueryListEvent | MediaQueryList) => {
  if (currentMode.value.value !== 'system') return;
  const rootEl = document.documentElement;
  const systemModeValue = e.matches ? 'dark' : 'light';

  if (systemModeValue === 'dark') rootEl.classList.add('dark');
  else rootEl.classList.remove('dark');
};

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// 切换模式
const handleCommand = (command: string, setStorage = false) => {
  currentMode.value = modeList.find((item) => item.value === command)!;
  if (setStorage) window.localStorage.setItem(MODE_STORAGE_KEY, command);

  const rootEl = document.documentElement;

  if (command === 'dark') rootEl.classList.add('dark');
  else if (command === 'light') rootEl.classList.remove('dark');
  else handleSystemModeChange(mediaQuery);
};

const historyModeValue = window.localStorage.getItem(MODE_STORAGE_KEY) || 'system';
nextTick(() => {
  handleCommand(historyModeValue);
});
mediaQuery.addEventListener('change', handleSystemModeChange);
</script>

<style lang="scss" scoped>
</style>
