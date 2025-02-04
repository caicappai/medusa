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
const AcademicCapSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M8.823 10.513c-.408.21-.866.32-1.323.32s-.916-.11-1.324-.32L2.611 8.677v3.267c0 1.605 2.46 2.445 4.889 2.445s4.889-.84 4.889-2.445V8.678z" }), /* @__PURE__ */ React.createElement("path", { d: "M14.361 7.7a9.3 9.3 0 0 1 .192-2.134c.016-.116.058-.17.058-.4 0-.534-.295-1.018-.77-1.262L8.213 1.006a1.56 1.56 0 0 0-1.426 0L1.16 3.905c-.475.244-.77.728-.77 1.262s.295 1.018.77 1.263l5.628 2.897a1.56 1.56 0 0 0 1.426 0l4.845-2.495c-.017.304-.04.607-.03.91.021.687.112 1.375.268 2.046a.666.666 0 1 0 1.298-.3 9.2 9.2 0 0 1-.233-1.787" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AcademicCapSolid.displayName = "AcademicCapSolid";

export { AcademicCapSolid as default };
//# sourceMappingURL=academic-cap-solid.js.map
