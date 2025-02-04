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
const ShoppingCartSolid = React.forwardRef(
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
          d: "M12.267 3.056H3.736l-.157-1.064A1.55 1.55 0 0 0 2.417.71l-1.2-.3a.666.666 0 1 0-.323 1.294l1.2.3a.22.22 0 0 1 .166.183l.917 6.236a1.78 1.78 0 0 0-1.455 1.745c0 .98.798 1.777 1.778 1.777h9.556a.667.667 0 0 0 0-1.333H3.5a.445.445 0 0 1 0-.889h7.581c.67 0 1.263-.426 1.476-1.063l1.185-3.555a1.558 1.558 0 0 0-1.475-2.048M2.833 14.611a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222M12.167 14.611a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222"
        }
      )
    );
  }
);
ShoppingCartSolid.displayName = "ShoppingCartSolid";

export { ShoppingCartSolid as default };
//# sourceMappingURL=shopping-cart-solid.js.map
