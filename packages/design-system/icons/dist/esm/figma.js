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
const Figma = React.forwardRef(
  (props, ref) => {
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
          fill: "#1ABCFE",
          d: "M7.5 7.5a2.227 2.227 0 1 1 4.454 0 2.227 2.227 0 0 1-4.454 0"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#0ACF83",
          d: "M3.046 11.954c0-1.23.997-2.227 2.227-2.227H7.5v2.227a2.227 2.227 0 1 1-4.454 0"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#FF7262",
          d: "M7.5.819v4.454h2.227a2.227 2.227 0 1 0 0-4.454z"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#F24E1E",
          d: "M3.046 3.046c0 1.23.997 2.227 2.227 2.227H7.5V.819H5.273c-1.23 0-2.227.997-2.227 2.227"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#A259FF",
          d: "M3.046 7.5c0 1.23.997 2.227 2.227 2.227H7.5V5.273H5.273c-1.23 0-2.227.997-2.227 2.227"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M3 .75h9v13.5H3z" })))
    );
  }
);
Figma.displayName = "Figma";

export { Figma as default };
//# sourceMappingURL=figma.js.map
