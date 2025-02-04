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
const Shopping = React.forwardRef(
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
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React.createElement("path", { d: "M8.333 4.842a1.67 1.67 0 0 0-1.307-.633H3.39c-.86 0-1.578.653-1.66 1.508l-.515 5.417a1.667 1.667 0 0 0 1.659 1.825h1.292" }),
        /* @__PURE__ */ React.createElement("path", { d: "M8.184 7.125h3.631c.86 0 1.58.655 1.66 1.51l.312 3.334a1.667 1.667 0 0 1-1.66 1.822H7.873c-.982 0-1.751-.845-1.66-1.822l.313-3.334c.08-.856.8-1.51 1.66-1.51M3.542 4.208V2.542a1.666 1.666 0 1 1 3.333 0v1.666" }),
        /* @__PURE__ */ React.createElement("path", { d: "M11.458 9.209v.208a1.459 1.459 0 0 1-2.916 0v-.208" })
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Shopping.displayName = "Shopping";

export { Shopping as default };
//# sourceMappingURL=shopping.js.map
