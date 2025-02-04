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
const BroomSparkle = React.forwardRef(
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
          fillRule: "evenodd",
          d: "M14.072.72a.75.75 0 0 1 0 1.06L9.695 6.157c.432.54.682 1.129.768 1.745.115.828-.072 1.635-.388 2.353-.626 1.42-1.826 2.66-2.73 3.382a2.44 2.44 0 0 1-2.184.448C2.525 13.335.986 11.123.712 8.408a.75.75 0 0 1 .645-.818c.854-.117 1.363-.583 2.44-1.674 1.375-1.393 3.326-1.583 4.767-.75L13.01.72a.75.75 0 0 1 1.06 0M4.895 6.94l-.03.03-.045.045c-.81.82-1.52 1.54-2.52 1.886.374 1.886 1.525 3.244 3.271 3.741.282.08.596.017.838-.177.642-.513 1.412-1.295 1.945-2.16a13.2 13.2 0 0 1-2.23-1.87v-.001A13 13 0 0 1 4.895 6.94m1.326-.725a11.7 11.7 0 0 0 2.726 2.679q.082-.41.03-.784c-.063-.455-.29-.932-.825-1.401a2.25 2.25 0 0 0-1.93-.494",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "m14.714 9.991-1.052-.35-.351-1.053c-.114-.34-.677-.34-.79 0l-.352 1.052-1.052.351a.417.417 0 0 0 0 .79l1.052.35.351 1.053a.418.418 0 0 0 .792 0l.35-1.052 1.053-.35a.417.417 0 0 0 0-.79M4.577 2.91l-.788-.263-.263-.789c-.085-.255-.508-.255-.593 0l-.263.79-.788.262a.313.313 0 0 0 0 .593l.788.263.263.789a.312.312 0 0 0 .592 0l.263-.79.788-.262a.313.313 0 0 0 .001-.593M6.875 2.5a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
        }
      )
    );
  }
);
BroomSparkle.displayName = "BroomSparkle";

export { BroomSparkle as default };
//# sourceMappingURL=broom-sparkle.js.map
