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
const Tailwind = React.forwardRef(
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
          fill: "#38BDF8",
          fillRule: "evenodd",
          d: "M7.5 3q-3 0-3.75 3 1.125-1.5 2.625-1.125c.57.143.978.557 1.43 1.015.735.746 1.586 1.61 3.445 1.61q3 0 3.75-3-1.125 1.5-2.625 1.125c-.57-.143-.978-.557-1.43-1.015C10.21 3.864 9.36 3 7.5 3M3.75 7.5q-3 0-3.75 3Q1.125 9 2.625 9.375c.57.143.978.557 1.43 1.015C4.79 11.136 5.64 12 7.5 12q3 0 3.75-3-1.125 1.5-2.625 1.125c-.57-.143-.978-.557-1.43-1.015C6.46 8.364 5.61 7.5 3.75 7.5",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Tailwind.displayName = "Tailwind";

export { Tailwind as default };
//# sourceMappingURL=tailwind.js.map
