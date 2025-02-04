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
const FeaturedBadge = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { clipPath: "url(#c)" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#fff",
          d: "M14.604 7.623a.43.43 0 0 0-.35-.295l-2.67-.388-1.195-2.421c-.146-.296-.632-.296-.778 0l-1.195 2.42-2.671.388a.434.434 0 0 0-.24.74L7.438 9.95l-.457 2.66a.434.434 0 0 0 .63.457l2.388-1.256 2.39 1.256a.43.43 0 0 0 .457-.032.43.43 0 0 0 .172-.425l-.457-2.66 1.933-1.884a.43.43 0 0 0 .11-.445"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 10.089,
          x2: 10.089,
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
            result: "effect1_dropShadow_8442_559"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_8442_559",
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
        /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect2_innerShadow_8442_559" }),
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
            in2: "effect2_innerShadow_8442_559",
            result: "effect3_innerShadow_8442_559"
          }
        )
      ))
    );
  }
);
FeaturedBadge.displayName = "FeaturedBadge";

export { FeaturedBadge as default };
//# sourceMappingURL=featured-badge.js.map
