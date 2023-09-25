<template>
  <div>
    <h1>页面缓存测试</h1>
    <el-input v-model="value" />
    <el-button @click="unregisterRoutes('demo')">
      卸载路由
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { unregisterRoutes } from '@cub-admin/core';

const value = ref('');

defineOptions({
  name: 'PageDemo1',
});
onMounted(() => {

});

</script>
