<template>
  <div class="cub-top-navigation-layout cub-w-screen cub-h-screen cub-overflow-hidden">
    <!-- HEADER -->
    <header class="cub-header cub-flex cub-items-center cub-justify-between cub-px-2 cub-gap-x-5 cub-select-none">
      <div class="cub-logo cub-overflow-hidden">
        <slot name="logo" :is-collapse="isCollapse">
          <text class="cub-flex cub-items-center cub-justify-center cub-h-full cub-font-bold cub-text-xl">
            {{ isCollapse ? 'Logo' : 'Logo Here' }}
          </text>
        </slot>
      </div>

      <div class="cub-flex-1 cub-flex cub-items-center cub-justify-end cub-gap-x-5">
        <div class="cub-flex-1">
          <slot name="headerLeft" />
        </div>
        <div class="cub-header-tools cub-flex cub-items-center cub-gap-x-3">
          <slot name="headerTools" />
        </div>
        <slot name="headerRight" />
      </div>
    </header>

    <!-- tagsView 导航 -->
    <template v-if="!noTagsView">
      <div v-if="$slots.tagsView" class="cub-tags">
        <slot name="tagsView" />
      </div>
      <CubTagsView v-else />
    </template>

    <!-- 内容区 -->
    <ElScrollbar :height="`calc(100vh - var(--cub-header-height)${noTagsView ? '' : ' - var(--cub-tagsView-height)'}`" tag="main" view-class="cub-main">
      <slot name="mainBefore" />
      <CubAppMain />
      <slot name="mainAfter" />
    </ElScrollbar>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { ElScrollbar } from 'element-plus';
import CubAppMain from '../components/cub-app-main/cub-app-main.vue';
import type { LayoutProps } from '../layout-props';
import { layoutPropsDefaults } from '../layout-props';
import { layoutProvide, CubInjectionKey } from '../layout-provider';
import CubTagsView from '../components/cub-tags-view/cub-tags-view.vue';
import { useCache } from '../hooks/use-cache';
import { isCollapse } from '../state/collapse';

const props = withDefaults(defineProps<LayoutProps>(), layoutPropsDefaults);
provide(CubInjectionKey, layoutProvide);

// eslint-disable-next-line vue/no-setup-props-destructure
useCache(props.noCache);

defineOptions({
  name: 'CubClassicLayout',
});
</script>

<style lang="scss">
@import "../assets/layout/cub-top-navigation-layout.scss";
</style>
