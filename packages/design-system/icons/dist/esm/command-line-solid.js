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
const CommandLineSolid = React.forwardRef(
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
          d: "M11.278 1.278H3.722a2.446 2.446 0 0 0-2.444 2.444v7.556a2.446 2.446 0 0 0 2.444 2.444h7.556a2.447 2.447 0 0 0 2.444-2.444V3.722a2.446 2.446 0 0 0-2.444-2.444M5.082 10.86a.665.665 0 1 1-.942-.943l1.751-1.751L4.14 6.415a.667.667 0 1 1 .943-.943l2.222 2.222c.26.26.26.683 0 .943l-2.222 2.222zm5.307.196H8.167a.667.667 0 0 1 0-1.334h2.222a.667.667 0 0 1 0 1.334"
        }
      )
    );
  }
);
CommandLineSolid.displayName = "CommandLineSolid";

export { CommandLineSolid as default };
//# sourceMappingURL=command-line-solid.js.map
