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
const BookOpen = React.forwardRef(
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
      /* @__PURE__ */ React.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React.createElement("path", { d: "M7.5 12.96a.9.9 0 0 0 .44-.118 5.6 5.6 0 0 1 2.791-.751 5.5 5.5 0 0 1 2.018.386c.576.227 1.194-.213 1.194-.833V3.571a.88.88 0 0 0-.431-.765 5.5 5.5 0 0 0-2.792-.767c-1.68 0-2.842.775-3.22 1.05" }),
        /* @__PURE__ */ React.createElement("path", { d: "M7.5 12.96a.9.9 0 0 1-.44-.118 5.6 5.6 0 0 0-2.791-.751 5.5 5.5 0 0 0-2.018.386c-.576.227-1.195-.21-1.195-.829v-8.08c0-.315.161-.6.432-.76A5.5 5.5 0 0 1 4.28 2.04c1.68 0 2.842.775 3.22 1.05z" })
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BookOpen.displayName = "BookOpen";

export { BookOpen as default };
//# sourceMappingURL=book-open.js.map
