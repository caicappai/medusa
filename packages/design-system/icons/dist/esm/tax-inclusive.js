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
const TaxInclusive = React.forwardRef(
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
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.713.838a1.61 1.61 0 0 1 1.574 0l4.521 2.531h.001c.507.286.823.823.823 1.407v.356c0 .89-.722 1.611-1.611 1.611l-9.042.001c-.89 0-1.611-.722-1.611-1.611v-.357c0-.582.314-1.12.824-1.406zm.842 1.309a.11.11 0 0 0-.108 0L2.925 4.678a.11.11 0 0 0-.057.097v.357c0 .061.05.111.111.111h9.042c.06 0 .11-.05.11-.112v-.356a.11.11 0 0 0-.056-.098zM2.979 7.396a.75.75 0 0 1 .75.75v3.986h1.514V8.146a.75.75 0 0 1 1.5 0v3.986h.346c.414 0 .812.337.812.75 0 .415-.398.75-.812.75H2.118a.75.75 0 0 1 0-1.5h.111V8.146a.75.75 0 0 1 .75-.75m6.028 0a.75.75 0 0 1 .75.75v1.292a.75.75 0 0 1-1.5 0V8.146a.75.75 0 0 1 .75-.75m5.588.733a.75.75 0 0 1 .2 1.042l-3.215 4.736a.75.75 0 0 1-1.16.1l-1.522-1.579a.75.75 0 0 1 1.08-1.041l.88.913 2.695-3.971a.75.75 0 0 1 1.042-.2",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "M7.5 4.701a.861.861 0 1 0 0-1.722.861.861 0 0 0 0 1.722"
        }
      )
    );
  }
);
TaxInclusive.displayName = "TaxInclusive";

export { TaxInclusive as default };
//# sourceMappingURL=tax-inclusive.js.map
