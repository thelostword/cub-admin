<template>
  <div>
    <h1>页面缓存测试</h1>
    <el-input v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineOptions({
  name: 'PageDemo11',
});
const value = ref('');

onMounted(() => {

});

</script>
