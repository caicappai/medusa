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
const BugAntSolid = React.forwardRef(
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
          fill: color,
          d: "M11.945 8.833h2a.667.667 0 0 0 0-1.333h-2v-.964A3.114 3.114 0 0 0 14.389 3.5a.667.667 0 0 0-1.333 0 1.78 1.78 0 0 1-1.412 1.739 2.43 2.43 0 0 0-1.477-1.19V3.5A2.67 2.67 0 0 0 7.5.833 2.67 2.67 0 0 0 4.833 3.5v.548a2.44 2.44 0 0 0-1.477 1.19A1.78 1.78 0 0 1 1.944 3.5a.667.667 0 0 0-1.333 0 3.114 3.114 0 0 0 2.445 3.036V7.5h-2a.667.667 0 0 0 0 1.333h2v.445c0 .173.027.34.046.507a3.116 3.116 0 0 0-2.49 3.048.667.667 0 0 0 1.332 0c0-.89.66-1.622 1.514-1.75a4.45 4.45 0 0 0 3.375 2.572v-4.6a.667.667 0 0 1 1.334 0v4.6a4.45 4.45 0 0 0 3.375-2.573 1.776 1.776 0 0 1 1.514 1.751.667.667 0 0 0 1.333 0 3.116 3.116 0 0 0-2.49-3.048c.019-.168.046-.333.046-.507zM6.167 3.944V3.5c0-.735.598-1.333 1.333-1.333s1.333.598 1.333 1.333v.444z"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BugAntSolid.displayName = "BugAntSolid";

export { BugAntSolid as default };
//# sourceMappingURL=bug-ant-solid.js.map
