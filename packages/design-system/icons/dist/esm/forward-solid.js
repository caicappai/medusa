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
const ForwardSolid = React.forwardRef(
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
          d: "M14.23 6.619 8.19 3.27a1 1 0 0 0-.998.014 1 1 0 0 0-.497.867v1.862l-4.95-2.742a1 1 0 0 0-.999.013 1 1 0 0 0-.496.867v6.696c0 .36.185.685.496.867.16.094.335.142.511.142.168 0 .334-.043.487-.128l4.95-2.743v1.862c0 .36.186.685.497.867.159.094.335.142.51.142.168 0 .335-.043.488-.128l6.042-3.348a1.008 1.008 0 0 0 0-1.762"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ForwardSolid.displayName = "ForwardSolid";

export { ForwardSolid as default };
//# sourceMappingURL=forward-solid.js.map
