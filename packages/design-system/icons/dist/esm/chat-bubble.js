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
const ChatBubble = React.forwardRef(
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
          d: "M2.833.75A2.53 2.53 0 0 0 .306 3.278V9.5a2.53 2.53 0 0 0 2.527 2.528h1.028v1.916a.75.75 0 0 0 1.219.586l3.128-2.502h3.959A2.53 2.53 0 0 0 14.695 9.5V3.278A2.53 2.53 0 0 0 12.167.75zM1.806 3.278c0-.568.46-1.028 1.027-1.028h9.334c.568 0 1.028.46 1.028 1.028V9.5c0 .567-.46 1.028-1.028 1.028H7.945a.75.75 0 0 0-.469.164l-2.115 1.692v-1.106a.75.75 0 0 0-.75-.75H2.833c-.567 0-1.027-.46-1.027-1.028zm4.805 3.11a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0m-2.222.89a.89.89 0 0 1 0-1.778.89.89 0 0 1 0 1.778m5.333-.89a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChatBubble.displayName = "ChatBubble";

export { ChatBubble as default };
//# sourceMappingURL=chat-bubble.js.map
