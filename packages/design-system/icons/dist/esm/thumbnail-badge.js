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
const ThumbnailBadge = React.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement("g", { filter: "url(#a)" }, /* @__PURE__ */ React.createElement("circle", { cx: 10, cy: 8.903, r: 7.806, fill: "#3B82F6" }), /* @__PURE__ */ React.createElement(
        "circle",
        {
          cx: 10,
          cy: 8.903,
          r: 7.806,
          fill: "url(#b)",
          fillOpacity: 0.2
        }
      ), /* @__PURE__ */ React.createElement(
        "circle",
        {
          cx: 10,
          cy: 8.903,
          r: 7.556,
          stroke: "#000",
          strokeOpacity: 0.2,
          strokeWidth: 0.5
        }
      )),
      /* @__PURE__ */ React.createElement("g", { fill: "#fff", clipPath: "url(#c)" }, /* @__PURE__ */ React.createElement("path", { d: "M6.098 11.393a.724.724 0 0 1-.724-.723V7.136a.724.724 0 0 1 .951-.686l.487.163a.434.434 0 1 1-.274.822l-.297-.098v3.133l.297-.099a.433.433 0 1 1 .274.823l-.487.162a.7.7 0 0 1-.227.037M8.41 12.517a.723.723 0 0 1-.722-.723V6.012a.72.72 0 0 1 1-.667l.467.194a.434.434 0 0 1-.333.801l-.267-.111v5.349l.267-.111a.434.434 0 1 1 .333.8l-.467.195a.7.7 0 0 1-.278.055M14.038 5.752l-3.012-1.39A.722.722 0 0 0 10 5.018v7.77a.72.72 0 0 0 .722.724.7.7 0 0 0 .304-.067l3.012-1.39c.357-.165.588-.526.588-.92V6.672c0-.393-.23-.754-.588-.919" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 10.09,
          x2: 10.09,
          y1: 1.142,
          y2: 16.754,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React.createElement("clipPath", { id: "c" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M4.796 3.699h10.408v10.408H4.796z" })), /* @__PURE__ */ React.createElement(
        "filter",
        {
          id: "a",
          width: 20,
          height: 20,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React.createElement("feOffset", { dy: 1.054 }),
        /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 1.054 }),
        /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_6384_214"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_6384_214",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React.createElement("feOffset", { dy: 1.054 }),
        /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 1.054 }),
        /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" }),
        /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect2_innerShadow_6384_214" }),
        /* @__PURE__ */ React.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React.createElement("feOffset", { dy: -1.054 }),
        /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.635 }),
        /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" }),
        /* @__PURE__ */ React.createElement(
          "feBlend",
          {
            in2: "effect2_innerShadow_6384_214",
            result: "effect3_innerShadow_6384_214"
          }
        )
      ))
    );
  }
);
ThumbnailBadge.displayName = "ThumbnailBadge";

export { ThumbnailBadge as default };
//# sourceMappingURL=thumbnail-badge.js.map
