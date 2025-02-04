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
const DecisionProcess = React.forwardRef(
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
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.625 1.875H2.292a.833.833 0 0 0-.834.833v.834c0 .46.373.833.834.833h3.333c.46 0 .833-.373.833-.833v-.834a.833.833 0 0 0-.833-.833M5.625 10.625H2.292a.833.833 0 0 0-.834.833v.834c0 .46.373.833.834.833h3.333c.46 0 .833-.373.833-.833v-.834a.833.833 0 0 0-.833-.833M3.958 6.459v2.083M8.542 3.125h1.666c.46 0 .834.373.834.833v1.667M8.542 11.875h1.666c.46 0 .834-.373.834-.833V9.375M11.042 5.625 14.167 7.5l-3.125 1.875L7.917 7.5z"
        }
      )
    );
  }
);
DecisionProcess.displayName = "DecisionProcess";

export { DecisionProcess as default };
//# sourceMappingURL=decision-process.js.map
