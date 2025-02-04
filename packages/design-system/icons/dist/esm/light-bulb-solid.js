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
const LightBulbSolid = React.forwardRef(
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
          d: "M10.722 1.532A5.15 5.15 0 0 0 6.406.502C4.426.917 2.848 2.536 2.48 4.53c-.395 2.133.544 4.222 2.354 5.326v2.31a2.447 2.447 0 0 0 2.445 2.445h.444a2.447 2.447 0 0 0 2.445-2.444v-2.31A5.08 5.08 0 0 0 12.612 5.5a5.1 5.1 0 0 0-1.889-3.968m-3 11.746h-.444c-.534 0-.96-.386-1.066-.89h2.577c-.106.504-.533.89-1.066.89m1.111-2.222H6.167v-.89h2.666zm.916-5.53L8.167 7.11v1.057a.667.667 0 0 1-1.334 0V7.109L5.251 5.527a.667.667 0 1 1 .943-.943L7.501 5.89l1.307-1.306a.667.667 0 1 1 .943.943z"
        }
      )
    );
  }
);
LightBulbSolid.displayName = "LightBulbSolid";

export { LightBulbSolid as default };
//# sourceMappingURL=light-bulb-solid.js.map
