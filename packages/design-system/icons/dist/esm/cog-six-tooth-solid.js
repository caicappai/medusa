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
const CogSixToothSolid = React.forwardRef(
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
          d: "m13.434 5.664-.806-.285a6 6 0 0 0-.318-.657c-.117-.202-.263-.378-.401-.56l.163-.874a1.77 1.77 0 0 0-.853-1.853l-.313-.18a1.77 1.77 0 0 0-2.03.187l-.648.555a5.5 5.5 0 0 0-1.443-.009l-.647-.554a1.77 1.77 0 0 0-2.03-.187l-.313.18a1.77 1.77 0 0 0-.852 1.853l.154.829c-.29.376-.51.8-.697 1.243l-.834.295A1.77 1.77 0 0 0 .389 7.312v.36c0 .747.473 1.416 1.177 1.664l.805.285c.093.223.195.443.318.656.117.203.263.379.402.562l-.163.873a1.77 1.77 0 0 0 .853 1.853l.313.18a1.76 1.76 0 0 0 2.03-.187l.644-.551q.37.05.74.05.354 0 .706-.046l.648.555a1.77 1.77 0 0 0 2.03.187l.313-.18c.647-.373.99-1.117.852-1.853l-.154-.83c.29-.376.51-.799.696-1.242l.835-.295a1.77 1.77 0 0 0 1.177-1.665v-.36c0-.747-.473-1.416-1.177-1.664M7.5 10.167a2.666 2.666 0 1 1 0-5.333 2.666 2.666 0 0 1 0 5.333"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CogSixToothSolid.displayName = "CogSixToothSolid";

export { CogSixToothSolid as default };
//# sourceMappingURL=cog-six-tooth-solid.js.map
