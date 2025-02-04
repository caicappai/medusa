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
const UsersSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M4.792 7.5a2.292 2.292 0 1 0 0-4.583 2.292 2.292 0 0 0 0 4.583M10 5.417a2.292 2.292 0 1 0 0-4.584 2.292 2.292 0 0 0 0 4.584M14.33 9.248A4.65 4.65 0 0 0 10 6.25c-1.18 0-2.293.46-3.133 1.233 1.545.591 2.821 1.808 3.425 3.408.093.246.135.502.151.758a10.8 10.8 0 0 0 2.971-.538c.38-.127.695-.406.868-.766.166-.35.184-.74.049-1.097zM9.122 11.332a4.65 4.65 0 0 0-4.33-2.999 4.65 4.65 0 0 0-4.33 2.999c-.135.357-.118.746.049 1.096.172.36.487.64.867.766a10.77 10.77 0 0 0 6.827 0c.38-.127.695-.406.868-.766.166-.35.184-.74.049-1.096" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
UsersSolid.displayName = "UsersSolid";

export { UsersSolid as default };
//# sourceMappingURL=users-solid.js.map
