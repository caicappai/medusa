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
const ChatBubbleLeftRightSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M12.611 4.389H7.722c-1.102 0-2 .897-2 2v4c0 1.103.898 2 2 2h1.742l2.254 2.049a.67.67 0 0 0 .719.116.67.67 0 0 0 .396-.61v-1.568a2.003 2.003 0 0 0 1.778-1.987v-4c0-1.103-.898-2-2-2" }), /* @__PURE__ */ React.createElement("path", { d: "m3.675 10.262-.175.19V9.5a.664.664 0 0 0-.667-.667c-.297 0-.575-.115-.785-.325a1.1 1.1 0 0 1-.325-.785V3.278c0-.613.499-1.111 1.111-1.111H8.39c.506 0 .95.342 1.075.832a.667.667 0 0 0 1.292-.332A2.44 2.44 0 0 0 8.39.833H2.833A2.446 2.446 0 0 0 .39 3.278v4.445c0 .652.254 1.267.716 1.728.3.3.664.512 1.062.624v2.092a.665.665 0 0 0 1.158.45l1.333-1.454a.666.666 0 1 0-.983-.901" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChatBubbleLeftRightSolid.displayName = "ChatBubbleLeftRightSolid";

export { ChatBubbleLeftRightSolid as default };
//# sourceMappingURL=chat-bubble-left-right-solid.js.map
