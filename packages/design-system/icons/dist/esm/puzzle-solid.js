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
const PuzzleSolid = React.forwardRef(
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
          d: "M13.201 7.202a.667.667 0 0 0 .966-.595v-1.55a2.446 2.446 0 0 0-2.445-2.445h-1.578c.01-.074.023-.146.023-.222A1.78 1.78 0 0 0 8.389.612 1.78 1.78 0 0 0 6.61 2.39c0 .076.013.148.022.222H5.056A2.446 2.446 0 0 0 2.61 5.057v1.577c-.074-.01-.146-.022-.222-.022A1.78 1.78 0 0 0 .61 8.39c0 .98.797 1.778 1.778 1.778.076 0 .148-.014.222-.023v1.578a2.446 2.446 0 0 0 2.445 2.445h1.55a.67.67 0 0 0 .596-.965 1.3 1.3 0 0 1-.146-.59c0-.736.598-1.334 1.333-1.334s1.333.598 1.333 1.333q0 .297-.147.592a.665.665 0 0 0 .597.964h1.55a2.446 2.446 0 0 0 2.445-2.445v-1.55a.668.668 0 0 0-.966-.596c-.913.458-1.923-.253-1.923-1.186 0-.934 1.008-1.645 1.923-1.187z"
        }
      )
    );
  }
);
PuzzleSolid.displayName = "PuzzleSolid";

export { PuzzleSolid as default };
//# sourceMappingURL=puzzle-solid.js.map
