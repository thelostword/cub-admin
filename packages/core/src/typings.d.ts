import 'vue-router';
import type { Component } from 'vue';
import type { BadgeProps } from 'element-plus';

declare module 'vue-router' {
  interface RouteMeta {
    /**
   * 页面标题名称
   */
    title: string;
    /**
   * 菜单图标
   */
    icon?: string | Component;
    /**
   * 不缓存
   * @default false
   */
    noCache?: boolean;
    /**
   * 不在标签栏显示
   * @default false
   */
    noTag?: boolean;
    /**
 * 只注册路由，不添加菜单
 */
    onlyRoute?: boolean;
    /**
   * 只添加菜单，不注册路由
   */
    onlyMenu?: boolean;
    /**
   * 是否固定在tagsView标签栏，如果为number类型，则是在tagsView标签栏的排序
   * @default false
   */
    affix?: boolean | number;
    /**
   * 菜单排序
   */
    sort?: number;
    /**
   * badge 配置信息，同 el-badge props配置
   */
    badge?: { -readonly [K in keyof BadgeProps]?: BadgeProps[K] };
  }
}
