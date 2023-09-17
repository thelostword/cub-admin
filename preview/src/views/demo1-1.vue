<template>
  <div>
    <h1>页面缓存测试</h1>
    <el-input v-model="value" />
  </div>
</template>

<script setup lang="ts" name="PageDemo1-1">
import { onMounted, ref } from 'vue';

const value = ref('');

onMounted(() => {

});

</script>
