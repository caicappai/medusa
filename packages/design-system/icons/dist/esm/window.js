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
const Window = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M3.125 4.166a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25M5.209 4.166a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25" }), /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.709.708A2.417 2.417 0 0 0 .292 3.125v7.083a2.417 2.417 0 0 0 2.417 2.417h4.885a.75.75 0 0 0 0-1.5H2.709a.917.917 0 0 1-.917-.917V6.375h10.583V7.48a.75.75 0 0 0 1.5 0V3.125A2.417 2.417 0 0 0 11.46.708zm9.666 4.167H1.792v-1.75c0-.506.41-.917.917-.917h8.75c.506 0 .916.41.916.917z",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M9.11 7.434c-.78-.282-1.548.473-1.258 1.263l1.808 4.949c.32.88 1.575.854 1.86-.039l.607-1.897 1.898-.607c.891-.285.916-1.539.037-1.86l-4.95-1.808zm1.44 4.28-.908-2.488 2.488.908-.828.265a.75.75 0 0 0-.486.486z",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Window.displayName = "Window";

export { Window as default };
//# sourceMappingURL=window.js.map
