<template>
  <div
    role="button"
    tabindex="0"
    class="cub-collapse cub-flex cub-items-center cub-justify-center cub-px-1 cub-py-1.5 cub-rounded-sm hover:cub-bg-white hover:cub-bg-opacity-5 cub-transition-all"
    @click="toggleCollapse()"
    @keyup.enter="toggleCollapse()"
  >
    <ElIcon :size="24" color="var(--cub-header-text-color)">
      <Expand v-show="isCollapse" />
      <Fold v-show="!isCollapse" />
    </ElIcon>
  </div>
</template>

<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { Expand, Fold } from '@element-plus/icons-vue';
import { isCollapse, toggleCollapse } from '../../state/collapse';
</script>
