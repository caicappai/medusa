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
const SquaresPlusSolid = React.forwardRef(
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
          d: "M5.056 1.278H2.833c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555M12.167 1.278H9.944c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555M5.056 8.389H2.833c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V9.944c0-.859-.696-1.555-1.555-1.555M13.278 10.167h-1.556V8.61a.667.667 0 0 0-1.333 0v1.556H8.833a.667.667 0 0 0 0 1.333h1.556v1.556a.667.667 0 0 0 1.333 0V11.5h1.556a.667.667 0 0 0 0-1.333"
        }
      )
    );
  }
);
SquaresPlusSolid.displayName = "SquaresPlusSolid";

export { SquaresPlusSolid as default };
//# sourceMappingURL=squares-plus-solid.js.map
