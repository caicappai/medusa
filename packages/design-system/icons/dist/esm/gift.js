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
const Gift = React.forwardRef(
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
        /* @__PURE__ */ React.createElement("path", { d: "M7.5 4.167v9.777M2.833 2.611c0-.859.697-1.555 1.556-1.555 2.301 0 3.111 3.11 3.111 3.11H4.389a1.556 1.556 0 0 1-1.556-1.555M10.611 4.167H7.5s.81-3.111 3.111-3.111a1.556 1.556 0 0 1 0 3.11M12.167 6.833v5.334c0 .982-.796 1.777-1.778 1.777H4.61a1.777 1.777 0 0 1-1.778-1.777V6.833" }),
        /* @__PURE__ */ React.createElement("path", { d: "M13.056 4.167H1.944a.89.89 0 0 0-.888.889v.888c0 .491.398.89.888.89h11.112a.89.89 0 0 0 .888-.89v-.888a.89.89 0 0 0-.889-.89" })
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Gift.displayName = "Gift";

export { Gift as default };
//# sourceMappingURL=gift.js.map
