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
const Swatch = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.793 13.207A2.7 2.7 0 0 0 3.708 14m-1.915-.793A2.7 2.7 0 0 0 3.708 14m-1.915-.793A2.7 2.7 0 0 1 1 11.29V1.812C1 1.364 1.364 1 1.813 1h3.791c.449 0 .813.364.813.812v2.941M3.708 14a2.7 2.7 0 0 0 1.916-.793M3.708 14a2.7 2.7 0 0 0 1.916-.793M3.708 14h9.48a.813.813 0 0 0 .812-.813V9.396a.813.813 0 0 0-.812-.813h-2.941m-4.623 4.624 4.623-4.624m-4.623 4.624a2.7 2.7 0 0 0 .793-1.916V4.753m3.83 3.83 2.079-2.08a.81.81 0 0 0 0-1.148L9.645 2.673a.81.81 0 0 0-1.148 0l-2.08 2.08m-2.709 6.538h.006v.006h-.006z"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Swatch.displayName = "Swatch";

export { Swatch as default };
//# sourceMappingURL=swatch.js.map
