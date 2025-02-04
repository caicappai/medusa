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
const ToolsSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M13.944 7.056H12.39V4.344l.8-1.402a.67.67 0 0 0 .062-.514L12.807.872a.67.67 0 0 0-.641-.483h-.89a.666.666 0 0 0-.64.483l-.444 1.556a.67.67 0 0 0 .06.514l.802 1.402v2.712H9.498a.667.667 0 0 0 0 1.333h.222v4.667c0 .857.698 1.555 1.556 1.555h.889c.858 0 1.555-.698 1.555-1.555V8.389h.223a.667.667 0 0 0 0-1.333zm-1.555 6c0 .122-.1.222-.222.222h-.89a.22.22 0 0 1-.221-.222V8.389h1.333zM6.3 1.012a.667.667 0 0 0-1.023.564v2.592c0 .122-.1.222-.222.222H3.277a.22.22 0 0 1-.222-.222V1.575a.666.666 0 0 0-1.023-.564A3.98 3.98 0 0 0 .167 4.39c0 1.437.771 2.752 2 3.461v5.206c0 .857.698 1.555 1.555 1.555h.89c.857 0 1.555-.698 1.555-1.556V7.85c1.228-.71 2-2.024 2-3.461 0-1.376-.698-2.64-1.867-3.377" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ToolsSolid.displayName = "ToolsSolid";

export { ToolsSolid as default };
//# sourceMappingURL=tools-solid.js.map
