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
const Klarna = React.forwardRef(
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
          fill: "#FFB3C7",
          d: "M7.5 14.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#000",
          d: "M9.03 4.603H7.802a3.12 3.12 0 0 1-1.259 2.515l-.48.357 1.869 2.547h1.533l-1.72-2.33a4.3 4.3 0 0 0 1.287-3.09M5.906 4.603H4.658v5.425h1.248z"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#000",
          d: "M10.285 8.47a.821.821 0 1 0-.001 1.642.821.821 0 0 0 .001-1.642"
        }
      )
    );
  }
);
Klarna.displayName = "Klarna";

export { Klarna as default };
//# sourceMappingURL=klarna.js.map
