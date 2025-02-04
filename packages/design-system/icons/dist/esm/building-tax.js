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
const BuildingTax = React.forwardRef(
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
          d: "M1 5.694H.25c0 .415.336.75.75.75zm13 0v.75a.75.75 0 0 0 .75-.75zm0-1.444h.75a.75.75 0 0 0-.445-.685zM7.5 1.361l.305-.685a.75.75 0 0 0-.61 0zM1 4.25l-.305-.685a.75.75 0 0 0-.445.685zm5.056 10.139a.75.75 0 0 0 0-1.5zM1 13.639l-.72-.21a.75.75 0 0 0 .72.96zm.632-2.167v-.75a.75.75 0 0 0-.72.54zm4.424.75a.75.75 0 0 0 0-1.5zm8.158-2.792a.75.75 0 1 0-1.06-1.061zM8.73 12.793a.75.75 0 1 0 1.06 1.06zM1 6.444h13v-1.5H1zm13.75-.75V4.25h-1.5v1.444zm-.445-2.13L7.805.677l-.61 1.37 6.5 2.89zM7.195.677l-6.5 2.889.61 1.37 6.5-2.889zM.25 4.25v1.444h1.5V4.25zm5.806 8.639H1v1.5h5.056zm-4.336.96.632-2.167-1.44-.42L.28 13.43zm-.088-1.627h4.424v-1.5H1.632zm.062-6.528v5.778h1.5V5.694zm4.39 5.778V5.694h-1.5v5.778zm7.07-3.103L8.73 12.793l1.06 1.06 4.424-4.423zm-3.876.756c0-.115.093-.208.208-.208v1.5c.713 0 1.292-.579 1.292-1.292zm.208-.208c.115 0 .208.093.208.208h-1.5c0 .713.579 1.292 1.292 1.292zm.208.208a.21.21 0 0 1-.208.208v-1.5c-.713 0-1.292.579-1.292 1.292zm-.208.208a.21.21 0 0 1-.208-.208h1.5c0-.713-.578-1.292-1.292-1.292zm3.764 3.764c0-.115.093-.208.208-.208v1.5c.714 0 1.292-.578 1.292-1.292zm.208-.208c.115 0 .209.093.209.208h-1.5c0 .714.578 1.292 1.291 1.292zm.209.208a.21.21 0 0 1-.209.209v-1.5c-.713 0-1.291.578-1.291 1.291zm-.209.209a.21.21 0 0 1-.208-.209h1.5c0-.713-.578-1.291-1.292-1.291z"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingTax.displayName = "BuildingTax";

export { BuildingTax as default };
//# sourceMappingURL=building-tax.js.map
