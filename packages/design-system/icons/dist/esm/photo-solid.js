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
const PhotoSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M11.228 6.952a2.45 2.45 0 0 0-3.457 0l-5.545 5.546c.19.07.393.113.607.113h9.334c.982 0 1.777-.796 1.777-1.778V9.668z" }), /* @__PURE__ */ React.createElement("path", { d: "M12.167 13.278H2.833A2.446 2.446 0 0 1 .39 10.833V4.167a2.446 2.446 0 0 1 2.444-2.445h9.334a2.446 2.446 0 0 1 2.444 2.445v6.666a2.446 2.446 0 0 1-2.444 2.445M2.833 3.056c-.612 0-1.11.498-1.11 1.11v6.667c0 .613.498 1.111 1.11 1.111h9.334c.612 0 1.11-.498 1.11-1.11V4.166c0-.613-.498-1.111-1.11-1.111z" }), /* @__PURE__ */ React.createElement("path", { d: "M4.611 7.056a1.111 1.111 0 1 0 0-2.223 1.111 1.111 0 0 0 0 2.223" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
PhotoSolid.displayName = "PhotoSolid";

export { PhotoSolid as default };
//# sourceMappingURL=photo-solid.js.map
