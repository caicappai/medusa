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
const Camera = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.582 1.869c.24-.64.85-1.063 1.534-1.063h2.768c.684 0 1.295.424 1.534 1.064l.268.713h1.48a2.527 2.527 0 0 1 2.529 2.528v5.778a2.527 2.527 0 0 1-2.528 2.528H2.833a2.527 2.527 0 0 1-2.527-2.528V5.111a2.527 2.527 0 0 1 2.527-2.528h1.48zm1.534.437a.14.14 0 0 0-.13.09l-.45 1.201a.75.75 0 0 1-.703.486h-2c-.568 0-1.027.46-1.027 1.028v5.778c0 .568.46 1.028 1.027 1.028h9.334c.568 0 1.028-.46 1.028-1.028V5.111c0-.568-.46-1.028-1.028-1.028h-2a.75.75 0 0 1-.702-.486l-.451-1.2a.14.14 0 0 0-.13-.091z",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.5 6.306a1.694 1.694 0 1 0 0 3.389 1.694 1.694 0 0 0 0-3.39M4.306 8a3.194 3.194 0 1 1 6.389 0 3.194 3.194 0 0 1-6.39 0",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React.createElement("path", { d: "M3.278 6.222a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Camera.displayName = "Camera";

export { Camera as default };
//# sourceMappingURL=camera.js.map
