<template>
  <div>
    <div>缓存测试</div>
    <input v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'PageDemo2',
});

const value = ref('');

</script>
