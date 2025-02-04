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
const ReceiptPercent = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
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
          fill: color,
          fillRule: "evenodd",
          d: "M2.833 1.593C1.368 1.593.306 2.88.306 4.307v1.474c0 .414.335.75.75.75.375 0 .805.361.805.97 0 .607-.43.968-.805.968a.75.75 0 0 0-.75.75v1.474c0 1.426 1.062 2.715 2.527 2.715h9.334c1.465 0 2.527-1.289 2.527-2.715V9.219a.75.75 0 0 0-.75-.75c-.376 0-.805-.361-.805-.969s.43-.97.805-.97a.75.75 0 0 0 .75-.75V4.308c0-1.426-1.062-2.714-2.527-2.714zM1.806 4.307c0-.743.528-1.214 1.027-1.214h9.334c.499 0 1.027.471 1.027 1.214v.855c-.936.341-1.555 1.303-1.555 2.338s.62 1.997 1.555 2.338v.855c0 .743-.528 1.215-1.027 1.215H2.833c-.499 0-1.027-.472-1.027-1.215v-.855C2.742 9.498 3.36 8.536 3.36 7.5c0-1.035-.62-1.997-1.555-2.338zm8.224.663a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0m-3.419.752a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0m3.556 3.556a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ReceiptPercent.displayName = "ReceiptPercent";

export { ReceiptPercent as default };
//# sourceMappingURL=receipt-percent.js.map
