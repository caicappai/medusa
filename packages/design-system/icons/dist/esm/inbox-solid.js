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
const InboxSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M4.807 4.14a.667.667 0 0 0 0 .943l2.222 2.222a.665.665 0 0 0 .942 0l2.222-2.222a.667.667 0 1 0-.943-.943L8.166 5.225v-3.28a.667.667 0 0 0-1.334 0v3.279L5.748 4.139a.667.667 0 0 0-.943 0z" }), /* @__PURE__ */ React.createElement("path", { d: "M12.563 2.828a2.43 2.43 0 0 0-2.275-1.55h-.122a.667.667 0 0 0 0 1.333h.122c.46 0 .865.277 1.033.705L12.965 7.5H9.944a.667.667 0 0 0-.667.667v.889c0 .122-.1.222-.222.222H5.944a.22.22 0 0 1-.223-.222v-.89a.667.667 0 0 0-.666-.666h-3.02l1.643-4.184a1.1 1.1 0 0 1 1.034-.705h.121a.667.667 0 0 0 0-1.333h-.121a2.43 2.43 0 0 0-2.276 1.55L.558 7.609a2.4 2.4 0 0 0-.17.895v2.774a2.446 2.446 0 0 0 2.445 2.444h9.334a2.446 2.446 0 0 0 2.444-2.444V8.504a2.4 2.4 0 0 0-.169-.895z" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
InboxSolid.displayName = "InboxSolid";

export { InboxSolid as default };
//# sourceMappingURL=inbox-solid.js.map
