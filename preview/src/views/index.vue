<template>
  <div class="page1">
    <CubPageHeader>
      <template #extra>
        <div class="cub-flex-inline cub-gap-x-2">
          <el-tag type="success">
            示例
          </el-tag>
          <el-tag type="danger">
            示例
          </el-tag>
        </div>
      </template>
      <template #right>
        <el-button>引用草稿</el-button>
        <el-button type="primary">
          存草稿
        </el-button>
      </template>
    </CubPageHeader>
    <h1 v-for="item in 100" :key="item">
      {{ item }}
    </h1>
    <i class="iconfont icon-chanpin" />
  </div>
</template>

<script setup lang="ts" name="PageHome">
import { onMounted } from 'vue';
import { CubPageHeader } from '@cub-admin/components';

onMounted(() => {

});

</script>

<style lang="scss" scoped>
.icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
