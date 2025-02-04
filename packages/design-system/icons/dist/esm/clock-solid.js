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
const ClockSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M14.167 3.278a.66.66 0 0 1-.472-.196l-1.777-1.778a.667.667 0 0 1 .943-.943l1.778 1.778a.667.667 0 0 1-.472 1.139M.833 3.278a.667.667 0 0 1-.471-1.139L2.14.362a.667.667 0 1 1 .943.943L1.305 3.083c-.13.13-.3.196-.47.196zM12.342 11.399a6.2 6.2 0 0 0 1.38-3.899A6.23 6.23 0 0 0 7.5 1.278 6.23 6.23 0 0 0 1.278 7.5a6.2 6.2 0 0 0 1.38 3.899l-1.185 1.185a.667.667 0 0 0 .943.943L3.6 12.342a6.2 6.2 0 0 0 3.899 1.38 6.2 6.2 0 0 0 3.9-1.38l1.185 1.185a.665.665 0 0 0 .942 0 .667.667 0 0 0 0-.943zm-1.835-1.986a.665.665 0 0 1-.92.204L7.143 8.062a.67.67 0 0 1-.309-.563V4.61a.667.667 0 0 1 1.334 0v2.523l2.136 1.36c.31.197.4.609.203.92" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ClockSolid.displayName = "ClockSolid";

export { ClockSolid as default };
//# sourceMappingURL=clock-solid.js.map
