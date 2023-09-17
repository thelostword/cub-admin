<template>
  <div class="cub-page-header cub-p-3">
    <div class="cub-flex cub-justify-between cub-gap-5">
      <div class="cub-inline-flex cub-items-center cub-gap-x-5">
        <template v-if="$slots.title">
          <slot name="title" />
        </template>
        <h1 v-else class="cub-text-xl cub-font-bold ">
          {{ title || $route.meta?.title }}
        </h1>
        <slot name="extra" />
      </div>
      <div>
        <slot name="right" />
      </div>
    </div>
    <div v-if="$slots.default" class="cub-mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>();
</script>

<style lang="scss" scoped>
.cub-page-header {
  background-color: var(--cub-section-bg-color);
}
</style>
