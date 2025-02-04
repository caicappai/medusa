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
const CurrencyDollarSolid = React.forwardRef(
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
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m1.871 9.994c-.313.32-.736.538-1.204.645v.25a.667.667 0 0 1-1.334 0v-.247c-.876-.183-1.49-.72-1.748-1.568a.666.666 0 1 1 1.275-.389c.106.346.328.699 1.175.699.355 0 .686-.121.883-.322a.66.66 0 0 0 .194-.49c-.007-.288-.11-.612-1.237-.814-1.758-.314-2.114-1.335-2.17-1.916-.055-.575.104-1.086.46-1.478.318-.349.753-.545 1.17-.653v-.378a.667.667 0 0 1 1.333 0v.358A2.23 2.23 0 0 1 9.73 5.42a.667.667 0 0 1-1.228.518c-.064-.15-.258-.61-.967-.61-.246 0-.683.1-.884.321-.063.07-.145.193-.12.454.013.136.053.549 1.077.732 1.522.273 2.309.977 2.336 2.093a2 2 0 0 1-.573 1.455"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CurrencyDollarSolid.displayName = "CurrencyDollarSolid";

export { CurrencyDollarSolid as default };
//# sourceMappingURL=currency-dollar-solid.js.map
