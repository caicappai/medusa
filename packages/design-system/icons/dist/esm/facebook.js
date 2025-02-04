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
const Facebook = React.forwardRef(
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
          fill: "url(#a)",
          fillRule: "evenodd",
          d: "M.75 7.5c0 3.341 2.43 6.109 5.636 6.682l.04-.032-.006-.001v-4.76H4.733V7.5H6.42V6.016c0-1.688 1.08-2.633 2.633-2.633.472 0 1.012.068 1.484.135V5.24H9.66c-.81 0-1.012.405-1.012.945V7.5h1.788l-.303 1.89H8.648v4.759l-.062.01.028.023c3.206-.573 5.636-3.34 5.636-6.682 0-3.712-3.037-6.75-6.75-6.75S.75 3.788.75 7.5",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 13.78,
          y2: 0.748,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React.createElement("stop", { stopColor: "#0062E0" }),
        /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#19AFFF" })
      ))
    );
  }
);
Facebook.displayName = "Facebook";

export { Facebook as default };
//# sourceMappingURL=facebook.js.map
