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
const WandSparkle = React.forwardRef(
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
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.786 2.214-8.582 8.582a.89.89 0 0 0 0 1.257l.743.742a.89.89 0 0 0 1.257 0l8.582-8.58a.89.89 0 0 0 0-1.258l-.743-.743a.89.89 0 0 0-1.257 0M8.733 4.267l2 2"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "m5.938 2.604-.84-.28-.282-.842c-.09-.272-.54-.272-.632 0l-.28.842-.841.28a.334.334 0 0 0 0 .633l.84.28.281.842a.333.333 0 0 0 .632 0l.28-.842.841-.28a.334.334 0 0 0 .001-.633M14.307 10.158l-1.123-.374-.374-1.123c-.122-.363-.722-.363-.843 0l-.375 1.123-1.122.374a.444.444 0 0 0 0 .843l1.122.374.375 1.122a.446.446 0 0 0 .844 0l.374-1.122L14.308 11a.445.445 0 0 0 0-.843M7.722 1.722a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
WandSparkle.displayName = "WandSparkle";

export { WandSparkle as default };
//# sourceMappingURL=wand-sparkle.js.map
