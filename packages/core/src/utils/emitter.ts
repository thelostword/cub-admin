// import mitt from 'mitt';
// import type { EventHandlerMap } from 'mitt';
// import type { EagerGlobModule, CubRouteRecordRaw } from '../typescript';

// export type RegisterRoutesOptions = {
//   routes: CubRouteRecordRaw[];
//   viewsPath: string
//   modules: EagerGlobModule;
// };
// export type RegisterRoutesModuleName = string | symbol;
// export type RegisterOptions = [RegisterRoutesModuleName, RegisterRoutesOptions] | [RegisterRoutesOptions];

// type EventKey = symbol | undefined;
// export type RegisterArgs = {
//   options: RegisterOptions;
//   eventKey: EventKey;
// };

// export const SETUP_ROUTES_DONE_KEY = Symbol();

// type Events = {
//   [SETUP_ROUTES_DONE_KEY]: EventKey;
// };

// const events: EventHandlerMap<Events> = new Map();
// export const emitter = mitt(events);
