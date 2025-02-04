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
const Stripe = React.forwardRef(
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
          fill: "#6772E5",
          fillRule: "evenodd",
          d: "M6.596 4.916c0-.546.454-.757 1.188-.757a7.8 7.8 0 0 1 3.481.901V1.765a9.2 9.2 0 0 0-3.481-.64c-2.829 0-4.726 1.482-4.726 3.957 0 3.87 5.316 3.242 5.316 4.91 0 .653-.558.856-1.343.856-1.158 0-2.653-.48-3.825-1.117v3.338c1.207.526 2.509.8 3.825.806 2.908 0 4.912-1.436 4.912-3.954 0-4.178-5.347-3.431-5.347-5.004",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Stripe.displayName = "Stripe";

export { Stripe as default };
//# sourceMappingURL=stripe.js.map
