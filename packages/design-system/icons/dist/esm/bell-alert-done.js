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
const BellAlertDone = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("circle", { cx: 12.5, cy: 2.5, r: 2.5, fill: "#60A5FA" }), /* @__PURE__ */ React.createElement(
        "circle",
        {
          cx: 12.5,
          cy: 2.5,
          r: 2,
          stroke: color,
          strokeOpacity: 0.12
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "M8.993.575A4.973 4.973 0 0 0 2.528 5.32v4.223c0 .568-.46 1.028-1.028 1.028a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5c-.568 0-1.028-.46-1.028-1.028V6.5a4 4 0 0 1-1.5-.302v3.344c0 .366.078.714.218 1.028H3.81a2.5 2.5 0 0 0 .218-1.028V5.32A3.473 3.473 0 0 1 8.53 2.003c.063-.512.223-.994.462-1.428M8.912 13.04a.44.44 0 0 0-.345-.165H6.434a.444.444 0 0 0-.434.536c.153.73.771 1.242 1.5 1.242.73 0 1.348-.511 1.502-1.242a.45.45 0 0 0-.09-.372"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BellAlertDone.displayName = "BellAlertDone";

export { BellAlertDone as default };
//# sourceMappingURL=bell-alert-done.js.map
