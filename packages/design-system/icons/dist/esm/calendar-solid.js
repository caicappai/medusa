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
const CalendarSolid = React.forwardRef(
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
          d: "M4.611 3.5a.667.667 0 0 1-.667-.667V1.056a.667.667 0 0 1 1.334 0v1.777a.667.667 0 0 1-.667.667M10.389 3.5a.667.667 0 0 1-.667-.667V1.056a.667.667 0 0 1 1.334 0v1.777a.667.667 0 0 1-.667.667"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "M11.722 2.167H3.278A2.446 2.446 0 0 0 .833 4.61v7.556a2.446 2.446 0 0 0 2.445 2.444h8.444a2.447 2.447 0 0 0 2.445-2.444V4.61a2.446 2.446 0 0 0-2.445-2.444m0 11.11H3.278a1.113 1.113 0 0 1-1.111-1.11V6.61h10.666v5.556c0 .612-.498 1.11-1.11 1.11"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "M7.5 7.722a.89.89 0 0 0-.889.89c0 .489.4.888.889.888.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889M10.611 9.5c.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889.89.89 0 0 0-.889.89c0 .489.4.888.89.888M7.5 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M4.389 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M10.611 10.389a.89.89 0 0 0-.889.889.89.89 0 0 0 1.778 0 .89.89 0 0 0-.889-.89"
        }
      )
    );
  }
);
CalendarSolid.displayName = "CalendarSolid";

export { CalendarSolid as default };
//# sourceMappingURL=calendar-solid.js.map
