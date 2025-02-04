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
const UserGroup = React.forwardRef(
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
        /* @__PURE__ */ React.createElement("path", { d: "M7.5 7.5a1.556 1.556 0 1 0 0-3.111 1.556 1.556 0 0 0 0 3.111M5.012 12.77c-.38-.115-.636-.494-.552-.883a3.112 3.112 0 0 1 6.08 0c.084.388-.17.768-.552.883a8.6 8.6 0 0 1-4.976 0M11.194 4.194a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333M11.065 6.137q.064-.002.13-.003c1.3 0 2.394.892 2.7 2.098.102.397-.163.793-.558.908a7.7 7.7 0 0 1-1.869.299M3.806 4.194a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333M3.935 6.137l-.13-.003a2.79 2.79 0 0 0-2.7 2.098c-.102.397.163.793.558.908a7.7 7.7 0 0 0 1.869.299" })
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
UserGroup.displayName = "UserGroup";

export { UserGroup as default };
//# sourceMappingURL=user-group.js.map
