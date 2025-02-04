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
const Photo = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#b)" }, /* @__PURE__ */ React.createElement("path", { d: "M5.722 4.833c0 .49.399.89.889.89s.889-.4.889-.89a.89.89 0 0 0-.89-.889.89.89 0 0 0-.888.89" }), /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M5.5 1.194a2.53 2.53 0 0 0-2.528 2.528v4.89A2.53 2.53 0 0 0 5.5 11.138h6.666a2.53 2.53 0 0 0 2.528-2.528V3.722a2.53 2.53 0 0 0-2.528-2.528zM4.472 3.722c0-.567.46-1.028 1.028-1.028h6.666c.568 0 1.028.46 1.028 1.028v2.933L11.77 5.23a1.64 1.64 0 0 0-2.318 0L5.113 9.563a1.03 1.03 0 0 1-.641-.953zm6.237 2.569 2.474 2.474a1.03 1.03 0 0 1-1.017.874H7.161l3.352-3.348a.14.14 0 0 1 .196 0",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React.createElement("path", { d: "M1.805 5.5a.75.75 0 0 0-1.5 0v5.778a2.527 2.527 0 0 0 2.528 2.528h7.556a.75.75 0 0 0 0-1.5H2.833c-.568 0-1.028-.46-1.028-1.028z" }))),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React.createElement("clipPath", { id: "b" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
Photo.displayName = "Photo";

export { Photo as default };
//# sourceMappingURL=photo.js.map
