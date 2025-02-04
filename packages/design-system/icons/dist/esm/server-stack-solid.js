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
const ServerStackSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M12.611 1.278H2.39c-1.103 0-2 .897-2 2v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V3.278c0-1.103-.897-2-2-2M3.278 4.833a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333m2.222 0a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333M12.611 7.944H2.39c-1.103 0-2 .897-2 2v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V9.944c0-1.103-.897-2-2-2M3.278 11.5a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334m2.222 0a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerStackSolid.displayName = "ServerStackSolid";

export { ServerStackSolid as default };
//# sourceMappingURL=server-stack-solid.js.map
