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
const Sendgrid = React.forwardRef(
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
          fill: "#51A9E3",
          d: "M9.75.75h-3.6c-.495 0-.9.405-.9.9v2.7c0 .495.405.9.9.9h2.7c.495 0 .9.405.9.9v2.7c0 .495.405.9.9.9h2.7c.495 0 .9-.405.9-.9V1.2a.45.45 0 0 0-.45-.45zM5.25 14.25h3.6c.495 0 .9-.405.9-.9v-2.7c0-.495-.405-.9-.9-.9h-2.7a.903.903 0 0 1-.9-.9v-2.7c0-.495-.405-.9-.9-.9h-2.7c-.495 0-.9.405-.9.9v7.65c0 .247.202.45.45.45z"
        }
      )
    );
  }
);
Sendgrid.displayName = "Sendgrid";

export { Sendgrid as default };
//# sourceMappingURL=sendgrid.js.map
