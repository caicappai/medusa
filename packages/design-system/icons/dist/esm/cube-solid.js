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
const CubeSolid = React.forwardRef(
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
          d: "M13.4 4.095s-.001-.01-.004-.015q-.006-.006-.012-.013c-.21-.359-.509-.666-.879-.88L8.727.996a2.45 2.45 0 0 0-2.454 0L2.496 3.187a2.44 2.44 0 0 0-.88.88q-.005.006-.012.013-.003.008-.004.015a2.44 2.44 0 0 0-.322 1.207v4.396c0 .869.466 1.678 1.218 2.115l3.777 2.191c.376.217.795.325 1.215.327l.012.003q.006-.001.013-.003c.42-.002.84-.11 1.214-.327l3.778-2.191a2.45 2.45 0 0 0 1.217-2.114V5.302c0-.43-.115-.845-.322-1.207M3.165 10.66a1.12 1.12 0 0 1-.554-.962V5.435l4.222 2.449v4.902zm8.67 0-3.668 2.128V7.885l4.222-2.449v4.263c0 .395-.212.763-.554.961"
        }
      )
    );
  }
);
CubeSolid.displayName = "CubeSolid";

export { CubeSolid as default };
//# sourceMappingURL=cube-solid.js.map
