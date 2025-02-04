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
const Linkedin = React.forwardRef(
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
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#0077B5",
          d: "M11.438.75H3.561A2.813 2.813 0 0 0 .75 3.563v7.874a2.813 2.813 0 0 0 2.813 2.813h7.874a2.81 2.81 0 0 0 2.813-2.812V3.561A2.81 2.81 0 0 0 11.438.75M5.25 11.438H3.563V5.25H5.25zm-.844-6.901a.99.99 0 0 1-.984-.992c0-.548.44-.993.984-.993s.985.445.985.993c0 .547-.44.992-.985.992m7.594 6.9h-1.687V8.285c0-1.894-2.25-1.75-2.25 0v3.153H6.375V5.25h1.688v.993C8.848 4.788 12 4.68 12 7.636z"
        }
      )
    );
  }
);
Linkedin.displayName = "Linkedin";

export { Linkedin as default };
//# sourceMappingURL=linkedin.js.map
