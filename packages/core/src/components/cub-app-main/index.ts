import { h } from 'vue';
import type { Component } from 'vue';
import { wrapperMap } from '../../store';

// reference https://github.com/vuejs/core/pull/4339
export const wrap = (fullPath: string, component: Component) => {
  let wrapper;
  const wrapperName = fullPath;
  if (wrapperMap.has(wrapperName)) {
    wrapper = wrapperMap.get(wrapperName);
  } else {
    wrapper = {
      name: wrapperName,
      render: () => h('div', component),
    };
    wrapperMap.set(wrapperName, wrapper);
  }
  return h(wrapper!);
};
