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
const ComputerDesktopSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M10.59 13.309a10.3 10.3 0 0 0-2.423-.448v-1.583a.667.667 0 0 0-1.334 0v1.583c-.82.053-1.634.2-2.423.448a.666.666 0 1 0 .401 1.272 9 9 0 0 1 5.377 0q.1.03.2.031a.667.667 0 0 0 .2-1.302z" }), /* @__PURE__ */ React.createElement("path", { d: "M12.167 11.945H2.833A2.446 2.446 0 0 1 .39 9.5V3.722a2.446 2.446 0 0 1 2.444-2.444h9.334a2.446 2.446 0 0 1 2.444 2.444V9.5a2.446 2.446 0 0 1-2.444 2.444M2.833 2.61c-.612 0-1.11.499-1.11 1.111V9.5c0 .613.498 1.111 1.11 1.111h9.334c.612 0 1.11-.498 1.11-1.111V3.722c0-.612-.498-1.11-1.11-1.11z" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ComputerDesktopSolid.displayName = "ComputerDesktopSolid";

export { ComputerDesktopSolid as default };
//# sourceMappingURL=computer-desktop-solid.js.map
