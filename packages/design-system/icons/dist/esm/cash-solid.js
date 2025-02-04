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
const CashSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M7.61 6.837q-.656-.117-.686-.413c-.014-.15.03-.198.05-.22.113-.125.393-.192.553-.192.372 0 .488.187.531.257a.667.667 0 1 0 1.133-.702 1.8 1.8 0 0 0-1.034-.786.66.66 0 0 0-.656-.614.663.663 0 0 0-.659.627c-.308.096-.62.255-.855.513-.301.333-.436.763-.39 1.245.048.486.342 1.341 1.78 1.597.798.143.804.352.806.463.003.1-.029.182-.1.256-.12.124-.328.197-.556.197-.542 0-.647-.208-.691-.296a.666.666 0 1 0-1.19.602c.185.364.543.779 1.22.947.07.292.321.515.635.515a.66.66 0 0 0 .638-.528c.347-.096.66-.264.897-.506.32-.33.492-.762.48-1.22-.022-.936-.664-1.522-1.906-1.744z" }), /* @__PURE__ */ React.createElement("path", { d: "M12.167 2.167H2.833A2.446 2.446 0 0 0 .39 4.61v5.778a2.446 2.446 0 0 0 2.444 2.444h9.334a2.446 2.446 0 0 0 2.444-2.444V4.611a2.446 2.446 0 0 0-2.444-2.444m-1.43 9.333H4.263a3.55 3.55 0 0 0-2.54-2.54V6.04a3.55 3.55 0 0 0 2.54-2.54h6.474a3.55 3.55 0 0 0 2.54 2.54v2.92a3.55 3.55 0 0 0-2.54 2.54" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CashSolid.displayName = "CashSolid";

export { CashSolid as default };
//# sourceMappingURL=cash-solid.js.map
