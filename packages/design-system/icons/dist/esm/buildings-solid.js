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
const BuildingsSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M1.945 14.611a.667.667 0 0 1-.667-.667V3.422c0-.626.372-1.189.95-1.432l4-1.693a1.55 1.55 0 0 1 1.464.136c.437.29.696.775.696 1.297v1.548a.667.667 0 0 1-1.333 0V1.73a.22.22 0 0 0-.1-.186.21.21 0 0 0-.21-.018l-4 1.691a.22.22 0 0 0-.135.205v10.523a.666.666 0 0 1-.665.666" }), /* @__PURE__ */ React.createElement("path", { d: "M13.945 13.278h-.223v-6.89c0-.857-.697-1.555-1.555-1.555h-4.89c-.857 0-1.555.698-1.555 1.556v6.889H1.056a.667.667 0 0 0 0 1.333h12.888a.667.667 0 0 0 0-1.333m-4.667-2a.667.667 0 0 1-1.334 0v-.445a.667.667 0 0 1 1.334 0zm0-2.667a.667.667 0 0 1-1.334 0v-.444a.667.667 0 0 1 1.334 0zm2.222 2.667a.667.667 0 0 1-1.333 0v-.445a.667.667 0 0 1 1.333 0zm0-2.667a.667.667 0 0 1-1.333 0v-.444a.667.667 0 0 1 1.333 0z" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingsSolid.displayName = "BuildingsSolid";

export { BuildingsSolid as default };
//# sourceMappingURL=buildings-solid.js.map
