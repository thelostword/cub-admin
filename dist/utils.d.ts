import { Emitter } from 'mitt';
import { EventType } from 'mitt';

export declare const $to: <T>(promise: Promise<T>) => Promise<[Error, undefined] | [undefined, T]>;

export declare const emitter: Emitter<Record<EventType, unknown>>;

export declare const formatUnitValue: (value1: string | number, value2?: string | number) => string | 0;

/**
 * 姓名校验
 * @param str 要校验的名称
 * @returns
 */
export declare const isCName: (str?: string) => boolean;

/**
 * 邮箱校验
 * @param str 要检验的邮箱字符串
 * @returns
 */
export declare const isEmail: (str?: string) => boolean;

/**
 * 手机号码校验
 * @param str 要校验的号码
 * @returns
 */
export declare const isMobilePhone: (str?: string | number) => boolean;

/**
 * 昵称校验， 4-16位，中文，字母，数字，下划线，减号
 * @param str 要校验的名称
 * @returns
 */
export declare const isNickname: (str?: string) => boolean;

/**
 * 密码强度校验，最少6位字符
 * @param str 要校验的密码字符
 * @returns
 */
export declare const isPasswordLv0: (str?: string) => boolean;

/**
 * 密码强度校验，最少6位，并且必须同时包含字母和数字
 * @param str 要校验的密码字符
 */
export declare const isPasswordLv1: (str?: string) => boolean;

/**
 * 密码强度校验，最少6位，并且必须同时包含字母、数字以及特殊字符
 * @param str 要校验的密码字符
 */
export declare const isPasswordLv2: (str?: string) => boolean;

/**
 * 密码强度校验，最少6位，并且必须同时包含大写字母、小写字母、数字以及特殊字符
 * @param str 要校验的密码字符
 */
export declare const isPasswordLv3: (str?: string) => boolean;

/**
 * 邮政编码
 * @param str 要校验的编号
 * @returns
 */
export declare const isPostcode: (str?: string) => boolean;

/**
 * 固定电话校验
 * @param str 要校验的号码
 * @returns
 */
export declare const isTelPhone: (str?: string) => boolean;

/**
 * 校验是否是URL
 * @param str 要校验的链接
 * @returns
 */
export declare const isURL: (str?: string) => boolean;

/**
 * 用户名校验， 4-16位，字母，数字，下划线，减号
 * @param str 要校验的名称
 * @returns
 */
export declare const isUsername: (str?: string) => boolean;

export { }
