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
const QuestionMark = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M7.594 4.807c-.538 0-1.018.247-1.234.835a.75.75 0 0 1-1.408-.517c.474-1.291 1.604-1.818 2.641-1.818 1.128 0 2.367.825 2.367 2.357 0 .538-.142.972-.395 1.33-.237.333-.543.554-.763.708l-.016.012c-.464.326-.639.449-.7.804a.75.75 0 1 1-1.478-.259c.172-.985.835-1.441 1.243-1.722l.09-.062c.214-.151.327-.246.4-.35.058-.08.119-.205.119-.46 0-.549-.403-.858-.867-.858M6.425 10.67a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0" }), /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M.306 7.5a7.194 7.194 0 1 1 14.389 0 7.194 7.194 0 0 1-14.39 0M7.5 1.805a5.694 5.694 0 1 0 0 11.39 5.694 5.694 0 0 0 0-11.39",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
QuestionMark.displayName = "QuestionMark";

export { QuestionMark as default };
//# sourceMappingURL=question-mark.js.map
