<template>
  <ElTooltip
    trigger="hover"
    :content="isFullscreen ? '退出全屏' : '全屏'"
    :enterable="false"
    effect="light"
  >
    <div class="cub-fullscreen-btn cub-flex cub-items-center cub-justify-center cub-p-1 cub-rounded-sm hover:cub-bg-white hover:cub-bg-opacity-5 cub-transition-all" role="button" tabindex="0" @click="toggle()" @keyup.enter="toggle()">
      <ElIcon :size="26" color="var(--cub-header-text-color)">
        <FullscreenFilled v-if="!isFullscreen" />
        <FullscreenExitFilled v-else />
      </ElIcon>
    </div>
  </ElTooltip>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
import { ElIcon, ElTooltip } from 'element-plus';
import { FullscreenFilled, FullscreenExitFilled } from '@vicons/material';

const { isFullscreen, toggle } = useFullscreen();
</script>
