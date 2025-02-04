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
const LockClosedSolid = React.forwardRef(
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
          d: "M10.389 7.5a.667.667 0 0 1-.667-.667V3.944A2.225 2.225 0 0 0 7.5 1.722a2.225 2.225 0 0 0-2.222 2.222v2.89a.667.667 0 0 1-1.334 0v-2.89A3.56 3.56 0 0 1 7.5.39a3.56 3.56 0 0 1 3.556 3.555v2.89a.667.667 0 0 1-.667.666"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "M10.833 6.167H4.167A2.446 2.446 0 0 0 1.722 8.61v3.556a2.446 2.446 0 0 0 2.445 2.444h6.666a2.446 2.446 0 0 0 2.445-2.444V8.61a2.446 2.446 0 0 0-2.445-2.444m-2.666 4.666a.667.667 0 0 1-1.334 0v-.889a.667.667 0 0 1 1.334 0z"
        }
      )
    );
  }
);
LockClosedSolid.displayName = "LockClosedSolid";

export { LockClosedSolid as default };
//# sourceMappingURL=lock-closed-solid.js.map
