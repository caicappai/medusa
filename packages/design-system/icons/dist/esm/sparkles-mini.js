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
const SparklesMini = React.forwardRef(
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
          strokeWidth: 1.5,
          d: "m3.584 2.926.119.355.355.119.253.084-.252.084-.356.119-.118.355-.085.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.355.085-.254zM12.058 11.4l.253.084-.252.084-.355.119-.12.355-.084.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.356.085-.253.084.253.119.356z"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.833 7.262.819 2.07 2.07.819-2.07.818-.819 2.07-.818-2.07-2.07-.818 2.07-.82zM10.167 1.928l.818 2.07 2.07.82-2.07.818-.818 2.07-.819-2.07-2.07-.819L9.348 4z"
        }
      )
    );
  }
);
SparklesMini.displayName = "SparklesMini";

export { SparklesMini as default };
//# sourceMappingURL=sparkles-mini.js.map
