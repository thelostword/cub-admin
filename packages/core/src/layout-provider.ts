import type { InjectionKey } from 'vue';
import { reactive } from 'vue';

export const layoutProvide = reactive({});
export const CubInjectionKey: InjectionKey<typeof layoutProvide> = Symbol('cub.injection.key');
