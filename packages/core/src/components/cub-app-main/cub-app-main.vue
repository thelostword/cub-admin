<template>
  <router-view v-slot="{ Component, route }">
    <transition
      name="fade"
      mode="out-in"
    >
      <keep-alive :include="cache">
        <component
          :is="wrap(route.path, Component)"
          :key="route.path"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { cache } from '../../store';
import { wrap } from '.';
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
