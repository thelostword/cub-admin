import { m as c, j as d, a as m, b as u, l as v, d as P, e as l, f, g as p, h as w, c as L, i as h, k as b } from "./emitter-70839255.js";
import "mitt";
const r = (e, s) => {
  const a = e || s || 0;
  return typeof a == "number" && a !== 0 ? `${a}px` : a;
}, t = async (e) => {
  try {
    return [void 0, await e];
  } catch (s) {
    return [s, void 0];
  }
};
export {
  t as $to,
  c as emitter,
  r as formatUnitValue,
  d as isCName,
  m as isEmail,
  u as isMobilePhone,
  v as isNickname,
  P as isPasswordLv0,
  l as isPasswordLv1,
  f as isPasswordLv2,
  p as isPasswordLv3,
  w as isPostcode,
  L as isTelPhone,
  h as isURL,
  b as isUsername
};
