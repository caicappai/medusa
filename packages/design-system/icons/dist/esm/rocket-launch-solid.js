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
const RocketLaunchSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M2.615 14.611h-1.56a.667.667 0 0 1-.666-.666v-1.56c0-.871.514-1.668 1.31-2.028a.666.666 0 1 1 .549 1.214.9.9 0 0 0-.526.815v.892h.893c.35 0 .669-.206.814-.525a.667.667 0 0 1 1.214.549 2.23 2.23 0 0 1-2.028 1.31" }), /* @__PURE__ */ React.createElement("path", { d: "M11.744 9.022c3.232-3.55 2.877-7.553 2.823-8.006a.67.67 0 0 0-.584-.584c-.455-.056-4.455-.41-8.006 2.823l-.9-.161a3.61 3.61 0 0 0-3.563 1.458L-.156 6.91a.667.667 0 0 0 .783 1.009c.012-.005.95-.348 2.343-.293-.15.39-.258.734-.335 1.013a.67.67 0 0 0 .172.648l2.908 2.908a.67.67 0 0 0 .647.172c.278-.077.622-.184 1.01-.336.052 1.383-.287 2.334-.29 2.344a.666.666 0 0 0 1.007.781l2.36-1.671a3.6 3.6 0 0 0 1.456-3.558l-.162-.903zM9.5 3.944a1.555 1.555 0 1 1 0 3.111 1.555 1.555 0 0 1 0-3.11M1.9 6.316l.703-.992a2.26 2.26 0 0 1 2.241-.917l.03.005a11.7 11.7 0 0 0-1.313 1.932 9.3 9.3 0 0 0-1.66-.029zm7.779 6.08-.995.704a9 9 0 0 0-.028-1.66c.614-.33 1.273-.767 1.931-1.313l.006.033a2.26 2.26 0 0 1-.915 2.236" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
RocketLaunchSolid.displayName = "RocketLaunchSolid";

export { RocketLaunchSolid as default };
//# sourceMappingURL=rocket-launch-solid.js.map
