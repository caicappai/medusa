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
const Medusa = React.forwardRef(
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
          fill: "#18181B",
          d: "M12.184 2.941 9.127 1.183a3.22 3.22 0 0 0-3.226 0L2.83 2.94a3.25 3.25 0 0 0-1.606 2.786V9.26c0 1.153.62 2.209 1.606 2.786l3.057 1.772c1 .577 2.226.577 3.226 0l3.057-1.772a3.2 3.2 0 0 0 1.606-2.786V5.727c.028-1.14-.592-2.209-1.592-2.786m-4.677 7.697A3.14 3.14 0 0 1 4.365 7.5a3.14 3.14 0 0 1 3.142-3.138c1.733 0 3.155 1.407 3.155 3.138a3.145 3.145 0 0 1-3.155 3.138"
        }
      )
    );
  }
);
Medusa.displayName = "Medusa";

export { Medusa as default };
//# sourceMappingURL=medusa.js.map
