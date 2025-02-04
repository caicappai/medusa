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
const CircleStackSolid = React.forwardRef(
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
          d: "M7.5.611c-3.092 0-6.222.916-6.222 2.667v8.444c0 1.751 3.13 2.667 6.222 2.667s6.222-.916 6.222-2.667V3.278C13.722 1.527 10.592.61 7.5.61M12.39 7.5c0 .388-1.713 1.333-4.889 1.333S2.611 7.888 2.611 7.5V4.985c1.2.632 3.048.96 4.889.96 1.84 0 3.69-.328 4.889-.96zM7.5 13.056c-3.176 0-4.889-.946-4.889-1.334V9.208c1.2.632 3.048.959 4.889.959 1.84 0 3.69-.327 4.889-.96v2.515c0 .388-1.713 1.334-4.889 1.334"
        }
      )
    );
  }
);
CircleStackSolid.displayName = "CircleStackSolid";

export { CircleStackSolid as default };
//# sourceMappingURL=circle-stack-solid.js.map
