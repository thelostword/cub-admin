<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <template
      v-for="item in route.matched"
      :key="item.path"
    >
      <el-breadcrumb-item v-if="item.meta.title" class="cub-opacity-80">
        <ElIcon v-if="item.meta.icon">
          <component :is="item.meta.icon" />
        </ElIcon>
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
:deep(.el-breadcrumb__inner) {
  display: flex;
  align-items: center;
  column-gap: 2px;
  color: inherit !important;
}
</style>
