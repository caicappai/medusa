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
const Mastercard = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("path", { fill: "#FF5A00", d: "M9.524 3.815h-4.06v7.37h4.06z" }),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#EB001B",
          d: "M5.735 7.5c0-1.497.696-2.826 1.765-3.685a4.6 4.6 0 0 0-2.861-1.002C2.075 2.813 0 4.909 0 7.5s2.075 4.688 4.639 4.688A4.6 4.6 0 0 0 7.5 11.185 4.7 4.7 0 0 1 5.735 7.5"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#F79E1B",
          d: "M15 7.5c0 2.591-2.075 4.688-4.639 4.688A4.6 4.6 0 0 1 7.5 11.185 4.68 4.68 0 0 0 9.265 7.5 4.72 4.72 0 0 0 7.5 3.815a4.58 4.58 0 0 1 2.86-1.002c2.565 0 4.64 2.11 4.64 4.687"
        }
      )
    );
  }
);
Mastercard.displayName = "Mastercard";

export { Mastercard as default };
//# sourceMappingURL=mastercard.js.map
