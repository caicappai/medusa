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
const ServerStack = React.forwardRef(
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
          fillRule: "evenodd",
          d: "M2.389 2.08c-.269 0-.583.253-.583.69v1.92c0 .436.314.69.583.69h10.222c.27 0 .584-.254.584-.69V2.77c0-.437-.315-.69-.584-.69zm-2.083.69c0-1.155.88-2.19 2.083-2.19h10.222c1.204 0 2.084 1.035 2.084 2.19v1.92c0 1.154-.88 2.19-2.084 2.19H2.39C1.185 6.88.306 5.843.306 4.69zm4.069.96a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m2.5 0a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-3.3 8.34a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6m3.3-.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-5.07-.96c0-.436.315-.69.584-.69h10.222c.27 0 .584.254.584.69v1.92c0 .437-.315.69-.584.69H2.39c-.269 0-.583-.253-.583-.69zm.584-2.19C1.185 8.12.306 9.158.306 10.31v1.92c0 1.155.88 2.19 2.083 2.19h10.222c1.204 0 2.084-1.035 2.084-2.19v-1.92c0-1.154-.88-2.19-2.084-2.19z",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerStack.displayName = "ServerStack";

export { ServerStack as default };
//# sourceMappingURL=server-stack.js.map
