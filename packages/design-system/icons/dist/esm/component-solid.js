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
const ComponentSolid = React.forwardRef(
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
          fill: color,
          fillRule: "evenodd",
          clipPath: "url(#a)",
          clipRule: "evenodd"
        },
        /* @__PURE__ */ React.createElement("path", { d: "M2.815 4.766a.65.65 0 0 1 .92 0L6.008 7.04a.65.65 0 0 1 0 .92l-2.275 2.275a.65.65 0 0 1-.919 0L.54 7.96a.65.65 0 0 1 0-.92zM7.04.54a.65.65 0 0 1 .92 0l2.274 2.276a.65.65 0 0 1 0 .919L7.96 6.01a.65.65 0 0 1-.919 0L4.765 3.735a.65.65 0 0 1 0-.92zM11.265 4.766a.65.65 0 0 1 .92 0L14.46 7.04a.65.65 0 0 1 0 .92l-2.275 2.275a.65.65 0 0 1-.92 0L8.99 7.96a.65.65 0 0 1 0-.92zM7.04 8.99a.65.65 0 0 1 .92 0l2.274 2.275a.65.65 0 0 1 0 .92L7.96 14.459a.65.65 0 0 1-.919 0l-2.275-2.274a.65.65 0 0 1 0-.92z" })
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ComponentSolid.displayName = "ComponentSolid";

export { ComponentSolid as default };
//# sourceMappingURL=component-solid.js.map
