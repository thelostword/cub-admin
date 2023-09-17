import { AllowedComponentProps } from 'vue';
import type { BadgeProps } from 'element-plus';
import type { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { InjectionKey } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { RouteComponent } from 'vue-router';
import type { RouteLocationNormalized } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { VNodeProps } from 'vue';

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const addCache: (route: RouteLocationNormalized) => void;

export declare const addTag: (route: RouteLocationNormalized, isBefore?: boolean) => void;

export declare const cache: Cache_2;

declare type Cache_2 = {
    permanent: string[];
    dynamic: string[];
};

export declare const clearCaches: () => void;

export declare const clearTags: () => void;

export declare const CubLayout: __VLS_WithTemplateSlots<DefineComponent<{
    noCache: {
        type: PropType<boolean>;
        default: InferDefault<LayoutProps, boolean | undefined> | undefined;
    };
    showTagsView: {
        type: PropType<boolean>;
        default: InferDefault<LayoutProps, boolean | undefined> | undefined;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    noCache: {
        type: PropType<boolean>;
        default: InferDefault<LayoutProps, boolean | undefined> | undefined;
    };
    showTagsView: {
        type: PropType<boolean>;
        default: InferDefault<LayoutProps, boolean | undefined> | undefined;
    };
}>>, {
    noCache: boolean;
    showTagsView: boolean;
}, {}>, {
    logo?(_: {
        isCollapse: boolean;
    }): any;
    headerLeft?(_: {}): any;
    headerTools?(_: {}): any;
    headerRight?(_: {}): any;
    mainBefore?(_: {}): any;
    mainAfter?(_: {}): any;
}>;

export declare type CubRouteRecordRaw = Omit<RouteRecordRaw, 'component' | 'children'> & ({
    component: string | RouteComponent;
    children: CubSubRouteRecordRaw[];
} | {
    component: string | RouteComponent;
    children?: undefined;
} | {
    component?: undefined;
    children?: undefined;
});

export declare type CubSubRouteRecordRaw = Omit<RouteRecordRaw, 'component' | 'children'> & ({
    component: string | RouteComponent;
    children: CubSubRouteRecordRaw[];
} | {
    component: string | RouteComponent;
    children?: undefined;
} | {
    component?: undefined;
    children?: CubSubRouteRecordRaw[];
});

export declare type CustomSize = string | number;

export declare type EagerGlobModule = {
    [path: string]: {
        default: () => Component;
    };
};

export declare type InferDefault<P, T> = ((props: P) => T & {}) | (T extends NativeType ? T : never);

export declare type InferDefaults<T> = {
    [K in keyof T]?: InferDefault<T, T[K]>;
};

export declare const CubInjectionKey: InjectionKey<typeof layoutProvide>;

export declare type LayoutInstance = InstanceType<typeof CubLayout>;

declare type LayoutProps = {
    /**
     * 是否使用tagsView
     */
    showTagsView?: boolean;
    /**
     * 不缓存，为true时，路由元信息中未配置noCache的组件也将不再缓存
     */
    noCache?: boolean;
};

declare const layoutProvide: {
    isCollapse: Ref<boolean>;
    toggleCollapse: (v?: boolean | undefined) => void;
};

export declare type MenuRecord = {
    /**
     * 菜单名称
     */
    name: string;
    /**
     * 菜单路径
     */
    path: string;
    /**
     * 菜单图标
     */
    icon?: string | Component;
    /**
     * 菜单排序
     */
    sort: number;
    /**
     * badge 配置 同 el-badge props
     */
    badge?: {
        -readonly [K in keyof BadgeProps]?: BadgeProps[K];
    };
    /**
     * 子菜单
     */
    children?: MenuRecord[];
};

export declare const metadata: {
    name: string;
    version: string;
    description: string;
    author: {
        name: string;
        email: string;
        url: string;
    };
    license: string;
    homepage: string;
    devDependencies: {
        "@commitlint/cli": string;
        "@commitlint/config-conventional": string;
        "@commitlint/cz-commitlint": string;
        "@cub-admin/components": string;
        "@cub-admin/core": string;
        "@cub-admin/utils": string;
        "@element-plus/icons-vue": string;
        "@release-it/conventional-changelog": string;
        "@rushstack/eslint-patch": string;
        "@types/color": string;
        "@types/lodash-es": string;
        "@types/path-browserify": string;
        "@unocss/reset": string;
        "@vicons/material": string;
        "@vitejs/plugin-vue": string;
        "@vue/eslint-config-airbnb-with-typescript": string;
        "@vueuse/core": string;
        commitizen: string;
        "element-plus": string;
        husky: string;
        lexical: string;
        "lint-staged": string;
        "lodash-es": string;
        "path-browserify": string;
        "release-it": string;
        sass: string;
        typescript: string;
        unocss: string;
        "unplugin-vue-setup-extend-plus": string;
        vite: string;
        "vite-plugin-dts": string;
        "vite-svg-loader": string;
        vue: string;
        "vue-router": string;
        "vue-tsc": string;
    };
    peerDependencies: {
        "@element-plus/icons-vue": string;
        "@vueuse/core": string;
        "element-plus": string;
        "lodash-es": string;
        vue: string;
        "vue-router": string;
    };
};

export declare type NativeType = null | number | string | boolean | symbol | Function;

export declare type NonEmptyArray<T> = [T, ...T[]];

export declare const registerRoutes: (...args: RegisterRoutesArgs) => void;

declare type RegisterRoutesArgs = [RegisterRoutesModuleName, RegisterRoutesOptions] | [RegisterRoutesOptions];

declare type RegisterRoutesModuleName = string | symbol;

declare type RegisterRoutesOptions = {
    routes: CubRouteRecordRaw[];
    viewsPath: string;
    modules: EagerGlobModule;
};

export declare const removeCache: (route: RouteLocationNormalized) => void;

export declare const removeOtherCaches: (route: RouteLocationNormalized) => void;

export declare const removeOtherTags: (route: RouteLocationNormalized) => void;

export declare const removeTag: (route: RouteLocationNormalized) => void;

declare type Tags = {
    dynamic: RouteLocationNormalized[];
};

export declare const tags: Tags;

export declare const unregisterRoutes: (name?: RegisterRoutesModuleName) => void;

export { }
