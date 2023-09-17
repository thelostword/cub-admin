import { ref } from 'vue';

export const isCollapse = ref(false);

export const toggleCollapse = (v?: boolean) => {
  if (typeof v === 'boolean') isCollapse.value = v;
  else isCollapse.value = !isCollapse.value;
};
