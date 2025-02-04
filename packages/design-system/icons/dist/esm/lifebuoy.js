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
const Lifebuoy = React.forwardRef(
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
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React.createElement("path", { d: "M4.572 6.407c.315-.847.989-1.52 1.835-1.836M8.593 4.572c.847.316 1.52.989 1.836 1.836M10.428 8.593a3.14 3.14 0 0 1-1.836 1.836M6.407 10.428A3.14 3.14 0 0 1 4.57 8.593M5.387 13.162a6.06 6.06 0 0 1-3.55-3.55M13.162 9.613a6.06 6.06 0 0 1-3.55 3.55M9.613 1.838a6.06 6.06 0 0 1 3.55 3.55M1.838 5.387a6.06 6.06 0 0 1 3.55-3.55" }),
        /* @__PURE__ */ React.createElement("path", { d: "m8.592 4.572 1.166-3.124A6.5 6.5 0 0 0 7.5 1.042c-.795 0-1.556.144-2.259.406l1.166 3.124c.34-.127.707-.196 1.092-.196s.753.07 1.093.197zM10.428 8.592l3.124 1.166a6.5 6.5 0 0 0 .406-2.258c0-.795-.144-1.556-.406-2.26l-3.124 1.167c.127.34.196.707.196 1.092s-.07.753-.197 1.093zM6.408 10.428l-1.166 3.124a6.5 6.5 0 0 0 2.259.406c.795 0 1.556-.144 2.259-.406l-1.166-3.124c-.34.127-.707.196-1.092.196s-.753-.07-1.093-.197zM4.573 6.408 1.448 5.242A6.5 6.5 0 0 0 1.043 7.5c0 .795.143 1.556.405 2.26l3.125-1.167a3.1 3.1 0 0 1-.197-1.092c0-.385.07-.753.197-1.093z" })
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Lifebuoy.displayName = "Lifebuoy";

export { Lifebuoy as default };
//# sourceMappingURL=lifebuoy.js.map
