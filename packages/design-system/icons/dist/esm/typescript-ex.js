/**
 * @medusajs/icons v2.1.3 - MIT
 */

import * as React from 'react';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TypescriptEx = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M3.75.75h7.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3m4.711 11.281v-1.376q.35.315.757.471.408.157.824.157.245 0 .426-.047a1 1 0 0 0 .304-.131.522.522 0 0 0 .242-.445.56.56 0 0 0-.096-.323 1.1 1.1 0 0 0-.262-.262 2.7 2.7 0 0 0-.394-.232 13 13 0 0 0-.492-.228q-.672-.3-1.002-.735-.33-.434-.33-1.049 0-.481.18-.827.18-.345.49-.57.31-.223.718-.329Q10.234 6 10.69 6q.45 0 .795.058t.638.178v1.286a2 2 0 0 0-.314-.19 2.4 2.4 0 0 0-.709-.214 2.4 2.4 0 0 0-.338-.026q-.22 0-.4.045a1 1 0 0 0-.304.127.6.6 0 0 0-.192.195.5.5 0 0 0-.068.256q0 .155.076.277t.216.233.34.215.452.217q.345.154.619.328t.47.394q.195.22.3.5.105.282.104.656 0 .516-.182.866a1.55 1.55 0 0 1-.494.568 2.1 2.1 0 0 1-.727.311 4 4 0 0 1-.874.095q-.472 0-.898-.086a2.6 2.6 0 0 1-.739-.258m-.51-4.765H6.31v5.027H5.009V7.266H3.375V6.137h4.577z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
TypescriptEx.displayName = "TypescriptEx";

export { TypescriptEx as default };
//# sourceMappingURL=typescript-ex.js.map
