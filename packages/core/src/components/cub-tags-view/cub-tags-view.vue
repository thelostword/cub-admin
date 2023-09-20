<template>
  <div
    class="cub-tags cub-w-full cub-flex cub-items-center cub-justify-between cub-gap-x-2"
    role="navigation"
  >
    <ElScrollbar
      ref="scroll"
      wrap-class="cub-tags-wrap cub-py-1 cub-pl-1"
      view-class="cub-tags-view cub-flex cub-gap-x-1 cub-w-full cub-h-full"
      tag="ul"
      @scroll="scrollLeft = $event.scrollLeft"
    >
      <li
        v-for="item in tags"
        :key="item.fullPath"
        tabindex="0"
        class="cub-tags-view-item group cub-flex-shrink-0 cub-h-full cub-px-2 cub-py-1 cub-flex cub-items-center cub-justify-center cub-gap-x-1 cub-cursor-pointer cub-select-none"
        :class="isActive(item) ? `before:cub-content-[''] before:cub-inline-block before:cub-w-2 before:cub-h-2 before:cub-bg-white before:cub-rounded-full active` : ''"
        :aria-selected="isActive(item)"
        @click="router.push(item.fullPath || item.path)"
        @keyup.enter="router.push(item.fullPath || item.path)"
      >
        <span class="cub-text-sm">{{ item.meta?.title }}</span>
        <div
          v-if="!item.meta?.affix"
          role="button"
          tabindex="0"
          class="cub-flex cub-items-center cub-justify-center cub-py-0.5 cub-w-4 cub-h-4 cub-rounded-full cub-transition-all hover:cub-bg-black hover:cub-bg-opacity-15"
          :class="{ 'cub-opacity-0 group-hover:cub-opacity-100': !isActive(item) }"
          @click.stop="onClose(item)"
          @keyup.enter="onClose(item)"
        >
          <ElIcon :size="12" class="cub-transition-colors">
            <Close />
          </ElIcon>
        </div>
      </li>
    </ElScrollbar>

    <ElDropdown class="cub-mr-1" trigger="click" @command="handleCommand">
      <div class="cub-flex cub-items-center cub-justify-center cub-p-1 cub-rounded hover:cub-bg-black hover:cub-bg-opacity-5 cub-transition-all">
        <ElIcon color="var(--cub-tagsView-text-color)" :size="20">
          <MoreVertFilled />
        </ElIcon>
      </div>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem command="close">
            关闭本页
          </ElDropdownItem>
          <ElDropdownItem command="close-other">
            关闭其他
          </ElDropdownItem>
          <ElDropdownItem command="close-all">
            关闭全部
          </ElDropdownItem>
          <ElDropdownItem divided command="refresh">
            刷新本页
          </ElDropdownItem>
          <ElDropdownItem command="reload">
            重新加载
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  ElScrollbar, ElIcon, ElDropdown, ElDropdownItem, ElDropdownMenu,
} from 'element-plus';
import { MoreVertFilled } from '@vicons/material';
import { Close } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { tags } from '../../store';
import { useTagsView } from '../../hooks/use-tags-view';

const {
  onClose,
  onCloseOthers,
  onCloseAll,
  isActive,
  onRefresh,
} = useTagsView();

const router = useRouter();

const scroll = ref();
const scrollLeft = ref(0);
onMounted(() => {
  let leftPx = 0;
  scroll.value.$el.addEventListener('wheel', (event: WheelEvent) => {
    if (event.deltaY !== 0) {
      leftPx += event.deltaY;
      if (leftPx < 0) leftPx = 0;
      else if (leftPx > scrollLeft.value + event.deltaY) leftPx = scrollLeft.value;
      scroll.value.setScrollLeft(leftPx);
      event.preventDefault();
    }
  });
});

const handleCommand = (command: string) => {
  switch (command) {
    case 'close':
      onClose();
      break;
    case 'close-other':
      onCloseOthers();
      break;
    case 'close-all':
      onCloseAll();
      break;
    case 'refresh':
      onRefresh();
      break;
    case 'reload':
      window.location.reload();
      break;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
:deep() {
  .el-scrollbar__bar.is-horizontal {
    height: 4px;
  }
  .el-scrollbar__bar {
    bottom: -2px;
  }
}
</style>
