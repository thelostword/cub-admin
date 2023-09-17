import type { InferDefaults } from './typescript';
// props
export type LayoutProps = {
  /**
   * 不使用tagsView
   * @default false
   */
  noTagsView?: boolean;
  /**
   * 不缓存，为true时，路由元信息中未配置noCache的组件也将不再缓存
   * @default false
   */
  noCache?: boolean;
};

export const layoutPropsDefaults: InferDefaults<LayoutProps> = {
  noTagsView: false,
  noCache: false,
};
