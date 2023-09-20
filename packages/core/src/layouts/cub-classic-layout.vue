<template>
  <div class="cub-layout cub-w-screen cub-h-screen cub-overflow-hidden cub-flex">
    <!-- 侧边栏 -->
    <div class="cub-sidebar cub-flex-shrink-0 cub-select-none cub-shadow-sm cub-overflow-hidden" :class="{ 'cub-sidebar--collapse': isCollapse }">
      <!-- LOGO -->
      <div class="cub-logo cub-overflow-hidden">
        <slot name="logo" :is-collapse="isCollapse">
          <text class="cub-flex cub-items-center cub-justify-center cub-h-full cub-font-bold cub-text-xl">
            {{ isCollapse ? 'Logo' : 'Logo Here' }}
          </text>
        </slot>
      </div>
      <!-- 导航菜单 -->
      <CubMenu />
    </div>

    <div class="cub-flex-1 cub-overflow-hidden">
      <!-- HEADER -->
      <header class="cub-header cub-flex cub-items-center cub-justify-between cub-px-2 cub-gap-x-5 cub-select-none">
        <CollapseBtn />
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
      <CubTagsView v-if="!noTagsView" />

      <!-- 内容区 -->
      <ElScrollbar :height="`calc(100vh - var(--cub-header-height)${noTagsView ? '' : ' - var(--cub-tagsView-height)'}`" tag="main" view-class="cub-main">
        <slot name="mainBefore" />
        <router-view v-slot="{ Component, route }">
          <transition
            name="fade"
            mode="out-in"
          >
            <keep-alive :include="cache.dynamic">
              <component
                :is="Component"
                :key="route.path"
              />
            </keep-alive>
          </transition>
        </router-view>
        <slot name="mainAfter" />
      </ElScrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import CubMenu from '../components/cub-menu/cub-menu.vue';
import type { LayoutProps } from '../layout-props';
import { layoutPropsDefaults } from '../layout-props';
import { layoutProvide, CubInjectionKey } from '../layout-provider';
import CollapseBtn from '../components/collapse-btn/collapse-btn.vue';
import CubTagsView from '../components/cub-tags-view/cub-tags-view.vue';
import { cache } from '../store';
import { useCache } from '../hooks/use-cache';
import { isCollapse } from '../state/collapse';

const props = withDefaults(defineProps<LayoutProps>(), layoutPropsDefaults);
provide(CubInjectionKey, layoutProvide);

useCache(props.noCache);

defineOptions({
  name: 'CubClassicLayout',
});
</script>

<style lang="scss" scoped>
.fade {
  &-leave-active,
  &-enter-active {
    transition: all .5s ease;
  }
  &-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
