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
const Sanity = React.forwardRef(
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
          fill: "#F03E2F",
          d: "M4.909 4.862a3.2 3.2 0 0 1-.469-.383c-.513-.512-.776-1.162-.776-2.007V2.15C4.518 1.273 5.834.75 7.403.75c3.034 0 4.79 1.575 5.223 3.791H9.874C9.57 3.667 8.81 2.986 7.426 2.986c-1.363 0-2.327.718-2.517 1.876m-1.525-2.39c0 1.82 1.144 2.904 3.435 3.475l2.427.553c2.168.49 3.488 1.704 3.488 3.684a3.72 3.72 0 0 1-.808 2.385c0-1.975-1.04-3.043-3.55-3.685l-2.382-.532c-1.909-.427-3.381-1.426-3.381-3.577a3.7 3.7 0 0 1 .771-2.303m7.03 7.55c-.165 1.257-1.177 1.966-2.643 1.966-1.302 0-2.277-.532-2.646-1.682h-2.86c.464 2.504 2.548 3.944 5.527 3.944 1.59 0 2.968-.49 3.853-1.372v-.31c0-.933-.244-1.617-.755-2.146a3 3 0 0 0-.476-.4"
        }
      )
    );
  }
);
Sanity.displayName = "Sanity";

export { Sanity as default };
//# sourceMappingURL=sanity.js.map
