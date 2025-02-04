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
const MagnifierAlert = React.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest(_b, ["color"]);
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
          fill: "#212121",
          fillRule: "evenodd",
          d: "M11.551.951a1.64 1.64 0 0 0-2.769 0L6.175 5.068c-.692 1.092.094 2.515 1.385 2.515h.384a.75.75 0 0 0 0-1.5H7.56a.139.139 0 0 1-.118-.213l2.607-4.116a.14.14 0 0 1 .235 0l2.607 4.116a.139.139 0 0 1-.117.213h-.385a.75.75 0 0 0 0 1.5h.385c1.29 0 2.076-1.423 1.384-2.515zm-6.05 2.633a3.695 3.695 0 1 0 3.14 5.64.75.75 0 0 1 1.275.791 5 5 0 0 1-.25.367l3.031 3.032a.75.75 0 1 1-1.06 1.06l-3.033-3.031A5.195 5.195 0 1 1 5.758 2.09a.75.75 0 1 1-.072 1.498 4 4 0 0 0-.186-.005m4.666-.612a.75.75 0 0 1 .75.75V5.5a.75.75 0 1 1-1.5 0V3.722a.75.75 0 0 1 .75-.75M11 7.806a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
MagnifierAlert.displayName = "MagnifierAlert";

export { MagnifierAlert as default };
//# sourceMappingURL=magnifier-alert.js.map
