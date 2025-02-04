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
const GiftSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M2.167 7.944v4.223A2.446 2.446 0 0 0 4.61 14.61h2.222V7.944zM8.167 7.944v6.667h2.222a2.446 2.446 0 0 0 2.444-2.444V7.944zM13.056 3.5h-.411a2.2 2.2 0 0 0 .188-.889A2.225 2.225 0 0 0 10.611.39C9.046.389 8.065 1.483 7.5 2.468 6.935 1.484 5.954.388 4.389.388a2.225 2.225 0 0 0-2.222 2.223c0 .317.068.616.188.889h-.41c-.858 0-1.556.69-1.556 1.556 0 .865.698 1.555 1.555 1.555h11.112a1.555 1.555 0 1 0 0-3.111M10.61 1.722a.89.89 0 0 1 0 1.778h-2.15c.36-.764 1.045-1.778 2.15-1.778m-7.111.89a.89.89 0 0 1 .889-.89c1.097 0 1.784 1.014 2.147 1.778H4.389a.89.89 0 0 1-.889-.889" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GiftSolid.displayName = "GiftSolid";

export { GiftSolid as default };
//# sourceMappingURL=gift-solid.js.map
