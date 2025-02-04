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
const SparklesSolid = React.forwardRef(
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
          d: "m1.582 3.905 1.123.375.374 1.122a.446.446 0 0 0 .844 0l.375-1.122 1.122-.375a.444.444 0 0 0 0-.842l-1.122-.375-.375-1.122c-.121-.363-.721-.363-.843 0l-.374 1.122-1.123.375a.444.444 0 0 0-.001.842M13.418 11.063l-1.122-.375-.375-1.122c-.121-.363-.721-.363-.843 0l-.374 1.122-1.123.375a.444.444 0 0 0 0 .842l1.123.375.374 1.122a.446.446 0 0 0 .844 0l.374-1.122 1.123-.375a.445.445 0 0 0 0-.842M7.967 9.531l-1.801-.713-.713-1.802c-.202-.508-1.038-.508-1.24 0L3.5 8.818l-1.8.713a.668.668 0 0 0 0 1.24l1.8.712.713 1.802a.667.667 0 0 0 1.239 0l.713-1.802 1.8-.713a.667.667 0 0 0 .002-1.239M13.3 4.198l-1.8-.713-.714-1.802c-.201-.508-1.038-.508-1.24 0l-.713 1.802-1.8.713a.668.668 0 0 0 0 1.239l1.8.713.713 1.802a.667.667 0 0 0 1.24 0l.712-1.802 1.801-.713a.668.668 0 0 0 .001-1.24"
        }
      )
    );
  }
);
SparklesSolid.displayName = "SparklesSolid";

export { SparklesSolid as default };
//# sourceMappingURL=sparkles-solid.js.map
